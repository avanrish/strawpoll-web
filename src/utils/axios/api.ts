import axios from 'axios';
import { apiUrl } from '@/src/utils/fixtures/config';

export const api = axios.create({ baseURL: apiUrl });
