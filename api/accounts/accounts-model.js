const db = require('../../data/db-config')

const getAll = () => {
  const result = db('accounts')
  return result
}

const getById = id => {
  const result = db('accounts').where('id', id).first()
  return result
}

const create = async (newAccount) => {
  const [id] = await db('accounts').insert(newAccount)
  return getById(id)
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

const getByName = (name) => {
  return db('accounts').where('name', name.trim()).first()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  getByName
}
