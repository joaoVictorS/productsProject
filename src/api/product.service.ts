export async function fetchProducts() {
    try {
      const response = await fetch('/products.json')
      if (!response.ok) {
        throw new Error('Erro ao carregar os produtos.')
      }
      const products = await response.json()
  
      // Convertendo preços para número
      return products.map((p: any) => ({
        ...p,
        price: Number(p.price)
      }))
    } catch (error) {
      console.error('Erro na API:', error)
      return []
    }
  }
  