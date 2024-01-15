import express from 'express';
const router = express.Router();

//-------------------   controllers   -------------------------//

//---------------userAuthControllers----------------//
import { createUser } from '../controllers/userAuthControllers.js';

router.post('/createUser', createUser);

export default router;
