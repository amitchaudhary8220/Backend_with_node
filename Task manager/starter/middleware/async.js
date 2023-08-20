const asyncMiddleWare = (fn) => {
  return async (req, res, next) => {
    // console.log("req ", req, "next ", next);
    try {
      await fn(req, res);
    } catch (error) {
      console.log("enter in catch block", error);
      next(error);  //this is standard way of calling the error handler middleware , if we don't pass error inside next  , it will simply call the next middleware 
    }
  };
};

module.exports = asyncMiddleWare;
