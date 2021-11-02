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

const updateById = async (id, account) => {
  await db('accounts').where('id', id).update(account)
  return(getById(id))
}

const deleteById =  async id => {
  const accountDeleted = await getById(id)
  const result = await db('accounts').del().where('id', id)
  console.log(result)
  return(accountDeleted)
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
