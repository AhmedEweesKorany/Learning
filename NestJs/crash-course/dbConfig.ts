import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const pgConfig:PostgresConnectionOptions = {
    url: "postgresql://neondb_owner:npg_5ZDtu8gxoiEq@ep-shy-tooth-a2w960li-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
    type: "postgres",
    port:3306,
    entities:[],
    synchronize: true, // Set to false in production
}