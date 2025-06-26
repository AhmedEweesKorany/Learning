import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


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
 
}