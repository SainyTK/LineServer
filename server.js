import express from 'express';
import bodyParser from 'body-parser';

import LineMessaging from './src/classes/LineMessaging';

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello Server');
});

app.post('/webhook', (req, res) => {
    let replyToken = req.body.events[0].replyToken;
    let msg = req.body.events[0].message.text;

    console.log(`Message token : ${replyToken}`);
    console.log(`Message : ${msg}`);

    LineMessaging.replyMessage(replyToken, msg).then((result) => {
        console.log(`result : ${result}`);
        res.json({
            status: '200',
            message: 'Sent message'
        });
    }).catch((err) => {
        console.error(`error code : ${err.status}`);
        console.error(`error : ${err.message}`);
    });

});

app.listen(PORT, () => {
    console.log(`Listening to port : ${PORT}`);
});