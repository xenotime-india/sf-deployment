import jwt from 'jsonwebtoken';
import { STATUS } from './constants';
import { createError } from './error';
import winston from 'winston';
import config from 'config';

/**
 * Synchronously signs an object as a JWT
 * @param payload
 * @returns {*}
 */
export const sign = (payload, expiresIn) => {
  if (!expiresIn) {
    return jwt.sign(payload, config.JWT_SECRET);
  }

  return jwt.sign(payload, config.JWT_SECRET, { expiresIn });
}

/**
 * Asynchronously verifies a JWT. Note that this is asynchronous as .verify usually happens as part
 * of a Promise chain, whereas .sign happens synchronously in-line
 * @param token
 */
export const verify = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
      if (err || !decoded) {
        if (err) {
          winston.error(err);
        }
        if (!decoded) {
          winston.error(`Nothing decoded`);
        }
        let error = createError(
          STATUS.ERROR,
          401,
          `Unauthorized access detected - ${token}`
        );
        winston.error(
          `Could not verify web token ${token} with ${config.JWT_SECRET}`
        );
        return reject(error);
      }
      return resolve(decoded);
    });
  });
}

export default {
    sign,
    verify,
}
