import { Router, Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import { celebrate } from 'celebrate';

import * as Controller from '../../controllers/general.controller';

const general = <T>(app: Router, rootPath: string, model: any, Schema: object, UpdateSchema: object | null = null) => {
  const route = Router();
  app.use(rootPath, route);

  route.post('/', celebrate(Schema), (req: Request, res: Response, next: NextFunction) => Controller.create<T>(req, res, next, model));
  route.get('/', (req: Request, res: Response, next: NextFunction) => Controller.getMany<T>(req, res, next, model));
  route.get('/:id', (req: Request, res: Response, next: NextFunction) => Controller.getOne<T>(req, res, next, model));
  route.put('/:id', celebrate(UpdateSchema ?? Schema), (req: Request, res: Response, next: NextFunction) => Controller.update<T>(req, res, next, model));
  route.delete('/:id', (req: Request, res: Response, next: NextFunction) => Controller.remove<T>(req, res, next, model));
};

export default general;
