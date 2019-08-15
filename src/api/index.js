var express = require('express');
var app = express();
const https = require('https');


app.get('/api/homecards', (appReq, appRes) => {
  let idsRequestBuffers = []
  https.get('https://frontend-interview.spotahome.com/api/public/listings/search/markers/madrid', 
    idsResponse => {
      idsResponse.on('error', err => console.error(err))
      idsResponse.on('data', (data) => { idsRequestBuffers.push(data) });
      idsResponse.on('end', data => {
        if(idsResponse.statusCode === 200) {
          const buffer = Buffer.concat(idsRequestBuffers);
          const ids = JSON.parse(buffer.toString()).data.slice(0, 31)
            .map(marker => marker.id);
          const idsQuery = `?ids[]= ${ids.join('&ids[]=')}`
          https.get(`https://frontend-interview.spotahome.com/api/public/listings/search/homecards_ids?${idsQuery}`,
            homeCardsResponse => {
              let homeCardsBuffers = [];
              homeCardsResponse.on('error', err => console.error(err))
              homeCardsResponse.on('data', data => {
                homeCardsBuffers.push(data);
              });
              homeCardsResponse.on('end', () => {
                if(homeCardsResponse.statusCode === 200) {
                  const homeCardsBuffer = Buffer.concat(buff);
                  const homecards = JSON.parse(homeCardsBuffer.toString())
                    .data.homecards
                  res.send(homecards)
                }
              })
            })
        } else {
          console.error(`The request failed with the following code ${resp.statusCode}`)
        }
      });
    })
});

app.listen(3000, () => console.log('App listening on port 3000!'))