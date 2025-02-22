export async function fetchProducts() {
  try {
    const response = await fetch('/products.json'); // ✅ Certifique-se de que o caminho está correto

    if (!response.ok) {
      throw new Error(`Erro ao carregar os produtos: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar os produtos:', error);
    return [];
  }
}
