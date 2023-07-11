export function success(req, res, message, status) {
  let statusCode = status || 200;
  let statusMessage = message || "";

  res.status(status).send({
    error: false,
    status: statusCode,
    body: statusMessage,
  });
}

export function error(req, res, message, status) {
  let statusCode = status || 500;
  let statusMessage = message || "Internal server error";

  res.status(statusCode).send({
    error: false,
    status: status,
    body: statusMessage,
  });
}
