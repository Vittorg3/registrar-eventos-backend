import BcryptService from '../../services/bcrypt';

import { 
    validationGroup,
    validationUser,
    validationEvent
} from '../../domain/validation';

import { controller as SignupController } from '../controllers/User/Save/composer';
import { controller as SigninController } from '../controllers/User/Signin/composer';
import { controller as InviteToGroupController} from '../controllers/User/InviteToGroup/composer';
import { controller as RemoveFromGroupController } from '../controllers/User/RemoveFromGroup/composer';

import { controller as SaveEventController } from '../controllers/Event/Save/composer';
import { controller as EditEventController } from '../controllers/Event/Edit/composer';
import { controller as RemoveEventController } from '../controllers/Event/Remove/composer';

import { controller as SaveGroupController } from '../controllers/Group/Save/composer';
import { controller as EditGroupController } from '../controllers/Group/Edit/composer';
import { controller as RemoveGroupController } from '../controllers/Group/Remove/composer';

import { adapterRoute } from '../../adapters/express-route-adapter';
import { Router } from 'express';

import MongoRepository from '../../infra/db/mongodb/repositories/mongo.repository';

import DatabaseTest from '../../domain/test/DatabaseTest';

const database = new MongoRepository();
const cryptService = new BcryptService();

export const route = Router();

route.post('/signup', adapterRoute(SignupController(database, cryptService, validationUser)));
route.post('/signin', adapterRoute(SigninController(database, validationUser)));
route.post('/invite/user/group', adapterRoute(InviteToGroupController(database, validationUser)));
route.delete('/remove/user/group', adapterRoute(RemoveFromGroupController(database, validationUser)));

route.post('/save/event', adapterRoute(SaveEventController(database, validationEvent)));
route.put('/edit/event', adapterRoute(EditEventController(database, validationEvent)));
route.delete('/remove/event', adapterRoute(RemoveEventController(database, validationEvent)));

route.post('/save/group', adapterRoute(SaveGroupController(database, validationGroup)));
route.put('/edit/group', adapterRoute(EditGroupController(database, validationGroup)));
route.delete('/remove/group', adapterRoute(RemoveGroupController(database, validationGroup)));
