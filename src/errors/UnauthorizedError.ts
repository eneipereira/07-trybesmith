class UnauthorizedError extends Error {
  constructor(message = 'Username or password invalid') {
    super(message);

    this.name = 'UnauthorizedError';
  }
}

export default UnauthorizedError;