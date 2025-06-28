import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PropertyFeature } from "./propertyFeature.entity";
import { User } from "./user.entity";


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


    @ManyToOne(()=>User , (user)=>user.properties) // This establishes a many-to-one relationship with the User entity
    user: User; // This property will hold the user who owns the property
}