const port = 8080;

const express = require('express');
const app = express();
const router = express.Router();
router.get('/time', function(req, res) {
  res.json({ 'time': Date.now() / 1000 });
});

app.use('/api', router);
app.listen(port);
console.log('Open your browser on http://localhost:8080/api/time');
