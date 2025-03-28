import { execute, fetchAll, fetchOne } from './index';

export type Friend = {
    userAID: number;
    userBID: number;
    accepted: boolean;
};

export class FriendService {
    public static create(friend: Friend) {
        execute(
            `INSERT INTO Friends(user_a_id, user_b_id, accepted)
                 VALUES (?, ?, ?)`,
            [friend.userAID, friend.userBID, friend.accepted],
        );
    }

    public static read(id: number): Promise<Friend> {
        return fetchOne(`SELECT * FROM Friends WHERE id = ?`, [id]);
    }

    public static readAll(id: number): Promise<Friend[]> {
        return fetchAll('SELECT * FROM Friends WHERE user_a_id = ? OR user_b_id = ?', [id]);
    }

    public static readRequests(id: number): Promise<Friend[]> {
        return fetchAll('SELECT * FROM Friends WHERE user_a_id = ? OR user_b_id = ? AND accepted = 0', [id]);
    }

    public static update(id: number, friend: Friend) {
        execute(
            `UPDATE Friends SET user_a_id = ?, user_b_id = ?, accepted = ? WHERE id = ?`,
            [friend.userAID, friend.userBID, friend.accepted, id],
        );
    }

    public static delete(id: number) {
        execute(`DELETE FROM Friends WHERE id = ?`, [id]);
    }
}