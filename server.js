const app = require('./app')
const port = 3000

// requires app and port to listen on the port sepecified

app.listen(port, function() {
   console.log(`server listening on port ${port}!`)
});
