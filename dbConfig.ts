import { Search } from "src/search/search.entity";
import { Order } from "src/order/orders.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const pgConfig: PostgresConnectionOptions =
{
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "project",
    synchronize: true,
    logging: true,
    entities: [Search,Order]
  
}