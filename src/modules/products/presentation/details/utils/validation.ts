import { number, object } from 'yup';
import { FactoryIds } from '../../../domain/enums/factory';

const paramSchema = object({
  factoryId: number().oneOf(Object.values(FactoryIds) as number[]),
  month: number().min(1).max(12),
});

export const isValid = (factoryId: number, month: number): boolean => {
  return paramSchema.isValidSync({ factoryId, month }, { strict: true });
}
