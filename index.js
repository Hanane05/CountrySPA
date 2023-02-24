const path = require('path')
const express = require('express')
const app = express()
const fs = require('fs')
const request = require('request')
const { PORT } = require('./config')
const { API_KEY } = require('./config')

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")))

app.get("/*", function(req, res){
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"))
})
        
        var url = "http://api.countrylayer.com/v2/all?access_key="+API_KEY;
console.log(url);
            request.get({
                url: url,
                json: true,
                headers: {'User-Agent': 'request'}
            }, (err, res, data) => {
                if (err) {
                console.log('Error:', err);
                } else if (res.statusCode !== 200) {
                console.log('Status:', res.statusCode);
                } else {
                // data is successfully parsed as a JSON object:
                var newData = JSON.stringify(data)
                    fs.writeFile('frontend/static/js/views/countries.json', newData, err => {
                    if(err) throw err;
                    console.log("success");
                    })
                }
            })


app.listen(PORT || 4001 , () => { console.log("Server running ", PORT)})