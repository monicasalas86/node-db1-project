const router = require('express').Router()
const Account = require('./accounts-model')
const {
  checkAccountId,
  checkAccountPayload,
  checkAccountNameUnique
} = require('./accounts-middleware')

router.get('/', (req, res, next) => {
  Account.getAll(req.params.id)
    .then(accounts => {
      res.status(200).json(accounts)
    })
    .catch(next)
})

router.get('/:id', checkAccountId, (req, res, next) => {
  res.status(200).json(req.accountFromDb)
})

router.post('/', checkAccountPayload, checkAccountNameUnique, async (req, res, next) => {
  try{
    const newAccount = await Account.create(req.body)
    res.status(201).json(newAccount)
  } catch (err) {
    next(err)
  }
  
})

router.put('/:id', checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack
  })
})

module.exports = router;
