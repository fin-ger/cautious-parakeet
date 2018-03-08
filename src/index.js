const port = 8080;

const express = require('express');
const impl = require('./impl');

const app = express();
const router = new express.Router();
router.get('/time', function(req, res) {
  res.json({'time': impl.get_time()});
});

app.use('/api', router);
app.listen(port);
console.log('Open your browser on http://localhost:8080/api/time');
