import "reflect-metadata";
import path from "path";
import { DataSource, DataSourceOptions } from "typeorm";
import "dotenv/config";

const DataSourceConfig = (): DataSourceOptions => {
  const entitiesPath = path.join(__dirname, "entities/**.{js,ts}");
  const migrationsPath = path.join(__dirname, "migrations/**.{js,ts}");

  if (!process.env.DATABASE_URL) {
    throw new Error("Env DATABASE_URL does not exist");
  }

  const nodeEnv: string | undefined = process.env.NODE_ENV;

  if (nodeEnv == "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [entitiesPath],
    };
  }

  return {
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: false,
    logging: true,
    entities: [entitiesPath],
    migrations: [migrationsPath],
  };
};

const AppDataSource: DataSource = new DataSource(DataSourceConfig());

export default AppDataSource;
