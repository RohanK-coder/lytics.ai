import db from "../config/db.js";
import bcrypt from 'bcryptjs';

export const findUserByEmail = (email,callback) => {
    const query = 'SELECT * FROM users where email = ?';
    db.query(query,[email],callback);

};

export const createUser = (email,hashedPassword,callback) => {
    const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
    db.query(query, [email, hashedPassword], callback);
}