import Product from "./Products"
import trufas from "../../service/abaixo-10-reais.json"


class ProductsService {
    public getAll(): Promise<Product[]> {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const products: Product[] = trufas.items.map(product => ({
            id: product.id,
            name: product.name,
            imageUrl: product.imageUrl,
            price: product.price/100,
          
          
          
          }));
          resolve(products);
        }, 2000);
      });
    }
  }
export default new ProductsService