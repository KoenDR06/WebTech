import { execute, fetchOne } from './index';

export type User = {
    firstName: string;
    lastName: string;
    birthDate: number;
    email: string;
    majorID: string;
    hobbies: string[];
    photoPath: string;
};

export class UserService {
    public static create(user: User) {
        execute(
            `INSERT INTO Users(first_name, last_name, birth_date, email, major_id, hobbies, photo_path)
                 VALUES (?,?,?,?,?,?,?)`,
            [
                user.firstName,
                user.lastName,
                user.birthDate,
                user.email,
                user.majorID,
                user.hobbies.join(';'),
                user.photoPath,
            ],
        );
    }

    public static read(id: number): Promise<User> {
        return fetchOne(`SELECT * FROM Users WHERE id = ?`, [id]);
    }

    public static update(id: number, user: User) {
        execute(
            `UPDATE Users SET first_name = ?, last_name = ?, birth_date = ?, email = ?, major_id = ?, hobbies = ?, photo_path = ? WHERE id = ?`,
            [
                user.firstName,
                user.lastName,
                user.birthDate,
                user.email,
                user.majorID,
                user.hobbies.join(';'),
                user.photoPath,
                id,
            ],
        );
    }

    public static delete(id: number) {
        execute(`DELETE FROM Users WHERE id = ?`, [id]);
    }
}
