import { api } from '@/src/utils/axios';
import { ApiResult, Poll } from '@/src/types/common';
import { apiErrorToErrorObject } from '@/src/services/api/apiErrorToErrorObject';

export async function vote(publicId: string, optionIds: number[]) {
  try {
    const { data } = await api.post<ApiResult<Poll>>(
      `/polls/${publicId}/vote`,
      {
        optionIds: optionIds,
      }
    );
    return { success: true, data: data.result };
  } catch (err: any) {
    const errors = apiErrorToErrorObject(err);
    return { success: false, data: errors };
  }
}
