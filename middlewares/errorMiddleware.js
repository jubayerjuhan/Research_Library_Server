const errorMiddleware = (err, req, res, next) => {
  console.log("Hitted....");
  res.status(err.statusCode).json({
    success: false,
    message: "Error Message",
  });
};

export default errorMiddleware;
