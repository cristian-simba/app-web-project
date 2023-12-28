// Importar dotenv 
require('dotenv').config()

// Importación de la variable app
const app = require('./server.js')
// Importación de la función connection
const connection = require('./database.js')



// Invocar la función 
connection()



// Iniciar el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});