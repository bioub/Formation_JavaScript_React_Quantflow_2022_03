function timeout(delayMs, value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, delayMs);
  });
}

timeout(1000, 'ABC').then((val) => console.log('1s', val));

Promise.all([
  timeout(Math.random() * 2000, 'A'),
  timeout(Math.random() * 2000, 'B'),
]).then((values) => {
  console.log(values)
});

Promise.race([
  timeout(Math.random() * 1000, 'Requete HTTP'),
  timeout(300),
]).then(() => {

});
