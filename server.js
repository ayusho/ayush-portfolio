const express = require('express');
const path = require('path');
const port = process.env.PORT || 8081;
const app = express();
// app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'client','build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/api/resume', function (req, res) {
  res.send(path.join(__dirname, 'client/src/assets/resume', 'resume.pdf'));
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});
app.listen(port);