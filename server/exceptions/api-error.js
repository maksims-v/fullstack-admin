const ApiError = class ApiError extends Error {
  status;
  errors;

  constructor(status, message, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static UnauhorizedError() {
    return new ApiError(401, 'пользователь не авторизован');
  }

  static BadRequest(message, errors = []) {
    return new ApiError(400, message, errors);
  }
};

export default ApiError;
