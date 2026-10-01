// preparar-entrega.mjs
//
// BlackBoard no deja subir archivos .html, .css o .js directamente.
// Este script copia esos archivos de una carpeta de misión a entrega-txt/<nombre-carpeta>/
// añadiendo ".txt" al final del nombre (index.html -> index.html.txt), sin tocar los originales.
//
// Uso:
//   node scripts/preparar-entrega.mjs u1-javascript/m1-despertar-dom

import { readdirSync, statSync, mkdirSync, copyFileSync } from "node:fs";
import { join, basename, resolve } from "node:path";

const EXTENSIONES_A_COPIAR = [".html", ".css", ".js"];

function main() {
  const carpetaOrigen = process.argv[2];

  if (!carpetaOrigen) {
    console.error("Uso: node scripts/preparar-entrega.mjs <carpeta-de-la-mision>");
    console.error("Ejemplo: node scripts/preparar-entrega.mjs u1-javascript/m1-despertar-dom");
    process.exit(1);
  }

  const rutaOrigen = resolve(carpetaOrigen);

  if (!existeYEsCarpeta(rutaOrigen)) {
    console.error(`No existe la carpeta: ${rutaOrigen}`);
    process.exit(1);
  }

  const nombreCarpeta = basename(rutaOrigen);
  const rutaDestino = resolve("entrega-txt", nombreCarpeta);

  mkdirSync(rutaDestino, { recursive: true });

  const archivos = readdirSync(rutaOrigen).filter((nombre) => {
    const rutaCompleta = join(rutaOrigen, nombre);
    return statSync(rutaCompleta).isFile() && tieneExtensionValida(nombre);
  });

  if (archivos.length === 0) {
    console.warn(`No se encontraron archivos .html, .css o .js en ${rutaOrigen}`);
    return;
  }

  for (const nombreArchivo of archivos) {
    const rutaArchivoOrigen = join(rutaOrigen, nombreArchivo);
    const rutaArchivoDestino = join(rutaDestino, `${nombreArchivo}.txt`);

    copyFileSync(rutaArchivoOrigen, rutaArchivoDestino);
    console.log(`${nombreArchivo} -> entrega-txt/${nombreCarpeta}/${nombreArchivo}.txt`);
  }

  console.log(`\nListo. ${archivos.length} archivo(s) preparados en entrega-txt/${nombreCarpeta}/`);
}

function existeYEsCarpeta(ruta) {
  try {
    return statSync(ruta).isDirectory();
  } catch {
    return false;
  }
}

function tieneExtensionValida(nombreArchivo) {
  return EXTENSIONES_A_COPIAR.some((extension) => nombreArchivo.endsWith(extension));
}

main();
