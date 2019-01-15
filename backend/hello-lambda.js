const { json, text } = require("micro");
module.exports = async (req, res) => {
  try {
    const t = await text(req);
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(
      t ||
        "<style>body{background:black;color:white;}span{font-family:menlo,monospace;font-weight:500;font-size:256px;}</style><span>λ</span>"
    );
  } catch (e) {
    res.writeHead(500);
    res.end(`hmmm, something went wrong: ${e.message}`);
  }
};
