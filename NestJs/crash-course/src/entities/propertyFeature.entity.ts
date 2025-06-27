import { Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class PropertyFeature {
    @PrimaryGeneratedColumn()
    id: number;
    name: string;
    description: string;
    propertyId: number; // Foreign key to the Property entity
}