'use strict'

const Controller = require('egg').Controller

class UsersController extends Controller {
  async getUserInfo () {
    const { ctx } = this
    ctx.body = {
      name: 'Kevin',
      role: 'admin',
    }
  }
}

module.exports = UsersController
