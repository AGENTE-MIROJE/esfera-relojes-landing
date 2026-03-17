#!/bin/bash
# ═══════════════════════════════════════════════════════════
# TRADER PRO — Launcher
#
# Uso:
#   bash analizar.sh              → Pregunta el activo
#   bash analizar.sh XAUUSD       → Corre directo con ese activo
# ═══════════════════════════════════════════════════════════

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PYTHON="$SCRIPT_DIR/venv/bin/python3"

if [ ! -f "$PYTHON" ]; then
    echo ""
    echo "  Entorno virtual no encontrado. Ejecuta primero:"
    echo "      cd \"$SCRIPT_DIR\""
    echo "      python3 -m venv venv"
    echo "      venv/bin/pip install playwright python-docx"
    echo "      venv/bin/playwright install chromium"
    echo ""
    exit 1
fi

if [ -n "$1" ]; then
    "$PYTHON" "$SCRIPT_DIR/trader_capture.py" "$1"
else
    "$PYTHON" "$SCRIPT_DIR/trader_capture.py"
fi
