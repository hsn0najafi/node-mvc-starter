import 'reflect-metadata';
import express, { Application } from 'express';

import config from './config';

const app: Application = express();

(async () => {
  await require('./loaders').default({ expressApp: app });

  if (process.env.NODE_ENV !== 'test') {
    app
      .listen(config.port, () => {
        console.log(`Server is running on port: ${config.port}`);
      })
      .on('error', (err) => {
        console.log(err);
        process.exit(1);
      });
  }
})();

export default app;
