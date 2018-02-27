import Promise from 'bluebird';
import redis from 'redis';
import config from 'config';

Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);

export default {
  userSessions: redis.createClient({url: config.REDIS_URL + '/' + config.REDIS_USER_SESSIONS_DB})
};
