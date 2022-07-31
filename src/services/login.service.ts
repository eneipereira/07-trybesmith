import Joi from 'joi';
import jwt from 'jsonwebtoken';
import { Login, NewUser, Payload } from '../types';
import vars from '../vars';
import runSchema from './runSchema';

const secret = vars.jwtSecret;

const loginService = {
  async validateBodyLogin(body: Login): Promise<Login> {
    const result = runSchema(Joi.object<Login>({
      username: Joi.string().required(),
      password: Joi.string().required(),
    }).messages({
      'any.required': '{{#label}} is required',
      'string.empty': '{{#label}} is required',
    }))(body);

    return result;
  },

  async makeToken(user: NewUser | Payload) {
    const token = jwt.sign(user, secret);

    return token;
  },
};

export default loginService;