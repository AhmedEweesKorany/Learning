import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


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

    }