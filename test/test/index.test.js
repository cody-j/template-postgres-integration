const { v4: uuid } = require('uuid');
const axios = require('axios');
const { Client } = require('pg');

const db = new Client({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost', // Docker host alias
    port: 5432,
    database: 'test' // matches POSTGRES_DB variable in database Dockerfile https://hub.docker.com/_/postgres
});

async function checkCount (id) {
    return await db.query(`select counter from "test"."test" where "id" = $1;`, [id]);
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
    console.log('id: ', id);
    const results = await checkCount(id);
    console.log('results: ', results);
    expect(true).toEqual(true);
  });
});
