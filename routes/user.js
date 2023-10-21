const express = require('express');
const routeUser = express.Router();

const Joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { client } = require('../app');

