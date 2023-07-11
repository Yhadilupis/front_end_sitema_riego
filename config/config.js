import { dataEnv } from './env.config.js';


export const db = {
    user: dataEnv.parsed.USERDB,
    host: dataEnv.parsed.HOSTDB,
    database: dataEnv.parsed.DATABASEDB,
    password: dataEnv.parsed.PASSWORDDB,
    port: dataEnv.parsed.PORTDB,
};

export const api = {
    port: dataEnv.parsed.PORT,
};







