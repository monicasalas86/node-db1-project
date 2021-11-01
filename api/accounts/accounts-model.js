const db = require('../../data/db-config')

const getAll = () => {
  const result = db('accounts')
  return result
}

const getById = id => {
  const result = db('accounts').where('id', id).first()
  return result
}

const create = account => {
  // DO YOUR MAGIC
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
