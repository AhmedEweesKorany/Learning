import { IsEmail, Length } from "class-validator";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Property } from "./property.entity";


@Entity()

export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    @Length(50)
    lastName: string;

    @Column()
    email: string;

    @Column()
    avatarUrl: string;

    @CreateDateColumn()
    createdAt:Date


    @OneToMany(()=>Property,(property)=>property.user, {cascade:true}  )
    properties: Property[];

}