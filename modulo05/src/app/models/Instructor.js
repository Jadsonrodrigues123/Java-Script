const { date_nasc, date_c } = require('../../lib/utils');
const db = require('../../config/db');

module.exports = {
  all(callback) {

    db.query(`SELECT * FROM instructors`, function(err, results) {
      if(err) return response.send('Erro no banco de dados!');

      callback(results.rows)
    });

  },

  create(data, callback) {
    
    const query = `
        INSERT INTO instructors (
          name,
          avatar_url,
          gender,
          services,
          birth,
          created_at
        ) VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING id 
    `
    const values = [
      request.body.name,
      request.body.avatar_url,
      request.body.gender,
      request.body.services,
      date_nasc(request.body.birth).iso,
      date_c(Date.now()).iso
    ]

    db.query(query, values, function(err, results) {
      if(err) return response.send('Erro no banco de dados!');

      callback(results.rows[0])
    })
  },

  find(id, callback) {
    db.query(`
      SELECT * FORM instructors 
      WHERE id = $1`, [id], function(err, results) {
      if(err) return response.send('Erro no banco de dados!');

      callback(results.rows[0]);
    })
  }
}