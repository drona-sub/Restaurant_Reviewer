import pg from "pg";
import env from "dotenv";
import 'dotenv/config';



  const db = new pg.Client({
    // user: process.env.PGUSER,
    // host: process.env.PGHOST,
    // database: process.env.PGDATABASE,
    // password: process.env.PGPASSWORD,
    // port: process.env.PGPORT,
  });

db.connect();

export default db ;
