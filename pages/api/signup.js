const handlers = {
  OPTIONS: (request, response) => {
    return response.status(200).send();
  },
  GET: (request, response) => {
    return response.status(200).send();
  },
  POST: async (request, response) => {
    return response.send({
      ...request.body
    });
  },
};

const api = async (request, response) => {
  handlers[request.method] && handlers[request.method](request, response);
}

export default api;