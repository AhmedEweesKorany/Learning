import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PropertyFeature } from "./propertyFeature.entity";


@Entity() // This decorator marks the class as a database entity
export class Property {
    @PrimaryGeneratedColumn() // means that this column is the primary key and will be auto-incremented
    id: number;

    @Column()
    name:string;

    @Column()
    description:string;

    @Column({default: 0}) // default value of 0 if not provided
    price:number;
 
    @OneToOne(()=>PropertyFeature , (feature)=>feature.property , {cascade:true})
    @JoinColumn() // This decorator is used to specify the column that will be used for the join
    feature: PropertyFeature; // This establishes a one-to-one relationship with the PropertyFeature entity
}