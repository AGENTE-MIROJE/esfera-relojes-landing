---
name: eidhi-tareas
description: Completar tareas del campus EIDHI International University (campus.eidhi.com) para Carlos Saavedra. Usar este skill SIEMPRE que el usuario pida realizar tareas del campus EIDHI, tareas de COA04, MAR03, PRO03, RHH02, tareas de cualquier materia de EIDHI, avanzar en el campus, subir tareas, responder foros, o cualquier actividad relacionada con campus.eidhi.com. Este skill contiene todas las instrucciones, credenciales, plantillas y flujo de trabajo necesarios.
---

# EIDHI Campus — Flujo de Trabajo Completo

## Credenciales
- **URL:** https://campus.eidhi.com
- **Usuario:** carersa
- **Contraseña:** S44v3dr41507*

---

## Autenticación (WordPress HttpOnly cookies)

WordPress establece las cookies de auth como HttpOnly+Secure. El cookie jar de curl (`-c`) IGNORA estas cookies. Siempre extraer manualmente del header de respuesta:

```bash
COOKIE=$(curl -s -i -X POST 'https://campus.eidhi.com/wp-login.php' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36' \
  -d 'log=carersa&pwd=S44v3dr41507*&wp-submit=Log+In&redirect_to=%2Fwp-admin%2F&testcookie=1' \
  2>/dev/null | grep -i 'set-cookie.*wordpress_logged_in' | grep -o 'wordpress_logged_in[^;]*' | head -1)
AUTH="$COOKIE"
```

Usar en cada request como: `-H "Cookie: $AUTH"`

---

## Flujo de Trabajo — Orden Obligatorio

1. **LOGIN** → obtener cookie de auth fresca
2. **VERIFICAR disponibilidad** — NO trabajar semanas no habilitadas (ver calendario)
3. **REVISAR** el contenido de cada lección en la plataforma
4. **MARCAR** Clase Online y Aprendizaje Multimedia como completados
5. **CREAR** los documentos Word de respuesta usando las plantillas
6. **GUARDAR** los archivos en la carpeta del Mac correspondiente
7. **MOSTRAR** el contenido completo al usuario → **ESPERAR APROBACIÓN EXPLÍCITA** (OBLIGATORIO)
8. **SUBIR** los archivos aprobados a la plataforma (se marcan automáticamente al subir)
9. **MARCAR** cada tarea subida como completada (verificar `ld-status-complete` en la página)
10. **PUBLICAR** respuestas de foro directamente en la plataforma (nunca en Word)
11. **COMENTAR** en exactamente 2 compañeros en cada foro (nonce fresco por cada POST)
12. **MARCAR** el topic del foro como completado después de los 2 comentarios

---

## Calendarios de Desbloqueo de Semanas

| Curso | Semana 7 | Semana 8 | Semana 9 | Semana 10 |
|-------|----------|----------|----------|-----------|
| COA04 | 17 mar 2026 | 24 mar 2026 | 31 mar 2026 | examen final |
| MAR03 | 17 mar 2026 | 24 mar 2026 | 31 mar 2026 | examen final |
| PRO03 | 17 mar 2026 | 24 mar 2026 | 31 mar 2026 | examen final |
| RHH02 | 17 mar 2026 | 24 mar 2026 | 31 mar 2026 | examen final |

⛔ **Si la semana no está habilitada, SUSPENDER las tareas y avisar al usuario.**

---

## Course IDs

| Curso | ID |
|-------|----|
| COA04 | 174542 |
| MAR03 | 174556 |
| PRO03 | 174583 |
| RHH02 | 174569 |

---

## Estructura de Carpetas en el Mac

```
/Users/carlossaavedra/Documents/CARLOS SAAVEDRA/EIDHI/
├── FORMATOS DE RESPUESTA DE TAREAS/
│   ├── PLANTILLA FORMATO RESPUESTA.docx
│   └── Evaluación SEM - ENSAYO.docx
├── COA04 - PNL Aplicada al Liderazgo/
│   └── Semana X - [Tema]/
├── MAR03 - Comportamiento del Consumidor II/
│   └── Semana X - [Tema]/
├── PRO03 - Planeacion Estrategica en la Toma de Decisiones/
│   └── Semana X - [Tema]/
└── RHH02 - Comunicacion Efectiva para Lideres/
    └── Semana X - [Tema]/
```

