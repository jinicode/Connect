const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');



const User=require('../models/User');

router.get('/test',(req,res) => {
    res.json({msg:"this is jinit"});
});

router.post('/register',(req,res) => {
const {error,isValid}=va
})