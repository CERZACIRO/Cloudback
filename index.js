const  express = require('express')
const app = express()
const routes = require('./src/routes/index');
const cors = require('cors');
app.use(cors()); 

const port = 3000

routes(app)

app.listen(port, () => {
  console.log(`Escuchando el puerto ${port}`)
})

