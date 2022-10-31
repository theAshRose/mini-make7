const fs = require("fs")
const path = require('path')
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'HatsuneMiku',
        database: 'movies_db'
    },
    console.log(`Accessing movies_db...`)
);

db.query(`SELECT * FROM movies JOIN movies_reviews ON movies_reviews.film_id = movies.id;`)