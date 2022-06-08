const checkContentType = (contentTypes = []) => (req, res, next) => {
  const contentType = req.headers['content-type'];
  if (contentTypes.includes(contentType)) return next();
  res.set('Accept', contentTypes);
  return next({ status: 415, message: `Incorrect content-type ${contentType} expcted one of: [${contentTypes}]` });
};

const checkMethods = (methods = []) => (req, res, next) => {
  if (methods.includes(req.method)) return next();
  res.set('Allow', methods);
  return next({ status: 405, message: `Incorrect method ${req.method} expcted one of: [${methods}]` });
};

module.exports = {
  checkContentType,
  checkMethods,
};
