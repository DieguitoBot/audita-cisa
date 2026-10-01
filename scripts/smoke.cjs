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
 assert.equal(await page.evaluate(()=>window.STUDY_DATA.questions.length),152);
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
 // ISO guide, all eleven clause pools, filtering, corrections and backup compatibility.
 const isoContext=await browser.newContext({viewport:{width:1440,height:1080},reducedMotion:'reduce'});
 const isoPage=await isoContext.newPage();isoPage.on('pageerror',e=>errors.push(e.message));
 await isoPage.goto(URL+'/#iso');
 assert.equal(await isoPage.locator('.clause-card').count(),11);
 const pdf=await isoPage.request.get(URL+'/ISO%2027701-2025.pdf');
 assert.equal(pdf.status(),200);assert.match(pdf.headers()['content-type'],/pdf/);
 await isoPage.locator('[data-action="iso-jump"][data-id="10"]').click();
 assert.equal(await isoPage.locator('#clause-10 details').getAttribute('open'),'');
 assert.equal(await isoPage.evaluate(()=>location.hash),'#iso');
 for(let c=1;c<=11;c++){
   await isoPage.goto(URL+'/#iso');
   await isoPage.locator(`[data-action="iso-practice"][data-id="${c}"]`).click();
   if(await isoPage.locator('[data-action="confirm-new"]').count())await isoPage.locator('[data-action="confirm-new"]').click();
   await isoPage.waitForSelector('.quiz-card');
   const ids=await isoPage.evaluate(()=>JSON.parse(localStorage.getItem('audita.study.v1')).session.ids);
   assert.ok(ids.length>=2);assert.ok(ids.every(id=>id.startsWith(`iso-${c}-`)));
 }
 const iq=await isoPage.evaluate(()=>{const s=JSON.parse(localStorage.getItem('audita.study.v1'));return window.STUDY_DATA.questions.find(q=>q.id===s.session.ids[0]);});
 for(const a of iq.answers)await isoPage.locator(`[data-action="option"][data-value="${a}"]`).click();
 await isoPage.locator('[data-action="check"]').click();await isoPage.waitForSelector('.feedback');
 assert.equal(await isoPage.locator('.feedback.incorrect').count(),0);
 assert.match(await isoPage.locator('.source-note a').getAttribute('href'),/#page=20$/);
 await isoPage.locator('[data-action="bookmark"]').click();await isoPage.reload();await isoPage.waitForSelector('.feedback');
 assert.equal(await isoPage.evaluate(id=>JSON.parse(localStorage.getItem('audita.study.v1')).records[id].attempts,iq.id),1);
 await isoPage.goto(URL+'/#banco');await isoPage.locator('[data-action="filter"][data-id="iso"]').click();
 assert.equal(await isoPage.locator('.bank-card').count(),32);
 await isoPage.locator('#domain-filter').selectOption('c6');assert.equal(await isoPage.locator('.bank-card').count(),5);
 await isoPage.locator('#search').fill('declaración');assert.equal(await isoPage.locator('.bank-card').count(),1);
 await isoPage.goto(URL+'/#iso');assert.equal(await isoPage.locator('.iso-progress [role="progressbar"]').getAttribute('aria-valuenow'),'1');
 await isoPage.locator('[data-action="configure"]').click();assert.equal(await isoPage.locator('#exam-source').inputValue(),'iso');
 await isoPage.locator('#exam-source').selectOption('c1');assert.equal(await isoPage.locator('#exam-count').inputValue(),'all');
 await isoPage.locator('#exam-time').selectOption('0');await isoPage.locator('#exam-form button[type="submit"]').click();
 await isoPage.locator('[data-action="confirm-new"]').click();await isoPage.waitForSelector('.quiz-card');
 assert.equal(await isoPage.evaluate(()=>JSON.parse(localStorage.getItem('audita.study.v1')).session.ids.length),2);
 await isoPage.goto(URL+'/#iso');await isoPage.locator('[data-action="configure"]').click();
 await isoPage.locator('#exam-source').selectOption('all');await isoPage.locator('#exam-count').selectOption('all');await isoPage.locator('#exam-time').selectOption('0');
 await isoPage.locator('#exam-form button[type="submit"]').click();await isoPage.locator('[data-action="confirm-new"]').click();await isoPage.waitForSelector('.quiz-card');
 assert.equal(await isoPage.evaluate(()=>JSON.parse(localStorage.getItem('audita.study.v1')).session.ids.length),152);
 const fullBackup=await isoPage.evaluate(()=>localStorage.getItem('audita.study.v1'));
 await isoPage.locator('[data-action="settings"]').click();
 await isoPage.locator('#import-file').setInputFiles({name:'all.json',mimeType:'application/json',buffer:Buffer.from(fullBackup)});
 await isoPage.waitForSelector('[data-action="confirm-import"]');await isoPage.locator('[data-action="confirm-import"]').click();
 await isoPage.goto(URL+'/#iso');await isoPage.locator('#clause-6 summary').click();
 await isoPage.screenshot({path:path.join(ROOT,'preview-iso-desktop.png'),fullPage:true});
 for(const width of [390,320]){
   await isoPage.setViewportSize({width,height:844});
   assert.equal(await isoPage.locator('#mobile-nav a[href="#iso"]').isVisible(),true);
   assert.equal(await isoPage.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
 }
 await isoPage.screenshot({path:path.join(ROOT,'preview-iso-mobile.png'),fullPage:true});
 // Long scenario and five-answer key remain usable on a narrow mobile screen.
 await isoPage.goto(URL+'/#banco');await isoPage.locator('#search').fill('');
 await isoPage.locator('[data-action="one"][data-id="iso-6-2"]').click();
 await isoPage.locator('[data-action="confirm-new"]').click();
 await isoPage.waitForSelector('.quiz-card');
 const riskAnswers=await isoPage.evaluate(()=>window.STUDY_DATA.questions.find(q=>q.id==='iso-6-2').answers);
 assert.equal(riskAnswers.length,5);
 for(const value of riskAnswers)await isoPage.locator(`[data-action="option"][data-value="${value}"]`).click();
 await isoPage.locator('[data-action="check"]').click();
 assert.equal(await isoPage.locator('.feedback.incorrect').count(),0);
 assert.equal(await isoPage.locator('.option.correct').count(),5);
 assert.equal(await isoPage.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
 await local.goto('file://'+path.join(ROOT,'index.html')+'#iso');assert.equal(await local.locator('.clause-card').count(),11);
 // Revision 1 grades must not be applied to rewritten ISO questions, on load or import.
 const migrationContext=await browser.newContext();
 const migrationPage=await migrationContext.newPage();
 migrationPage.on('pageerror',e=>errors.push(e.message));
 await migrationPage.goto(URL+'/#iso');
 const legacySession={title:'ISO anterior',mode:'practice',ids:['iso-1-1'],index:0,
   responses:{'iso-1-1':{selected:[0,1,4],graded:true,correct:true}},
   orders:{'iso-1-1':[0,1,2,3,4,5]},started:Date.now(),deadline:null};
 const legacyRecord={attempts:1,correct:1,streak:1,lastCorrect:true,lastAt:Date.now()};
 const legacy={version:1,records:{'ep1-1':legacyRecord,'iso-1-1':legacyRecord},
   bookmarks:['ep1-1','iso-1-1'],history:[{title:'ISO anterior',mode:'practice',date:Date.now(),correct:1,total:1}],
   session:legacySession,lastResult:legacySession};
 await migrationPage.evaluate(s=>localStorage.setItem('audita.study.v1',JSON.stringify(s)),legacy);
 await migrationPage.reload();
 assert.equal(await migrationPage.locator('.iso-progress [role="progressbar"]').getAttribute('aria-valuenow'),'0');
 await migrationPage.locator('[data-action="iso-practice"][data-id="1"]').click();
 await migrationPage.waitForSelector('.quiz-card');
 assert.equal(await migrationPage.locator('.feedback').count(),0);
 const migrated=await migrationPage.evaluate(()=>JSON.parse(localStorage.getItem('audita.study.v1')));
 assert.equal(migrated.isoRevision,2);
 assert.deepEqual(migrated.records,{'ep1-1':legacyRecord});
 assert.deepEqual(migrated.bookmarks,legacy.bookmarks);
 assert.deepEqual(migrated.history,legacy.history);
 assert.equal(migrated.lastResult,null);
 assert.deepEqual(migrated.previousIso.records,{'iso-1-1':legacyRecord});
 assert.deepEqual(migrated.previousIso.session,legacySession);
 await migrationPage.locator('[data-action="settings"]').click();
 await migrationPage.locator('#import-file').setInputFiles({name:'legacy.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(legacy))});
 await migrationPage.locator('[data-action="confirm-import"]').click();
 const imported=await migrationPage.evaluate(()=>JSON.parse(localStorage.getItem('audita.study.v1')));
 assert.equal(imported.isoRevision,2);
 assert.deepEqual(imported.records,{'ep1-1':legacyRecord});
 assert.deepEqual(imported.bookmarks,legacy.bookmarks);
 assert.deepEqual(imported.history,legacy.history);
 assert.equal(imported.session,null);assert.equal(imported.lastResult,null);
 assert.deepEqual(imported.previousIso,migrated.previousIso);
 // A CISA-only pending session remains resumable after the same migration.
 const cisaSession={...legacySession,title:'EP1',ids:['ep1-1'],responses:{},orders:{'ep1-1':[0,1,2,3,4,5]}};
 await migrationPage.evaluate(s=>localStorage.setItem('audita.study.v1',JSON.stringify(s)),{...legacy,session:cisaSession,lastResult:null});
 await migrationPage.goto(URL+'/#practica');await migrationPage.reload();
 assert.equal(await migrationPage.locator('.option').count(),6);
 await migrationPage.locator('[data-action="option"][data-value="0"]').click();
 const cisaMigrated=await migrationPage.evaluate(()=>JSON.parse(localStorage.getItem('audita.study.v1')));
 assert.deepEqual(cisaMigrated.session.ids,['ep1-1']);
 assert.deepEqual(cisaMigrated.records,{'ep1-1':legacyRecord});
 await migrationContext.close();
 assert.deepEqual(errors,[]);
 await browser.close();
 console.log('PASS: 152 preguntas; corrección exacta; omisiones; claves EP1; mezcla de opciones; guardado tras recarga; repaso; guardadas; búsqueda y filtros; simulacro y revisión; entrega por tiempo; exportación/importación y validación; reinicio; 1440/390/320 px; uso directo sin servidor; 11 cláusulas ISO; escenario móvil con cinco respuestas; migración de progreso y respaldos ISO anteriores; sin errores de JavaScript.');
})().catch(e=>{console.error(e);process.exit(1);});
