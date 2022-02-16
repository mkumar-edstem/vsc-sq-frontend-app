// const local = {
//   BASE_URL: 'https://vscapp.ciccbytes.com',
//   MOCK_URL: 'http://localhost:4000'
// };

const dev = {
  BASE_URL: 'https://vscapp.ciccbytes.com',
  MOCK_URL: 'https://vscmock.ciccbytes.com'
};

const stage = {
  BASE_URL: 'https://vscapp.ciccbytes.com',
  MOCK_URL: 'https://vscmock.ciccbytes.com'
};

// change dev to local to point to local server.
const config = process.env.REACT_APP_STAGE === 'stage' ? stage : dev;

export default config;