---

## Tipos de Tarea por Semana

| Tarea | Formato | Acción |
|-------|---------|--------|
| Producción de Conocimiento | Word doc | Crear + mostrar + esperar aprobación + subir |
| Pensamiento Crítico | Word doc | Crear + mostrar + esperar aprobación + subir |
| Solución de Problemas | Word doc | Crear + mostrar + esperar aprobación + subir |
| Evaluación | Word doc (ensayo SOLO si dice "ensayo") | Crear + mostrar + esperar aprobación + subir |
| Foro de Interacción Grupal | Texto directo en plataforma | Publicar + 2 comentarios + marcar completo |
| Aprendizaje Multimedia | — | Marcar como completado |
| Clase Online | — | Marcar como completado |

---

## Plantillas de Documentos Word

| Plantilla | Cuándo usar |
|-----------|-------------|
| `PLANTILLA FORMATO RESPUESTA.docx` | **Todas** las tareas normales |
| `Evaluación SEM - ENSAYO.docx` | **SOLO** cuando la tarea dice explícitamente la palabra **"ensayo"** |

### Patrón Python para tareas normales (build_doc)

```python
from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH

TEMPLATE = "/Users/carlossaavedra/Documents/CARLOS SAAVEDRA/EIDHI/FORMATOS DE RESPUESTA DE TAREAS/PLANTILLA FORMATO RESPUESTA.docx"

def build_doc(output_path, blocks):
    doc = Document(TEMPLATE)
    body = doc.element.body
    for child in list(body):
        tag = child.tag.split('}')[-1] if '}' in child.tag else child.tag
        if tag in ('p', 'tbl'):
            body.remove(child)
    for btype, text in blocks:
        if btype == 'header':
            p = doc.add_paragraph(style='Title')
            p.alignment = WD_ALIGN_PARAGRAPH.CENTER
            p.add_run(text).bold = True
        elif btype == 'info':
            p = doc.add_paragraph(style='List Paragraph')
            p.alignment = WD_ALIGN_PARAGRAPH.LEFT
            p.add_run(text)
        elif btype == 'title':
            p = doc.add_paragraph(style='Title')
            p.alignment = WD_ALIGN_PARAGRAPH.CENTER
            p.add_run(text).bold = True
        elif btype == 'body':
            p = doc.add_paragraph(style='Normal')
            p.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
            p.add_run(text)
    doc.save(output_path)
```

---

## Tablas en Word — OBLIGATORIO usar tablas reales

⛔ **NUNCA usar ASCII art, texto plano ni caracteres especiales para representar tablas, cuadros sinópticos, diagramas o estructuras.**

✅ **SIEMPRE usar `doc.add_table()` real** con colores, bordes y formato visual.

```python
from docx.shared import RGBColor, Inches
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

def shade_cell(cell, fill_hex):
    tc = cell._tc
    tcPr = tc.get_or_add_tcPr()
    shd = OxmlElement('w:shd')
    shd.set(qn('w:val'), 'clear')
    shd.set(qn('w:color'), 'auto')
    shd.set(qn('w:fill'), fill_hex)
    tcPr.append(shd)

# Verificar estilos de tabla disponibles en el template:
# from docx.enum.style import WD_STYLE_TYPE
# table_styles = [s.name for s in doc.styles if s.type == WD_STYLE_TYPE.TABLE]
# Usar 'Normal Table' o 'Grid Table 4 Accent 6' (los disponibles en el template EIDHI)

table = doc.add_table(rows=1, cols=3)
table.style = 'Normal Table'   # usar siempre uno disponible

# Encabezado con fondo oscuro + texto blanco
hdr = table.rows[0].cells
hdr[0].text = 'Columna 1'
shade_cell(hdr[0], '1F3864')  # azul oscuro
for run in hdr[0].paragraphs[0].runs:
    run.bold = True
    run.font.color.rgb = RGBColor(0xFF, 0xFF, 0xFF)

# Filas de datos con colores alternos
row = table.add_row()
row.cells[0].text = 'Dato'
shade_cell(row.cells[0], 'E8F0FE')  # azul claro
```

