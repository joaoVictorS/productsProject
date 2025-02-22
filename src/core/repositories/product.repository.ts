import type { Product } from "../models/product.model";

export class ProductRepository {
  async fetchProducts(): Promise<Product[]> {
    try {
      const response = await fetch('/products.json');
      if (!response.ok) {
        throw new Error(`Erro ao carregar os produtos: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Erro ao buscar os produtos:', error);
      return [];
    }
  }
}