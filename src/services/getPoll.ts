import { cache } from 'react';
import { api } from '@/src/utils/axios';
import { ApiResult, Poll } from '@/src/types/common';

export const getPoll = cache(async (publicId: string) => {
  try {
    const { data } = await api.get<ApiResult<Poll>>(`/polls/${publicId}`);
    return data.result;
  } catch {
    return null;
  }
});
