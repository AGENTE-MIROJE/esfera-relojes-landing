# CLAUDE.md — LOG DE MEMORIA COMPARTIDA
> Archivo maestro de sincronización entre Claude Desktop App y Claude Code.
> Actualizar al finalizar cualquier tarea importante.

---

## ESTRUCTURA DEL PROYECTO

```
/CARLOS SAAVEDRA/CLAUDE/
├── CLAUDE.md                        ← Este archivo (memoria compartida)
├── .claude/
│   ├── settings.local.json          ← Permisos y configuración del proyecto
│   └── skills/                      ← Skills disponibles para este proyecto
│       ├── trader-pro/
│       ├── office-pro/
│       └── generador-proyectos/
├── CURSOS EIDHI/
│   ├── eidhi_skills.js              ← Skill: /eidhi-tareas
│   └── CLAUDE.md
├── GENERADOR DE PROYECTOS/
│   ├── proyectos_skills.js          ← Skill: /generador-proyectos
│   └── CLAUDE.md
├── OFFICE PRO/
│   ├── office_pro_skills.js         ← Skill: /office-pro
│   └── CLAUDE.md
└── TRADER PRO/
    ├── trader_pro_skills.js         ← Skill: /trader-pro
    └── CLAUDE.md
```

---

## MÓDULOS ACTIVOS

### 📚 CURSOS EIDHI
- **Skill**: `/eidhi-tareas`
- **Campus**: campus.eidhi.com — usuario: carersa
- **Materias activas**: COA04, MAR03, PRO03, RHH02
- **Estado actual**: Ver `CURSOS EIDHI/CLAUDE.md`

### 📋 GENERADOR DE PROYECTOS
- **Skill**: `/generador-proyectos`
- **Metodologías**: MGA (DNP Colombia) + PMI/PMBOK 7ª ed.
- **Marco legal**: Ley 152/1994, Decreto 1082/2015, Ley 80/1993
- **Estado actual**: Ver `GENERADOR DE PROYECTOS/CLAUDE.md`

### 💻 OFFICE PRO
- **Skill**: `/office-pro`
- **Stack**: macOS Shortcuts → Python 3 → Make/n8n
- **Integraciones**: Google Workspace, Excel, Word, launchd/cron
- **Estado actual**: Ver `OFFICE PRO/CLAUDE.md`

### 📈 TRADER PRO
- **Skill**: `/trader-pro`
- **Metodologías**: ICT (Order Blocks, FVG, AMD, OTE, Kill Zones) + SMC (BOS, CHoCH, Liquidity)
- **Indicadores**: Volume Profile, VWAP/AVWAP, CVD, Footprint — SIN MACD/RSI
- **Entradas**: Top-down analysis → precisión en 5 minutos con SL y TP definidos
- **Estado actual**: Ver `TRADER PRO/CLAUDE.md`

---

## PROTOCOLO DE SINCRONIZACIÓN

### Al iniciar una sesión:
1. Leer este archivo (`CLAUDE.md` raíz)
2. Leer el `CLAUDE.md` de la subcarpeta activa
3. Cargar el skill correspondiente a la carpeta

### Al terminar una tarea importante:
1. Actualizar la sección "HISTORIAL DE CAMBIOS" de este archivo
2. Actualizar el `CLAUDE.md` de la subcarpeta si hubo avances específicos
3. Registrar fecha, módulo y descripción del cambio

---

## HISTORIAL DE CAMBIOS

| Fecha | Módulo | Cambio |
|---|---|---|
| 2026-03-15 | SISTEMA | Creación de sistema de sincronización Desktop ↔ Claude Code |
| 2026-03-15 | TRADER PRO | Skill mejorado con ICT/SMC completo, indicadores modernos, formato de salida 5min |
| 2026-03-15 | GENERADOR DE PROYECTOS | Skill mejorado con MGA/PMI completo, evaluación económica, riesgos |
| 2026-03-15 | OFFICE PRO | Skill mejorado con stack completo macOS, librerías modernas, formato de entrega |
| 2026-03-15 | CURSOS EIDHI | Skill /eidhi-tareas activo con flujo completo de campus |

---

## NOTAS TÉCNICAS
- Skills del proyecto: `.claude/skills/<nombre>/SKILL.md`
- Skills del plugin (skill-creator): archivos `.js` con frontmatter en cada subcarpeta
- Configuración activa: `.claude/settings.local.json`
- Zona horaria: America/Bogota (UTC-5)
