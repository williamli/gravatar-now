const url = require('url');
const md5 = require('md5');

module.exports = (req, res) => {
  const status = (process.env.ENV === 'production') ? 301 : 302;
  const url_parts = req.url.split('/');
  console.log(url_parts);
  // const email = url_parts.query.q.trim().toLowerCase();
  const email = url_parts[2].trim().toLowerCase();
  const size = url_parts[3] ? `/${url_parts[3]}` : '';

  res.writeHead(status, {"Location": `/h/${md5(email)}${size}`});
  res.end();
}