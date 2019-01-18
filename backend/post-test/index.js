const { send, json, run } = require("micro");

const handler = async (req, res) => {
  const body = await json(req);
  send(res, 200, body.emails);
};

module.exports = (req, res) => run(req, res, handler);
