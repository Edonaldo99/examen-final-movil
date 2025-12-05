const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const USER = {
  email: "jlgarrido36@gmail.com",
  password: "123456"
};

app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;

  console.log("Intento de login:", req.body);

  if (email === USER.email && password === USER.password) {
    return res.json({
      message: "Login exitoso",
      token: "TOKEN-DE-EJEMPLO-123456"
    });
  }

  return res.status(401).json({
    message: "Credenciales incorrectas"
  });
});

app.listen(3000, () => {
  console.log('Backend corriendo en http://localhost:3000');
});
