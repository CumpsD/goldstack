import express from 'express';
import cors from 'cors';
import { Server } from 'http';

import { readLambdaConfig, LambdaConfig } from '@goldstack/utils-aws-lambda';
import { injectRoutes } from './expressRoutes';

export interface LocalHttpAPIOptions {
  port: string;
  routesDir: string;
  cors?: string;
}

export interface StartServerResult {
  shutdown: () => Promise<void>;
  server: Server;
  lambdaConfig: LambdaConfig[];
}

export const startServer = async (
  options: LocalHttpAPIOptions
): Promise<StartServerResult> => {
  const app: express.Application = express();
  app.use(express.json());

  if (options.cors) {
    app.use(cors({ origin: options.cors, credentials: true }));
  }
  const lambdaConfig = readLambdaConfig(options.routesDir);

  injectRoutes({
    app: app,
    lambdaConfigs: lambdaConfig,
  });

  const result = await new Promise<Server>((resolve) => {
    const server = app.listen(parseInt(options.port), function () {
      resolve(server);
    });
  });

  return {
    server: result,
    lambdaConfig: lambdaConfig,
    shutdown: (): Promise<void> => {
      return new Promise<void>((resolve, reject) => {
        result.close((err) => {
          if (err) {
            reject(err);
            return;
          }
          resolve();
        });
      });
    },
  };
};
