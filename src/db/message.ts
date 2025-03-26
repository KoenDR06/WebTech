import { execute, fetchOne } from './index';

export type Message = {
    content: string;
    timestamp: number;
    senderID: number;
    friendID: number;
};

export class MessageService {
    public static create(message: Message) {
        execute(
            `INSERT INTO Messages(content, timestamp, sender_id, friend_id)
             VALUES (?, ?, ?, ?)`,
            [
                message.content,
                message.timestamp,
                message.senderID,
                message.friendID,
            ],
        );
    }

    public static read(id: number): Promise<Message> {
        return fetchOne(`SELECT * FROM Messages WHERE id = ?`, [id]);
    }

    public static update(id: number, message: Message) {
        execute(
            `UPDATE Messages SET content = ?, timestamp = ?, sender_id = ?, friend_id = ? WHERE id = ?`,
            [
                message.content,
                message.timestamp,
                message.senderID,
                message.friendID,
                id,
            ],
        );
    }

    public static delete(id: number) {
        execute(`DELETE FROM Messages WHERE id = ?`, [id]);
    }
}
