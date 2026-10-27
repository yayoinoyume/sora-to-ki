/**
 * 站点的绝对网址与主机名。换域名只改这一处（前端的 SEO／canonical／JSON-LD 全部从这里取）。
 * server/、backend/、Dockerfile 里的兜底值仍是各自一份，因为那几处读的是 env，不共用前端 bundle。
 */
export const SITE_URL = 'https://example.com';
export const SITE_HOST = 'example.com';

/** 站名。标题、og:site_name、JSON-LD 的 publisher 都从这里取。 */
export const SITE_NAME = 'Example Site';
