const BASE = "https://dummyjson.com";
export async function obtenerProductos() {
const r = await fetch(`${BASE}/products?limit=12`);
if (!r.ok) throw new Error(`Error HTTP:${r.status}`);
const json = await r.json();
return json.products; 
}

export async function obtenerProducto(id) {
const r = await fetch(`${BASE}/products/${id}`);
if (!r.ok) throw new Error(`Error HTTP:${r.status}`);
return r.json();
}

export async function buscarProductos(texto) {
const r = await fetch(
`${BASE}/products/search?q=${encodeURIComponent(texto)}`,
 );
if (!r.ok) throw new Error(`Error HTTP:${r.status}`);
const json = await r.json();
return json.products;
}
