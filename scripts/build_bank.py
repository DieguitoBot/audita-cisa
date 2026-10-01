"""Reconstruye data.js desde el EP1 y las preguntas originales de practica."""
from pathlib import Path
import re, json
ROOT = Path(__file__).resolve().parent.parent
manual = 'CISA Official Review Manual (2024)_compressed-1.md'
domains = [
 {'id':1,'name':'Proceso de auditoría de SI','short':'Auditoría de SI','description':'Evidencia, controles y decisiones basadas en riesgos.','icon':'scan'},
 {'id':2,'name':'Gobernanza y gestión de TI','short':'Gobernanza de TI','description':'Estrategia, responsabilidades y valor para el negocio.','icon':'layers'},
 {'id':3,'name':'Adquisición y desarrollo de SI','short':'Desarrollo de SI','description':'Requisitos, pruebas y puesta en producción.','icon':'code'},
 {'id':4,'name':'Operaciones y resiliencia del negocio','short':'Operaciones y resiliencia','description':'Continuidad, recuperación y servicios confiables.','icon':'activity'},
 {'id':5,'name':'Protección de activos de información','short':'Protección de activos','description':'Accesos, redes y protección de la información.','icon':'shield'}
]
cases = [
 {'id':1,'name':'Betatronics','label':'Controles bajo la lupa','pages':'79–83','text':'Betatronics fabrica productos electrónicos y necesita evaluar sus controles generales de TI. Se han repetido problemas de cuentas de administrador compartidas, contraseñas, separación de funciones y cambios sin documentar. El despliegue de parches solo es parcialmente efectivo. El CIO entregó narrativas y flujos aprobados, pero falta evaluar los riesgos. La empresa crece rápidamente y registra mayor rotación de personal. El estatuto de auditoría designa al comité de auditoría como órgano supervisor.','sourceCount':8},
 {'id':2,'name':'Accenco','label':'Cuando TI pierde el rumbo','pages':'157–161','text':'Accenco es una entidad financiera pequeña en crecimiento. Sus objetivos de negocio y de TI solo aparecen en listas y diapositivas incompletas. El comité de riesgos casi no se reúne y no conserva actas. Varias iniciativas no tienen presupuesto. El responsable de SI y auditoría interna reportan al CFO, quien supervisa TI. Los programadores pueden acceder a datos de producción con aprobación exclusiva del DBA; un bibliotecario de programas migra el código. Los responsables de negocio revisan y firman los resultados financieros mensuales.','sourceCount':8},
 {'id':3,'name':'Wonderwheels','label':'Una migración en problemas','pages':'241–245','text':'Wonderwheels es un minorista con terminales de venta inalámbricas que utilizan WEP. Los servidores de tienda se sitúan en zonas de atención al público. La base de datos central está en una subred protegida, pero lleva más de dos años sin parches y perdió soporte del proveedor. Se envían datos de ventas a un tercero sin verificar su protección. La migración a una nueva base se entrega por fases y utiliza datos reales en pilotos. Aparecen bloqueos, corrupción de datos y errores que ya habían sido corregidos. Auditoría no participa en decisiones clave sobre controles y cumplimiento.','sourceCount':4},
 {'id':4,'name':'Pinkwater Bank','label':'Prepararse para la interrupción','pages':'345–348','text':'Pinkwater Bank tiene 16 sucursales y propone enlaces de microondas y una conexión alternativa a Internet, además de Wi-Fi para clientes. Los planes de continuidad llevan más de ocho años sin actualizarse pese a un crecimiento superior al 300 %. La sede tiene 750 empleados y más de 60 servidores; el sitio alternativo contratado dispone de 25 servidores y 100 puestos. Las aplicaciones críticas tienen objetivos de recuperación de tres a cinco días. Las sucursales mantienen acuerdos recíprocos de respaldo. La gerencia busca mejorar la recuperación con costos razonables.','sourceCount':4},
 {'id':5,'name':'Spectertainment','label':'La oficina está en todas partes','pages':'545–546','text':'Spectertainment produce y distribuye videos musicales. Sus empleados trabajan desde casa o mientras viajan, accediendo a los sistemas mediante VPN y credenciales individuales. Se obliga a cambiar la contraseña inicial. Hay capacitación y una política de acceso remoto, pero esta no define requisitos para dispositivos personales. Auditoría detecta el uso frecuente de equipos propios para conectarse a la VPN. La gerencia quiere conservar la productividad del trabajo remoto y reforzar la seguridad.','sourceCount':5}
]
notes = {
 2:'El archivo no incluye una línea explícita de respuestas. La clave A, B y C se reconstruyó a partir de su sustento.',
 11:'Un control es compensatorio por la función que cumple ante una carencia concreta. Segmentación, conciliaciones u otros controles pueden ser compensatorios según el contexto. MFA sobre cuentas compartidas no restablece por sí solo la trazabilidad individual.',
 12:'La clasificación del EP1 es simplificada: OWASP SAMM es un modelo de madurez de seguridad del software. No todos los elementos listados prescriben controles de la misma manera.',
 21:'El consentimiento no es una condición universal para todo tratamiento. Estudia también la finalidad y la base aplicable al tratamiento; aquí se conserva la selección del EP1.',
 22:'“Interna” también es una categoría habitual y válida. Las categorías dependen del esquema aprobado por la organización; la exclusión de B corresponde a la clave de este parcial.',
 23:'Un punto de venta puede incluir recursos de TI. La clave interpreta “puntos de venta físicos” como locales comerciales, no como sus terminales informáticos.',
 25:'El enunciado se reubicó antes de las opciones; en el archivo aparece después de la clave.',
 26:'Lean Six Sigma también puede aplicarse a la mejora de calidad en TI. Se conserva A, B y C para practicar el parcial, pero excluir E no es una regla general.',
 27:'La participación depende del modelo de gobierno. Auditoría aporta aseguramiento independiente; no debe asumir decisiones de gestión. Otras áreas de negocio también pueden participar.'
}
questions=[]
src=(ROOT/'EP1 Resuelto.md').read_text()
parts=list(re.finditer(r'Pregunta (\d+)\s*\n',src))
for i,m in enumerate(parts):
 n=int(m.group(1)); block=src[m.end():parts[i+1].start() if i+1<len(parts) else len(src)]
 # Do not consume the next chapter heading in the preceding rationale.
 block=re.split(r'## INSTRUCCIONES:',block)[0]
 opts=list(re.finditer(r'(?<!\w)([A-F])\)\s*',block))[:6]
 assert len(opts)==6,(n,len(opts))
 options=[]
 for j,o in enumerate(opts):
  end=opts[j+1].start() if j<5 else re.search(r'Respuestas correctas:|## Sustento:|\n- Sustento:',block[o.end():]).start()+o.end()
  options.append(re.sub(r'\s+',' ',block[o.end():end]).strip(' \n-'))
 prompt=block[:opts[0].start()].strip(' \n-#')
 if n==25: prompt='En la supervisión y generación de reportes de TI, ¿qué elementos son válidos?'
 answer=re.search(r'Respuestas correctas:([^\n]+)',block)
 answers=re.findall(r'\b[A-F]\b',answer.group(1)) if answer else ['A','B','C']
 explanation=re.split(r'(?:##\s*|-\s*)Sustento:',block)[-1]
 explanation=re.sub(r'(?m)^\s*-\s*o\s*','',explanation)
 explanation=re.sub(r'\s+',' ',explanation).strip()
 explanation=re.sub(r'\s*##\s*$','',explanation)
 questions.append(dict(id=f'ep1-{n}',number=n,domain=1 if n<=15 else 2,kind='ep1',topic='Parcial · capítulo '+str(1 if n<=15 else 2),prompt=prompt,options=options,answers=[ord(a)-65 for a in answers],explanation=explanation,note=notes.get(n,''),source=f'EP1 Resuelto.md · pregunta {n}',sourceFile='EP1 Resuelto.md'))
