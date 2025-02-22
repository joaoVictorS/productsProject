import type { Product } from '../models/product.model';

export class ProductRepository {
  private products: Product[] = [];

  async fetchProducts(): Promise<Product[]> {
    try {
      console.log('🔍 Buscando produtos no JSON...');

      const response = await fetch('/products.json');
      if (!response.ok) {
        throw new Error(`Erro ao carregar produtos: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Dados carregados do JSON:', data);

      this.products = data;
      return this.products;
    } catch (error) {
      console.error('Erro ao buscar os produtos:', error);
      return [];
    }
  }

  async addProduct(product: Product): Promise<void> {
    this.products.push(product);
  }

  async updateProduct(updatedProduct: Product): Promise<void> {
    const index = this.products.findIndex(p => p.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }

  async deleteProduct(productId: number): Promise<void> {
    this.products = this.products.filter(p => p.id !== productId);
  }
}
