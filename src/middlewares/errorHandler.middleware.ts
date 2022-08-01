import { NextFunction, Request, Response } from 'express';

const errors: Record<string, number> = {
  ValidationError: 400,
  UnauthorizedError: 401,
  UnprocessableEntityError: 422,
};

const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const { name, message } = err;
  
  let status = errors[name];

  if (message.includes('string') || message.includes('length')) {
    status = errors.UnprocessableEntityError;
  }

  if (!status) return res.status(500).json({ message });

  res.status(status).json({ message });
};

export default errorHandler;