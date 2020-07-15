const db = require('../../config/db')
const { date_c, age, date_nasc } = require('../../lib/utils');

module.exports = {
  all(callback) {
    db.query(`SELECT * FROM instructors`, function(err, results) {
      if (err) return response.send('Database Error!')

      callback(results.rows)
    })
  },

  create(data) {
    const query = `
      INSERT INTO instructors (
        name,
        avatar_url
        gender,
        services,
        birth,
        created_at
      ) VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id
    `

    const values = [
      data.name,
      data.avatar_url,
      data.gender,
      data.services,
      date_nasc(data.birth),
      date_c(Date.now())
    ]

    db.query(query, values, function(err, results) {
      if(err) return response.send('Database Error!')

      callback(results.rows[0])
    })
  },

  find(id, callback) {
    db.query(`
      SELECT * FROM 
      instructors WHERE id = $1`,
      [id], function(err, results) {

        if(err) response.send('Database Error!')

        callback(results.rows[0])
    })
  }
}