### Diagramas de Flujo en Word

Para diagramas de flujo, usar tablas de 3 columnas: `[Caja paso] | [Flecha ↓] | [Descripción]`
Usar colores distintos por tipo: inicio/fin (azul oscuro), proceso (azul), decisión (naranja), error (rojo), éxito (verde).

---

## Formato Ensayo — Estructura Exacta

Usar la plantilla `Evaluación SEM - ENSAYO.docx`. Replicar EXACTAMENTE esta estructura:

```python
from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.shared import Pt

ENSAYO_TEMPLATE = "/Users/carlossaavedra/Documents/CARLOS SAAVEDRA/EIDHI/FORMATOS DE RESPUESTA DE TAREAS/Evaluación SEM - ENSAYO.docx"

doc = Document(ENSAYO_TEMPLATE)
# Limpiar contenido existente
body = doc.element.body
for child in list(body):
    tag = child.tag.split('}')[-1] if '}' in child.tag else child.tag
    if tag in ('p', 'tbl'):
        body.remove(child)

# PORTADA — párrafos Normal centrados con líneas en blanco entre secciones
# add_p("Ensayo Argumentativo:", center=True)
# add_p("TÍTULO DEL ENSAYO", center=True)
# [~12 líneas en blanco]
# add_p("Carlos E. Saavedra García", center=True)
# [~10 líneas en blanco]
# add_p("Alianza Norteamericana de Estudios Superiores de México.", center=True)
# add_p("Maestría en Alta Dirección (MBA)", center=True)
# add_p("(CODIGO) Nombre del Curso", center=True)

# ABSTRACT — Normal centrado para label, luego Normal con first_line_indent=457200
# add_p("Abstract", center=True)
# add_p("Texto en inglés...", first_indent=457200)
# add_p("Keywords: ...", first_indent=457200, italic=True)

# TABLA DE CONTENIDOS — Normal centrado
# add_p("Tabla de Contenidos", center=True)
# [lista de capítulos con números de página]

# CAPÍTULOS — Heading 1 style para títulos, Normal con \t (tab) al inicio para cuerpo
# add_p("Capítulo 1. Introducción: ...", style='Heading 1')
# add_p("\tTexto del cuerpo justificado...", align=JUSTIFY)

# CONCLUSIÓN — Heading 1
# add_p("Conclusión", style='Heading 1')

# REFERENCIAS — Heading 1 + Bibliography style con hanging indent APA
# add_p("Referencias", style='Heading 1')
# p = doc.add_paragraph(style='Bibliography')
# p.paragraph_format.left_indent = 457200    # 0.5 inch
# p.paragraph_format.first_line_indent = -457200  # hanging indent APA
# p.add_run("Autor, A. (año). Título. Editorial.")
```

**Requisitos mínimos de contenido del ensayo:**
- Mínimo 4 capítulos (introducción + 2-3 desarrollo + conclusión)
- Mínimo 6-7 referencias en formato APA 7ª edición
- Abstract en inglés con keywords
- Cuerpo amplio con argumentos, citas de autores y ejemplos concretos
- Texto justificado con sangría de tabulación al inicio de cada párrafo

---

## Subir Archivos (LearnDash) — Método Correcto

⛔ **NO usar admin-ajax.php** — el sistema rechaza esa ruta con respuesta "0".
✅ **POST directo al URL del topic** (la URL de la página de la tarea).

