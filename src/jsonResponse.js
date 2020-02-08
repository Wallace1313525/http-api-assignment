// function to send a json object
const respondJSON = (request, response, status, object) => {

  response.writeHead(status, { 'Content-Type': 'application/json' });

  response.write(JSON.stringify(object));

  response.end();
};

//success code
const success = (request, response) => {
  // message to send
  const responseJSON = {
    message: 'Success!',
  };

  respondJSON(request, response, 200, responseJSON);
};

//forbidden code
const foribidden = (request, response) => {
  // message to send
  const responseJSON = {
    message: 'You do not have access to this content',
    id: 'forbidden'
  };

  respondJSON(request, response, 403, responseJSON);
};

//internal code
const internal = (request, response) => {
  // message to send
  const responseJSON = {
    message: 'Internal Server Error.  Something went wrong',
    id: 'Internal Error'
  };

  respondJSON(request, response, 500, responseJSON);
};


//internal code
const notImplemented = (request, response) => {
  // message to send
  const responseJSON = {
    message: 'A get request has not yet been implemented.  Check again later',
    id: 'notImplemented'
  };

  respondJSON(request, response, 500, responseJSON);
};

// function to show a bad request without the correct parameters
const badRequest = (request, response, params) => {
  // message to send
  const responseJSON = {
    message: 'BadRequest',
  };

  // if the request does not contain a valid=true query parameter
  if (!params.valid || params.valid !== 'true') {
    // set our error message
    responseJSON.message = 'Missing valid query parameter set to true';
    // give the error a consistent id
    responseJSON.id = 'badRequest';
    // return our json with a 400 bad request code
    return respondJSON(request, response, 400, responseJSON);
  }

  // if the parameter is here, send json with a success status code
  return respondJSON(request, response, 200, responseJSON);
};

const unauthorized = (request, response, params) => {
  // message to send
  const responseJSON = {
    message: 'Unauthorized',
  };

  // if the request does not contain a valid=true query parameter
  if (!params.loggedIn || params.loggedIn !== 'yes') {
    // set our error message
    responseJSON.message = 'Missing valid query parameter set to yes';
    // give the error a consistent id
    responseJSON.id = 'unauthorized';
    // return our json with a 401 bad request code
    return respondJSON(request, response, 401, responseJSON);
  }

  // if the parameter is here, send json with a success status code
  return respondJSON(request, response, 200, responseJSON);
};


// function to show not found error
const notFound = (request, response) => {
  // error message with a description and consistent error id
  const responseJSON = {
    message: 'The page you are looking for was not found.',
    id: 'notFound',
  };

  // return our json with a 404 not found error code
  respondJSON(request, response, 404, responseJSON);
};

// exports to set functions to public.
// In this syntax, you can do getIndex:getIndex, but if they
// are the same name, you can short handle to just getIndex,
module.exports = {
  success,
  badRequest,
  notFound,
  unauthorized,
  foribidden,
  internal,
  notImplemented
};
