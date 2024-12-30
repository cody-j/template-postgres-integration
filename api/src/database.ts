import { Pool } from 'pg'

const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'database', // Docker host alias
    port: 5432,
    database: 'test' // matches POSTGRES_DB variable in database Dockerfile https://hub.docker.com/_/postgres
});

export async function increment(id: string): Promise<any> {
    /**
     * 
     */
    return await pool.query(`
        insert into "test"."test"
            ("id")
        values ($1)
        on conflict ("id")
        do update set
            counter = "test"."counter" + 1
        returning "id", "counter";`,
        [id]
    );
}
