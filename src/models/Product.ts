// src/models/Product.ts
export interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    isBoosted?: boolean;
    boostExpiration?: Date;
}
