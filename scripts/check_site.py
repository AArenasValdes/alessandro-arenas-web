#!/usr/bin/env python3
"""Chequeo estático barato; no reemplaza pruebas visuales y manuales en navegador."""
from pathlib import Path
import re, sys
from html.parser import HTMLParser

ROOT=Path(__file__).resolve().parents[1]/'sitio'
issues=[]
for req in ['index.html','privacidad.html','styles.css','script.js','config.js','assets/logo.svg','assets/og-cover.png','_headers','robots.txt']:
    if not (ROOT/req).is_file(): issues.append(f'Falta: {req}')
class LocalRefs(HTMLParser):
    def __init__(self): super().__init__(); self.refs=[]
    def handle_starttag(self,tag,attrs):
        d=dict(attrs)
        for key in ('src','href'):
            val=d.get(key,'')
            if not val or val.startswith(('#','http:','https:','mailto:','tel:','data:','javascript:')): continue
            self.refs.append(val.split('?')[0].split('#')[0])
for f in ROOT.glob('*.html'):
    p=LocalRefs();p.feed(f.read_text(encoding='utf-8'))
    for v in p.refs:
        if not (ROOT/v).exists(): issues.append(f'{f.name} apunta a archivo inexistente: {v}')
index=(ROOT/'index.html').read_text(encoding='utf-8')
for id in ('contenido','servicios','ejemplo','proyecto','preguntas','contacto','contactForm','formMessage'):
    if not re.search(r'\bid=["\']'+re.escape(id)+r'["\']',index): issues.append(f'Falta elemento id={id}')
if 'name="viewport"' not in index: issues.append('Falta viewport')
config=(ROOT/'config.js').read_text(encoding='utf-8')
if re.search(r'whatsapp:\s*["\']["\']',config): print('AVISO: configura WhatsApp comercial antes de publicar.')
if issues:
    print('FALLOS:')
    for i in issues: print(' -',i)
    sys.exit(1)
print('OK: archivos y enlaces locales básicos correctos.')