for line in (ROOT/'scripts/questions.txt').read_text().splitlines():
 if not line or line.startswith('#'): continue
 kind,dom,num,topic,prompt,opts,key,explanation,ref=line.split('~')
 d=int(dom); num=int(num)
 questions.append(dict(id=f'{kind}-{d}-{num}',number=num,domain=d,kind=kind,topic=topic,prompt=prompt,options=opts.split('|'),answers=[ord(a)-65 for a in key],explanation=explanation,note='',source=f'Manual CISA 2024 · dominio {d} · {ref}. Pregunta original de práctica, no oficial.',sourceFile=manual,caseId=d if kind=='case' else None))
assert len(questions)==120,len(questions)
assert len({q['id'] for q in questions})==120
iso = json.loads((ROOT/'scripts/iso27701.json').read_text())
assert [c['id'] for c in iso['clauses']] == list(range(1, 12))
clause_by_id = {c['id']: c for c in iso['clauses']}
for line in (ROOT/'scripts/iso_questions.txt').read_text().splitlines():
 if not line or line.startswith('#'): continue
 clause,num,ref,prompt,opts,key,explanation = line.split('~')
 c = clause_by_id[int(clause)]
 questions.append(dict(id=f'iso-{clause}-{num}',number=int(num),domain=None,clause=c['id'],kind='iso',topic=f"Cláusula {clause} · {c['name']}",prompt=prompt,options=opts.split('|'),answers=[ord(a)-65 for a in key],explanation=explanation,note='Ejercicio original de estudio; no es una pregunta oficial ni una traducción oficial de la norma.',source=f"ISO/IEC 27701:2025 · referencias {ref}. PDF proporcionado; enlace al inicio de la cláusula principal {clause}. Nivel y cobertura contrastados con el cuestionario aportado.",sourceFile=iso['sourceFile'],sourcePage=c['pdfPage']))
assert len(questions) == 152
assert len({q['id'] for q in questions}) == len(questions)
assert (ROOT/iso['sourceFile']).is_file()
assert (ROOT/iso['referenceFile']).is_file()
assert {len(q['answers']) for q in questions if q['kind']=='iso'} == {2,3,4,5}
for c in iso['clauses']:
 assert sum(q.get('clause') == c['id'] for q in questions) >= 2
for q in questions:
 assert len(q['options'])==6,q['id']
 assert 2<=len(q['answers'])<=5,q['id']
 assert len(set(q['answers']))==len(q['answers']) and all(0<=a<6 for a in q['answers']),q['id']
 assert len(set(q['options']))==6,q['id']
 assert q['prompt'] and q['explanation'],q['id']
for d in range(1,6):
 assert sum(q['domain']==d and q['kind']=='domain' for q in questions)==10
 assert sum(q['domain']==d and q['kind']=='case' for q in questions)==8
payload=dict(domains=domains,cases=cases,questions=questions,iso=iso)
(ROOT/'data.js').write_text('/* Generado con python3 scripts/build_bank.py */\nwindow.STUDY_DATA = '+json.dumps(payload,ensure_ascii=False,indent=2)+';\n')
print(f'Banco validado: {len(questions)} preguntas, 5 dominios, 5 casos y 11 cláusulas ISO/IEC 27701:2025.')
