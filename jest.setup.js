import 'whatwg-fetch';
import '@testing-library/jest-dom';

import { server } from './src/mocks/server';

process.env = Object.assign(process.env, {
  NEXT_PUBLIC_APP_URL: 'http://localhost:3000',
  NEXT_PUBLIC_API_URL: 'http://localhost:4000/api',
});

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
