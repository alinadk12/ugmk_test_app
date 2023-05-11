import { AppError } from './AppError';

export class ApiError extends AppError {
  constructor(message: string = 'API Error') {
    super(message);
  }
}
