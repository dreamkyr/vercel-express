const handlers = {
  OPTIONS: (request, response) => {
    return response.status(200).send();
  },
  GET: (request, response) => {
    return response.status(200).send();
  },
  POST: async (request, response) => {
    return response.send({
      ...request.body,
    });
  },
};

export default async function (request, response) {
  handlers[request.method] && handlers[request.method](request, response);
}

