const Account = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountId = (req, res, next) => {
  Account.getById(req.params.id)
    .then(possibleAccount => {
      if(possibleAccount) {
        req.accountFromDb = possibleAccount
        next()
      } else {
        next({
          status: 404,
          message: 'account not found'
        })
      }
    })
}