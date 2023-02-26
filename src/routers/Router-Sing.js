import { Router } from "express";
//import {
//    Sign
//    } from '../controllers/sign-up';
import {
    Tweets,
    TweetsUserName,
    TweetsGet ,
    Sign
    } from '../controllers/tweets.js';
    

const authRouter = Router();
authRouter.get('/tweets', TweetsGet);
authRouter.get('/tweets/:username', TweetsUserName);
authRouter.post('/tweets',  Tweets);
authRouter.post('/sign-up', Sign);
export default authRouter;
