import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Property } from "./property.entity";


@Entity()
export class PropertyFeature {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    bedrooms: number;

    @Column()
    bathrooms: number;

    @Column()
    parkingSpots: number;

    @Column()
    area: number;

    @Column()
    hasBalcony: boolean;

    @Column()
    hasGarden: boolean;

    @Column()
    hasPool: boolean;

    @OneToOne(() => Property, (property) => property.feature)
    property: Property; // This establishes a one-to-one relationship with the Property entity

    }