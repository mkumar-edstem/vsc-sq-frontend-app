/** @format */

import { setupWorker } from 'msw';
import { handlers } from './handlers';
// This configures a Service Worker with the given request handlers.
// eslint-disable-next-line
export const worker = setupWorker(...handlers);
