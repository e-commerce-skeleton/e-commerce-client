import { mockProducts } from "./mockProducts";

export function fetchProduct(prodId: string): Promise<any> {
  return new Promise<{ product: any }>((resolve) => {
    setTimeout(() => {
      resolve({
        product: mockProducts.forEach((p) => {
          if (p["prodId"] == prodId) return p;
        }),
      });
    }, 300); // Simulate network delay
  });
}
