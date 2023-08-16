const express =require('express');
const authenticationController=require('../controller/authentication');

const router = express.Router();
router.use(express.json());

router.route('/login')
    .post(authenticationController.LoginAuth)
router.route('/')    
    .post(authenticationController.RegisterAuth);


    exports.authRoute = router;