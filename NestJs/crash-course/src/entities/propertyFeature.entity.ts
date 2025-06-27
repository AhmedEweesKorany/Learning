import { Entity } from "typeorm";


@Entity()
export class PropertyFeature {
    id: number;
    name: string;
    description: string;
    propertyId: number; // Foreign key to the Property entity
}