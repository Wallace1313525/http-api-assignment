const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getPNG = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(index);
  response.end();
};

module.exports.getPNG = getPNG;
