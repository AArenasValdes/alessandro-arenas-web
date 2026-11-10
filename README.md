# Alessandro Arenas — landing comercial

Repositorio para trabajo con Codex, Claude Code y Antigravity. Sin backend, sin dependencias npm, sin costo de hosting estático previsto.

## Carpeta clave
- `sitio/`: contenido publicable en Cloudflare Pages.
- `redes/`: publicaciones y archivos de marca.
- `guias/`: estrategia de marketing e identidad.
- `docs/BRIEF_DISENO.md`: diseño, conversión y objetivos.
- `docs/PUBLICACION_CLOUDFLARE.md`: cómo desplegar por $0 en hosting.
- `docs/PROMPT_PARA_CODEX.md`: encargo listo para el agente.
- `AGENTS.md`: reglas compartidas para Codex y Antigravity.
- `CLAUDE.md`: adaptador para Claude Code.
- `.agents/skills/revision-landing/SKILL.md`: habilidad de revisión visual para Antigravity.

## Desarrollo local
`cd sitio && python -m http.server 8000`

Abrir `http://localhost:8000`.

## Validar
`python scripts/check_site.py`

## Importante
No publiques antes de configurar el número comercial real en `sitio/config.js`, revisar política de privacidad, probar WhatsApp desde un celular y definir la URL definitiva para canonical y Open Graph. `config.js` es archivo público, nunca pegar llaves API o secretos.

## Copia de origen
Derivado del kit de lanzamiento previo. Se aplicaron correcciones editoriales mínimas y se añadió estructura de agentes, validación y configuración para Cloudflare; no se rediseñó toda la web.
