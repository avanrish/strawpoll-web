import { api } from '@/src/utils/axios';
import {
  ApiResult,
  ErrorObject,
  Poll,
  ServiceResult,
} from '@/src/types/common';
import { PollType } from '@/src/utils/enums/pollType';
import { apiErrorToErrorObject } from '@/src/services/api/apiErrorToErrorObject';

type PollOption = { key: string; value: string };

export const createPoll = async (
  title: string,
  options: PollOption[]
): Promise<ServiceResult<Poll | ErrorObject>> => {
  try {
    const { data } = await api.post<ApiResult<Poll>>('/polls', {
      title: title,
      type: PollType.SINGLE_CHOICE,
      options: options.map((option) => option.value),
    });
    return { success: true, data: data.result };
  } catch (err: any) {
    const errors = apiErrorToErrorObject(err);
    return { success: false, data: errors };
  }
};
