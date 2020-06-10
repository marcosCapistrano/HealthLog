const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Conecta com o banco de dados
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000; //process.env.port necessario para deploy no heroku

app.get('/', (req, res) => res.send('API Running'));

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/meals', require('./routes/api/meals'));
app.use('/api/days', require('./routes/api/days'));

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
