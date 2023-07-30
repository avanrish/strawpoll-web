import axios from 'axios';
import { appUrl } from '@/src/utils/fixtures/config';

export const axiosNext = axios.create({ baseURL: appUrl });
