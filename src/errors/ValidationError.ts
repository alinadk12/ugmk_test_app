import { AppError } from './AppError';

export class ValidationError extends AppError {
  constructor(message: string = 'Validation Error') {
    super(message);
  }
}
