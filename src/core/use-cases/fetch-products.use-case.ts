import { ProductRepository } from '../repositories/product.repository';
import type { Product } from '../models/product.model';

export class ProductUseCase {
  private productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  async fetchProducts(): Promise<Product[]> {
    return await this.productRepository.fetchProducts();
  }

  async addProduct(product: Product): Promise<void> {
    return await this.productRepository.addProduct(product);
  }

  async updateProduct(product: Product): Promise<void> {
    return await this.productRepository.updateProduct(product);
  }

  async deleteProduct(productId: number): Promise<void> {
    return await this.productRepository.deleteProduct(productId);
  }
}
