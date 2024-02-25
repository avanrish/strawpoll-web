import { ErrorObject } from '@/src/types/common';

export function apiErrorToErrorObject(err: any): ErrorObject {
  const errors: {
    [key: string]: any;
  } = {};
  if (err.response.status >= 500) errors.general = 'errors.unknown';
  else {
    for (const error of err.response.data.message) {
      errors[error?.split('.')[0]] = ['errors', error]?.join('.');
    }
  }
  return errors;
}
