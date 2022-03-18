function interval(delayMs, value) {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      resolve(value);
    }, delayMs);
  });
}

interval(1000, 'ABC')
  .then((val) => {
    console.log('1s', val);
  });


// La principale limite est que les promesses ne fonctionnent
// que pour des callbacks appelés 1 seule fois :
// ex : setTimeout, fs.readFile, fetch
// PAS : setInterval, readline.on('line'), WebSocket, addEventListener...

// 2 solutions :
// - Observable, pour l'instant via des libs comme RxJS (Angular)
// - Asynchronous iterator (ES2018), for await (const event of addListener('click')) {}
// const server = Deno.listen({ port: 8080 });
// for await (const conn of server) {
//   ...handle the connection...
// }
