import { Product, Service } from '../types/inventory';

class InventoryService {
  // Simulación de gestión de inventario
  async addProduct(product: Omit<Product, 'id'>): Promise<Product> {
    const newProduct: Product = { id: Date.now().toString(), ...product };
    console.log('Producto añadido:', newProduct);
    return newProduct;
  }

  async addService(service: Omit<Service, 'id'>): Promise<Service> {
    const newService: Service = { id: Date.now().toString(), ...service };
    console.log('Servicio añadido:', newService);
    return newService;
  }
}

export const inventoryService = new InventoryService();
