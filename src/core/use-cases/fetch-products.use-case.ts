import { ProductRepository } from "../repositories/product.repository";
import type { Product } from '../models/product.model';

export class FetchProductsUseCase {
  private productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  async execute(): Promise<Product[]> {
    const products = await this.productRepository.fetchProducts();
    
    // Aqui você pode adicionar lógica de formatação, verificação, ou manipulação de dados se necessário
    
    return products;
  }
}