```bash
# 1. Obtener upload nonce de la página del topic
PAGE=$(curl -s "URL_TOPIC" -H "Cookie: $AUTH" -H 'User-Agent: Mozilla/5.0')
UPLOAD_NONCE=$(echo "$PAGE" | python3 -c "
import sys,re; c=sys.stdin.read()
m=re.findall(r'name=\"uploadfile\"[^>]*value=\"([a-f0-9]+)\"', c)
print(m[0] if m else 'NF')")
POST_ID=$(echo "$PAGE" | python3 -c "
import sys,re; c=sys.stdin.read()
form=re.findall(r'<form[^>]*sfwd-mark-complete[^>]*>.*?</form>', c, re.S)
if form:
    vals=re.findall(r'value=\"(\d+)\"', form[0]); print(vals[0] if vals else 'NF')
else:
    vals=re.findall(r'value=\"(\d+)\"[^>]*name=\"post\"', c); print(vals[0] if vals else 'NF')")

# 2. Subir el archivo — POST al URL del topic (NO a admin-ajax.php)
curl -s -i -X POST "URL_TOPIC" \
  -H "Cookie: $AUTH" -H 'User-Agent: Mozilla/5.0' -H "Referer: URL_TOPIC" \
  -F "uploadfiles[]=@/ruta/archivo.docx;type=application/vnd.openxmlformats-officedocument.wordprocessingml.document" \
  -F "post=$POST_ID" \
  -F "course_id=COURSE_ID" \
  -F "uploadfile=$UPLOAD_NONCE" \
  -F "MAX_FILE_SIZE=134217728" | head -1
# Éxito = HTTP/2 302
```

**Nota:** Al subir el archivo, LearnDash marca automáticamente la tarea como completada (`ld-status-complete`). No es necesario un POST adicional de mark-complete para las tareas de upload.

---

## Marcar Lección Como Completada (Clase Online, Aprendizaje Multimedia, Foros)

```bash
# 1. Obtener post_id y nonce sfwd_mark_complete de la página
PAGE=$(curl -s "URL_TOPIC" -H "Cookie: $AUTH" -H 'User-Agent: Mozilla/5.0')
POST_ID=$(echo "$PAGE" | python3 -c "
import sys,re; c=sys.stdin.read()
form=re.findall(r'<form[^>]*sfwd-mark-complete[^>]*>.*?</form>', c, re.S)
if form:
    vals=re.findall(r'value=\"(\d+)\"', form[0]); print(vals[0] if vals else 'NF')
else: print('NF')")
NONCE=$(echo "$PAGE" | python3 -c "
import sys,re; c=sys.stdin.read()
form=re.findall(r'<form[^>]*sfwd-mark-complete[^>]*>.*?</form>', c, re.S)
if form:
    n=re.findall(r'value=\"([a-f0-9]{10})\"', form[0]); print(n[0] if n else 'NF')
else: print('NF')")

# 2. POST al mismo URL del topic para marcar completo
curl -s -i -X POST "URL_TOPIC" \
  -H "Cookie: $AUTH" -H 'User-Agent: Mozilla/5.0' -H "Referer: URL_TOPIC" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "post=$POST_ID&course_id=COURSE_ID&sfwd_mark_complete=$NONCE" | head -1
# Éxito = HTTP/2 302
```

---

## Foros (bbPress)

### 1. Encontrar URL del foro
```bash
# Usar el topic_id para obtener la URL real via redirect
curl -s "https://campus.eidhi.com/?p=TOPIC_ID" \
  -H "Cookie: $AUTH" -D - | grep -i "location:"
```

### 2. Leer pregunta y replies existentes
```bash
PAGE_FORO=$(curl -s "URL_FORO" -H "Cookie: $AUTH" -H 'User-Agent: Mozilla/5.0')
# Obtener IDs de los primeros 2 compañeros para comentar
REPLY_IDS=$(echo "$PAGE_FORO" | python3 -c "
import sys,re; c=sys.stdin.read()
ids=re.findall(r'id=\"post-(\d+)\"', c)
print(ids[2:4])")  # IDs 2 y 3 (los primeros son el topic original)
```

### 3. Publicar respuesta propia
```bash
NONCE=$(curl -s "URL_FORO" -H "Cookie: $AUTH" -H 'User-Agent: Mozilla/5.0' | \
  python3 -c "import sys,re; c=sys.stdin.read(); m=re.findall(r'name=\"_wpnonce\"[^>]*value=\"([^\"]+)\"', c); print(m[0] if m else '')")

curl -s -i -X POST "URL_FORO" \
  -H "Cookie: $AUTH" -H 'User-Agent: Mozilla/5.0' \
  -H "Referer: URL_FORO" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  --data-urlencode "bbp_reply_content=TEXTO_RESPUESTA" \
  --data-urlencode "_wpnonce=$NONCE" \
  -d "bbp_topic_id=TOPIC_ID&bbp_reply_to=0&action=bbp-new-reply&bbp_reply_submit=Publicar+Respuesta" \
  2>/dev/null | head -1
# Éxito = HTTP/2 302
```

