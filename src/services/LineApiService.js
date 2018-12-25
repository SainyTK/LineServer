import axios from 'axios';
import request from 'request';
import apiToken from '../config/apiToken';

const apiRoute = 'https://api.line.me/v2/bot/message/reply';
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + apiToken
};

class LineApiService {
    constructor() { }

    reply(replyToken, messages) {
        return new Promise((resolve, reject) => {
            try {
                let body = JSON.stringify({
                    replyToken: replyToken,
                    messages: messages
                });

                return request.post({
                    url: apiRoute,
                    body: body,
                    headers: headers
                }, (err, res, body) => {
                    console.log(`status = ${res.statusCode}`);
                    return resolve(res.statusCode);
                });

            } catch (e) {
                reject(e);
            }
        });
    }
}

export default new LineApiService();

// axios({
//     method: 'post',
//     baseURL: apiRoute,
//     headers: headers,
//     data: body
// });