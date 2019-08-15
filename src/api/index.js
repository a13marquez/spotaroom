var express = require('express');
var app = express();
const https = require('https');


app.get('/api/homecards', (req, res) => {
  let buffers = []
  https.get('https://frontend-interview.spotahome.com/api/public/listings/search/markers/madrid', 
    response => {
      response.on('error', err => console.error(err))
      response.on('data', (data) => {
        buffers.push(data)
      });
      response.on('end', data => {
        if(response.statusCode === 200) {
          const buffer = Buffer.concat(buffers);
          const data = JSON.parse(buffer.toString()).data.slice(0, 30)
          res.send(data)
        } else {
          console.error('The request failed')
        }
      });
    })
});

app.listen(3000, () => console.log('App listening on port 3000!'))