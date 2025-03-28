import { execute, fetchOne, fetchAll } from './index';

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

    public static readUnopendAmount(id: number): Promise<Number> {
        return fetchOne('SELECT COUNT(*) FROM Messages WHERE id = ? AND Opened = 0', [id]);
    }

    public static readTenMessages(id: number): Promise<Message[]> {
        return fetchAll('SELECT * FROM Messages WHERE id = ? ORDER BY timestamp  LIMIT 10', [id])
    }

    public static readContent(id: number): Promise<String> {
        return fetchOne('SELECT content FROM Messages WHERE id = ? ORDER BY timestamp  LIMIT 10', [id])
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
