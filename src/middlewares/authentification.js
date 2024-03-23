const secretToken = "MY_SECRET_TOKEN";

const isAuthenticated = (req, res, next) => {
  const { token } = req.query;
  if (token === secretToken) {
    next();
    return;
  } else {
    res.status(401).json({ data: "Unauthorized" });
  }
};

module.exports = { isAuthenticated };
