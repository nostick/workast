import jwt from 'jsonwebtoken';

import config from './config.js';

const getNewRandomToken = (userInfo) => jwt.sign(userInfo, config.auth.token, { expiresIn: 3600 });

const validateToken = (req, res, next) => {
    const token = req.header(config.auth.tokenHeaderName);
    if (!token) {
        return res.status(401).send({ msg: 'No token, Authorization denied' });
    }
    try {
        req.user = jwt.verify(token, config.auth.token);
        next();
    } catch (err) {
        return res.status(401).send({ msg: 'Token is not valid' });
    }
}

export {
   getNewRandomToken, validateToken
}
