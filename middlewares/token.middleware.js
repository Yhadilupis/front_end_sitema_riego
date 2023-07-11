import jwt from 'jsonwebtoken'
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const data = dotenv.config({
    path: path.resolve(__dirname, `../environments/.env.${process.env.NODE_ENV}`)
});

const verifyToken = (req, res, next) => {
    const token = req.header('Bearer')

    if (!token) return res.status(401).json({ error: 'Acceso denegado' })
    try {
        
        const verified = jwt.verify(token, data.parsed.JWT_TOKEN_SECRET)
        req.user = verified
        next() // continuamos
    } catch (error) {
        res.status(400).send({ error: 'token no es válido' })
    }
}

export default verifyToken;