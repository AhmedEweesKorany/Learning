import 'dotenv/config';
import { Property } from "src/entities/property.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const pgConfig:PostgresConnectionOptions = {
    url: process.env.DATABASE_URL ,
    type: "postgres",
    port:3306,
    entities:[Property],
    synchronize: true, // Set to false in production
}