import { execute, fetchOne } from './index';

export type Major = {
    name: string;
};

export class MajorService {
    public static create(major: Major) {
        execute(
            `INSERT INTO Majors(name)
                 VALUES (?)`,
            [major.name],
        );
    }

    public static read(id: number): Promise<Major> {
        return fetchOne(`SELECT * FROM Majors WHERE id = ?`, [id]);
    }

    public static update(id: number, major: Major) {
        execute(`UPDATE Majors SET name = ? WHERE id = ?`, [major.name, id]);
    }

    public static delete(id: number) {
        execute(`DELETE FROM Majors WHERE id = ?`, [id]);
    }
}