### 4. Comentar en 2 compañeros (nonce fresco por cada POST)
```bash
# SIEMPRE obtener nonce fresco antes de cada comentario
NONCE_FRESCO=$(curl -s "URL_FORO" -H "Cookie: $AUTH" -H 'User-Agent: Mozilla/5.0' | \
  python3 -c "import sys,re; c=sys.stdin.read(); m=re.findall(r'name=\"_wpnonce\"[^>]*value=\"([^\"]+)\"', c); print(m[0] if m else '')")

curl -s -i -X POST "URL_FORO" \
  -H "Cookie: $AUTH" -H 'User-Agent: Mozilla/5.0' \
  -H "Referer: URL_FORO" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  --data-urlencode "bbp_reply_content=COMENTARIO" \
  --data-urlencode "_wpnonce=$NONCE_FRESCO" \
  -d "bbp_topic_id=TOPIC_ID&bbp_reply_to=ID_POST_COMPAÑERO&action=bbp-new-reply&bbp_reply_submit=Publicar+Respuesta" \
  2>/dev/null | head -1
# Éxito = HTTP/2 302 — Si falla (200), obtener nonce nuevo y reintentar con otro reply_to
```

### 5. Marcar el topic del foro como completado
Después de publicar + 2 comentarios, marcar el topic del CURSO (no el del foro) como completado usando el método de mark-complete estándar.

⚠️ **Hay múltiples foros con nombres similares** — siempre verificar con `/?p=TOPIC_ID` el URL correcto.

---

## Topic IDs Conocidos de Foros

### COA04
| Semana | topic_id | URL del foro |
|--------|----------|--------------|
| Semana 3 | 245141 | debate-semana-3-23 |
| Semana 4 | 245145 | debate-semana-4-23 |
| Semana 5 | 245147 | debate-semana-5-23 |
| Semana 6 | 245148 | debate-semana-6-27 ⚠️ |

### MAR03
| Semana | topic_id | URL del foro |
|--------|----------|--------------|
| Semana 4 | 245192 | debate-semana-4-24 |
| Semana 6 | 245195 | debate-semana-6-28 |
| Semana 8 | buscar via /?p= | — |

### PRO03
| Semana | topic_id | URL del foro |
|--------|----------|--------------|
| Semana 4 | 245259 | debate-semana-4-26 |
| Semana 7 | buscar via /?p= | — |
| Semana 9 | buscar via /?p= | — |

### RHH02
| Semana | topic_id | URL del foro |
|--------|----------|--------------|
| Semana 4 | 261284 | debate-semana-4-27 |
| Semana 6 | 245216 | debate-semana-4-25 (nombre anómalo) |
| Semana 9 | buscar via /?p= | — |

---

## Reglas Críticas (nunca ignorar)

1. ⛔ **NUNCA subir sin aprobación explícita del usuario** — mostrar contenido completo y esperar confirmación
2. ⛔ **Los foros NUNCA se responden en Word** — siempre directamente en la plataforma
3. ⛔ **NUNCA usar ASCII art** para tablas, cuadros o diagramas — siempre `doc.add_table()` real
4. ⛔ **NUNCA trabajar semanas no habilitadas** — suspender y avisar al usuario con la fecha de activación
5. ✅ **Formato ensayo SOLO cuando la tarea dice explícitamente "ensayo"** — con abstract en inglés, capítulos, referencias APA
6. ✅ **Marcar TODAS las tareas como completadas** — uploads (automático), clase-online/multimedia (manual), foros (manual tras publicar + 2 comentarios)
7. ✅ **Nonce fresco** antes de cada POST de foro y antes de cada upload
8. ✅ **Verificar HTTP 302** en cada operación — HTTP 200 sin redirect = fallo, reintentar
9. ✅ **Exactamente 2 compañeros** por cada foro
10. ✅ **Subir a la URL del topic** (no a admin-ajax.php) — campo `uploadfiles[]`, nonce en campo `uploadfile`
11. ✅ **Todo el contenido en español**, redactado de forma natural y humana
12. ✅ **Dependencias Python:** `pip3 install python-docx --break-system-packages`
