/** @format */

import { setupServer } from 'msw/node';
import { handlers } from './handlers';
// eslint-disable-next-line
export const server = setupServer(...handlers);