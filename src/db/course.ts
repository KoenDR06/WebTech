import { execute, fetchAll, fetchOne } from './index';

export type Course = {
    majorID: number;
    name: string;
    code: string;
};

export class CourseService {
    public static create(course: Course) {
        execute(
            `INSERT INTO Courses(name, major_id, code)
                 VALUES (?, ?, ?)`,
            [course.majorID, course.name, course.code],
        );
    }

    public static read(id: number): Promise<Course> {
        return fetchOne(`SELECT * FROM Courses WHERE id = ?`, [id]);
    }

    public static readAll(): Promise<Course[]> {
        return fetchAll(`SELECT * FROM Courses`, []);
    }

    public static update(id: number, course: Course) {
        execute(
            `UPDATE Courses SET major_id = ?, name = ? code = ? WHERE id = ?`,
            [course.majorID, course.name, course.code, id],
        );
    }

    public static delete(id: number) {
        execute(`DELETE FROM Courses WHERE id = ?`, [id]);
    }
}
