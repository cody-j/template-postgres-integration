const { v4: uuid } = require('uuid');
const axios = require('axios');
const { Client } = require('pg');

const db = new Client({
    user: 'postgres',
    password: 'postgres',
    host: process.env.POSTGRES_HOST, // Docker host alias
    port: 5432,
    database: 'test' // matches POSTGRES_DB variable in database Dockerfile https://hub.docker.com/_/postgres
});

async function checkCount (id) {
    const { rows } = await db.query(`select counter from "test"."test" where "id" = $1;`, [id]);
    return rows[0];
}

async function increment (id) {
  return await axios.post(`http://${process.env.API_HOST}:3000/increment/${id}`);
}

describe('Database Tests', () => {
  
  beforeAll(async () => {
    await db.connect();
  });
  
  afterAll(async () => {
    await db.end();
  });
  
  it('should work', async () => {
    const id = uuid();
    await increment(id);
    await increment(id);
    const { counter } = await checkCount(id);
    expect(counter).toEqual(2);
  });
});
