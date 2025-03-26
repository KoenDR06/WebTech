import sqlite3 from 'sqlite3';

export const db = new sqlite3.Database('src/db/database.db');

// https://www.sqlitetutorial.net/sqlite-nodejs/

export const execute = async (
    sql: string,
    params: any[] = [],
): Promise<void> => {
    if (params && params.length > 0) {
        new Promise<void>((resolve, reject) => {
            db.run(sql, params, (err) => {
                if (err) reject(err);
                resolve();
            });
        });
    }
};

export const fetchAll = async (sql: string, params: any[]): Promise<any[]> => {
    return new Promise((resolve, reject) => {
        db.all(sql, params, (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

export const fetchOne = async (sql: string, params: any[]): Promise<any> => {
    return new Promise((resolve, reject) => {
        db.get(sql, params, (err, row) => {
            if (err) reject(err);
            resolve(row);
        });
    });
};
