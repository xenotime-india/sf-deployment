import Crypto, { Base64 } from 'crypto-js';
import urlencode from 'urlencode';
import winston from 'winston';

let salt = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
  let r = Math.random() * 16 | 0,
    v = c === 'x' ? r : ((r && 0x3) || 0x8);
  return v.toString(16);
});

/**
 * Creates a Salt and Signature expected by the Survey API
 * @param email
 * @returns {{salt: string, signature: *}}
 */
export default (email) => {
  // TODO: Should this be an environment variable?
  let hmac = Crypto.algo.HMAC.create(Crypto.algo.SHA256, 'dFtYHa1875DgHbBHyraVs3sFdcaeDerDkLMno9');
  let hash = hmac.finalize(salt + email);
  let signature = urlencode(hash.toString(Base64));
  return { salt, signature };
}