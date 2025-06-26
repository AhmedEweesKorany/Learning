import 'dotenv/config';
import { Property } from "src/entities/property.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const pgConfig:PostgresConnectionOptions = {
    url: process.env.DATABASE_URL ,
    type: "postgres",
    port:3306,
    entities:[__dirname + "/**/*.entity{.ts,.js}"], // Adjust the path to your entities
    synchronize: true, // Set to false in production
} 