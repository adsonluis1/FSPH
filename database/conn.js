import mysql from 'mysql2/promise';

export default  class {

    static #conn = null;

    static async connect() {

        this.#conn = await mysql.createConnection({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            timezone: process.env.DB_TIMEZONE,
            namedPlaceholders: true,
            connectTimeout: 3000,
        });
        
        void await this.#conn.connect()

        this.#conn.execute('SET TRANSACTION ISOLATION LEVEL READ COMMITTED');

    }

    static get connection() {
        return this.#conn;
    }

    static async begin() {
        if (this.#conn) void await this.#conn.beginTransaction();
    }

    static async rollback() {
        if (this.#conn) void await this.#conn.rollback();
    }

    static async commit() {
        if (this.#conn) void await this.#conn.commit();
    }

    static async close() {
        if (this.#conn) void await this.#conn.end();
    }
    
}
