const sqlite = require("sqlite3").verbose();

const queryCreateUser = `
  CREATE TABLE IF NOT EXISTS users (
  id INTEGER NOT NULL UNIQUE,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  gender TEXT NOT NULL,
  ip_address TEXT NOT NULL
  )
`;

const queryCreateUserStatistic = `
    CREATE TABLE IF NOT EXISTS users_statistic (
      user_id INTEGER NOT NULL,
      date TEXT NOT NULL,
      page_views INTEGER NOT NULL,
      clicks INTEGER NOT NULL
    )
`;

const querySelectUser = `SELECT id,
       first_name,
       last_name,
       email,
       gender,
       ip_address,
       SUM(users_statistic.clicks) as total_clicks,
       SUM(users_statistic.page_views) as total_page_views
  FROM users
       INNER JOIN
       users_statistic ON users.id = users_statistic.user_id
       GROUP BY
       id;
`;
const querySelectUserStatistics = `
SELECT user_id,
       date,
       page_views,
       clicks,
       users.first_name,
       users.last_name
  FROM users_statistic
       INNER JOIN
       users ON users_statistic.user_id = users.id;`;

const queryInsertUser = "INSERT OR REPLACE into users values(?,?,?,?,?,?)";

const quryInsertUserStatistic = "INSERT INTO users_statistic values(?,?,?,?)";

const startAndCreate = (path, data, tableName, id) => {
  return new Promise((resolve, reject) => {
    let db = new sqlite.Database(path);

    const runDatabase = (query) => {
      db.run(query, (err) => {
        if (err) {
          console.log("Error with create", err);
        }
      });
    };

    const select = (query) => {
      db.all(query, (err, rows) => {
        if (err) {
          return console.log("Not selected. Error:\n", err.message);
        }
        resolve(rows);
      });
    };

    const insertInDatabase = (query, data) => {
      for (let i = 0; i < data.length; i++) {
        db.run(query, Object.values(data[i]), (err) => {
          if (err) {
            console.error(err);
          }
        });
      }
    };
    const createTable = (
      queryForGet,
      queryForRun,
      quertForInsert,
      queryFroSelect,
      id
    ) => {
      db.serialize(() => {
        runDatabase(queryForRun);
        db.get(queryForGet, (err, row) => {
          if (row === undefined) {
            insertInDatabase(quertForInsert, data);
            select(queryFroSelect);
          } else {
            select(queryFroSelect);
          }
        });
      });
    };

    switch (tableName) {
      case "users":
        createTable(
          "SELECT id from users where id=1",
          queryCreateUser,
          queryInsertUser,
          querySelectUser
        );
        break;
      case "users_statistic":
        createTable(
          "SELECT user_id from users_statistic where user_id=33",
          queryCreateUserStatistic,
          quryInsertUserStatistic,
          querySelectUserStatistics,
          id
        );
    }
  });
};

module.exports = startAndCreate;
