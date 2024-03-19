import { createClient } from "redis";

export const redis = createClient({
  url: "redis-cli --tls -u redis://default:a4bc2fd226c14cb6911663ac7a94f575@improved-impala-40002.upstash.io:40002",
})

redis.connect()