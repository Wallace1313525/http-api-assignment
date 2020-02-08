const http = require('http');
const htmlHandler = require('./htmlResponse.js');
const textHandler = require('./textResponse.js');
const jsonHandler = require('./jsonResponse.js');
const url = require('url'); 

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);

  switch (request.url) {
    case '/':
      htmlHandler.getIndex(request, response);
      break;
    case '/page2':
      htmlHandler.getPage2(request, response);
      break;
    case '/hello':
      textHandler.getHello(request, response);
      break;
    case '/time':
      textHandler.getTime(request, response);
      break;
    case '/helloJSON':
      jsonHandler.getHelloJSON(request, response);
      break;
    case '/timeJSON':
      jsonHandler.getTimeJSON(request, response);
      break;
    case '/dankmemes':
      htmlHandler.getPNG(request, response);
      break;
    default:
      htmlHandler.getIndex(request, response);
      break;
  }
    
const parsedUrl = url.parse(request.url);

  //check if method was POST, otherwise assume GET 
  //for the sake of this example
  if (request.method === 'POST') {

  } else {
    handleGet(request, response, parsedUrl);
  }
};

//handle GET requests
const handleGet = (request, response, parsedUrl) => {
  //route to correct method based on url
    htmlHandler.getCSS(request, response);
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);
