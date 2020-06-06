const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000; //process.env.port necessario para deploy no heroku

app.get('/', (req, res) => res.send('API Running'));
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
