const {app} = require('./App');
const port = 5000

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});