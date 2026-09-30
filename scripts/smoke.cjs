/* Pruebas de flujos reales. Ejecutar con NODE_PATH apuntando a Playwright. */
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const ROOT=path.resolve(__dirname,'..');
const URL=process.env.AUDITA_TEST_URL||'http://127.0.0.1:8000';
(async()=>{
 const browser=await chromium.launch({headless:true});
 const context=await browser.newContext({viewport:{width:1440,height:1080},reducedMotion:'reduce'});
 const page=await context.newPage();
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 async function click(action){await page.locator(`[data-action="${action}"]`).first().click();}
 async function route(name){await page.evaluate(n=>location.hash=n,name);await page.waitForFunction(n=>document.querySelector('#page-label').textContent===n,({inicio:'Vista general',repaso:'Repasar errores',progreso:'Mi progreso',banco:'Banco de preguntas',practica:'Sesión de práctica',guardadas:'Guardadas'})[name]);}
 const stored=()=>page.evaluate(()=>JSON.parse(localStorage.getItem('audita.study.v1')));
 async function select(values){for(const v of values)await page.locator(`[data-action="option"][data-value="${v}"]`).click();}
 async function finish(){await click('finish-confirm');await click('finish');await page.waitForSelector('.result-hero');}
 await page.goto(URL);
 assert.equal(await page.locator('.domain-card').count(),5);
 assert.equal(await page.evaluate(()=>window.STUDY_DATA.questions.length),120);
 await page.screenshot({path:path.join(ROOT,'preview-desktop.png'),fullPage:true});
 await click('ep1');await page.waitForSelector('.quiz-card');
 assert.equal(await page.locator('.option').count(),6);
 assert.equal(await page.locator('[data-action="check"]').isDisabled(),true);
 await select([0,2,3]);await click('check');
 assert.equal(await page.locator('.feedback.incorrect').count(),0);
 assert.equal((await stored()).records['ep1-1'].correct,1);
 await page.reload();await page.waitForSelector('.feedback');
 assert.equal((await stored()).records['ep1-1'].attempts,1);
 assert.equal(await page.locator('.option:disabled').count(),6);
 await click('next');await select([0,3]);await click('check');
 assert.equal(await page.locator('.feedback.incorrect').count(),1);
 assert.equal(await page.locator('.option.omitted').count(),2);
 assert.match(await page.locator('.nuance').innerText(),/reconstruyó/);
 await click('bookmark');assert.deepEqual((await stored()).bookmarks,['ep1-2']);
 await route('repaso');assert.equal(await page.locator('.bank-card').count(),1);
 await click('one');await click('confirm-new');await select([0,1,2]);await click('check');await finish();
 assert.equal((await stored()).records['ep1-2'].lastCorrect,true);
 await route('repaso');assert.match(await page.locator('.empty').innerText(),/no tienes errores pendientes/);
 await route('guardadas');assert.equal(await page.locator('.bank-card').count(),1);
 await route('banco');await page.locator('#search').fill('contraseñas');assert.ok(await page.locator('.bank-card').count()>0);
 await page.locator('#search').fill('sin-resultados-123');assert.equal(await page.locator('.empty').count(),1);
 await page.locator('#search').fill('');await page.locator('[data-action="filter"][data-id="domain"]').click();
 assert.equal(await page.locator('.bank-card').count(),50);
 await page.locator('#domain-filter').selectOption('3');assert.equal(await page.locator('.bank-card').count(),10);
 await click('selection');await page.waitForSelector('.quiz-card');
 let s=(await stored()).session;
 const q=await page.evaluate(id=>window.STUDY_DATA.questions.find(q=>q.id===id),s.ids[0]);
 for(const v of q.answers){const position=s.orders[q.id].indexOf(v);await page.keyboard.press(String(position+1));}
 await page.keyboard.press('Enter');await page.waitForSelector('.feedback');
 assert.equal((await stored()).records[q.id].lastCorrect,true);
 await finish();assert.equal((await stored()).history.at(-1).correct,1);
 await route('inicio');await click('configure');await page.locator('#exam-count').selectOption('10');await page.locator('#exam-time').selectOption('0');await page.locator('#exam-shuffle').uncheck();await page.locator('#exam-form button[type=submit]').click();
 await page.waitForSelector('.quiz-card');await select([0,2,3]);
 assert.equal(await page.locator('.feedback').count(),0);await click('next');await click('previous');
 assert.equal(await page.locator('.option.selected').count(),3);
 await select([3]);assert.equal(await page.locator('.option.selected').count(),2);await select([3]);
 await finish();assert.equal((await stored()).history.at(-1).correct,1);assert.equal((await stored()).history.at(-1).total,10);
 assert.equal((await stored()).records['ep1-10'].lastCorrect,false);
 await route('inicio');await click('configure');await page.locator('#exam-count').selectOption('10');await page.locator('#exam-time').selectOption('15');await page.locator('#exam-form button[type=submit]').click();await page.waitForSelector('#timer');
 await page.evaluate(()=>{const s=JSON.parse(localStorage.getItem('audita.study.v1'));s.session.deadline=Date.now()-1;localStorage.setItem('audita.study.v1',JSON.stringify(s));});
 await page.reload();await page.waitForSelector('.result-hero');assert.equal((await stored()).lastResult.expired,true);assert.equal((await stored()).session,null);
 const backup=await stored();
 await click('settings');const downloadPromise=page.waitForEvent('download');await click('export');const download=await downloadPromise;const file='/tmp/audita-test-backup.json';await download.saveAs(file);assert.equal(JSON.parse(fs.readFileSync(file)).version,1);
 await page.locator('#import-file').setInputFiles({name:'invalid.json',mimeType:'application/json',buffer:Buffer.from('{"version":1}')});await page.waitForFunction(()=>document.querySelector('#toast').textContent.includes('No se pudo importar'));
 await click('reset-confirm');await click('reset');assert.deepEqual((await stored()).records,{});
 await click('settings');await page.locator('#import-file').setInputFiles(file);await page.waitForSelector('[data-action="confirm-import"]');await click('confirm-import');assert.deepEqual((await stored()).records,backup.records);
 await page.setViewportSize({width:390,height:844});await route('inicio');
 assert.equal(await page.locator('.sidebar').isVisible(),false);assert.equal(await page.locator('.mobile-nav').isVisible(),true);
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
 await page.screenshot({path:path.join(ROOT,'preview-mobile.png'),fullPage:true});
 await click('ep1');await page.waitForSelector('.quiz-card');await select([0,2,3]);await click('check');
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
 await page.waitForFunction(()=>!document.querySelector('#toast').classList.contains('visible'));await page.evaluate(()=>window.scrollTo(0,0));await page.screenshot({path:path.join(ROOT,'preview-mobile-practice.png'),fullPage:true});
 await page.setViewportSize({width:320,height:740});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
 // Changing a corrected answer cannot increment attempts or alter the selected set.
 const before=(await stored()).records['ep1-1'].attempts;await page.keyboard.press('2');assert.equal((await stored()).records['ep1-1'].attempts,before);
 assert.deepEqual(errors,[]);
 // Offline direct-file use is supported: data.js does not depend on fetch.
 const local=await context.newPage();await local.goto('file://'+path.join(ROOT,'index.html'));assert.equal(await local.locator('.domain-card').count(),5);await local.locator('[data-action="ep1"]').click();await local.waitForSelector('.option');assert.equal(await local.locator('.option').count(),6);
 await browser.close();
 console.log('PASS: 120 preguntas; corrección exacta; omisiones; claves EP1; mezcla de opciones; guardado tras recarga; repaso; guardadas; búsqueda y filtros; simulacro y revisión; entrega por tiempo; exportación/importación y validación; reinicio; 1440/390/320 px; uso directo sin servidor; sin errores de JavaScript.');
})().catch(e=>{console.error(e);process.exit(1);});
