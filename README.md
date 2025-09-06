# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# worker

Backend service for recommsys.

## Setup

```bash
npm install
npm run dev

## Document ingestion (PDF/DOCX/PPTX/Images → Markdown)

One-time setup (Windows PowerShell):

```powershell
cd C:\Users\Aditya\Cursor\ucl_recc\recommsys
npm run ingest:setup
# Optional but recommended for OCR (images / scanned PDFs)
winget install UB-Mannheim.Tesseract-OCR
```

Usage examples:

```powershell
# Default: process files in data/raw (non-recursive) → data/ingested
npm run ingest -- --input data/raw --output data/ingested

# Recurse into subdirectories and enable OCR fallback
npm run ingest -- --input data/raw --recursive --ocr

# Process a single file
npm run ingest -- --input path/to/file.pdf --ocr

# Specify output folder and overwrite existing
npm run ingest -- --input data/raw --output data/ingested --overwrite

# Choose OCR language (ensure it's installed in Tesseract)
npm run ingest -- --input data/raw --ocr --ocr-lang eng
```

Script location: `scripts/ingest_docs.py`
