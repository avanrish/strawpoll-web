import axios from 'axios';

import { apiUrl } from '@/src/utils/config/client';

export const api = axios.create({ baseURL: apiUrl });
