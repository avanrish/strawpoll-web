import axios from 'axios';
import { apiUrl } from '@/src/utils/fixtures/config';

export const axiosApi = axios.create({ baseURL: apiUrl });
