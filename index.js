export default {
  fetch(request) {
    /*
    // Respond based on if the URL of the request matches what is hardcoded in the foolowing cod block.
    if (request.url == "https://codeclub-1.willsmithee.workers.dev") {
      return new Response("Hello worker!", {
        headers: {
          "content-type": "text/plain",
        },
      });
    } else {
      return new Response("Error Worker!", {
        headers: {
          "content-type": "text/plain",
        },
      });
    }
    */
    // Respond with a sentence containg the request's method, otherwise respond that the request object doesn'r exist
    if (request) {
      return new Response(`This request used the ${request.method} method.`);
    } else {
      return new Response(`The request object does not exist`);
    }
  },
};
