export class Product {
    title: string;
    description: string;
    pictures: string[];
    id: string;
    price: number;
    category: string;
    state: string;
    createdAt: Date;
    availability: Availability;
    city: string;
    averageStar: number;
}
export class Availability {
    available: boolean;
    type: string;
    feed ?: number;
}
