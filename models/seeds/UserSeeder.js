const db = require('../../config/mongoose')
const User = require('../user')

const SEED_USER = {
  name: 'root',
  email: 'root@example.com',
  password: '12345678',
  lastLogin: 'first'
}

db.once('open', () => {
  User.create(SEED_USER)
    .then(() => {
      console.log('done')
      db.close()
    })
    .catch(error => console.log(error))
})