const asyncMiddleWare = (fn) => {
  return async (req, res, next) => {
    // console.log("req ", req, "next ", next);
    try {
      await fn(req, res);
    } catch (error) {
      console.log("enter in catch block", error);
      next(error);
    }
  };
};

module.exports = asyncMiddleWare;
