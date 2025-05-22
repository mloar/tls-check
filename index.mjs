import http from "node:http";

const bob = http.createServer((req, res) => {
  const url = new URL(`http://${process.env.HOST ?? 'localhost'}${req.url}`);
  console.log(url.searchParams);
  if (url.searchParams.get('domain').endsWith('hooray.social')) {
    res.statusCode = 204;
  } else if (url.searchParams.get('domain').endsWith('loar.network')) {
    res.statusCode = 204;
  } else {
    res.statusCode = 403;
  }

  res.end();
});
bob.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
bob.listen(6969);
