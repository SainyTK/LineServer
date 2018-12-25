import axios from 'axios';
import apiToken from '../config/apiToken';

const apiRoute = 'https://api.line.me/v2/bot/message/reply';
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + apiToken
};

export default class LineApiService {
    constructor() { }

    reply(replyToken, messages) {
        let body = {
            replyToken: replyToken,
            messages: messages
        };

        return axios.post(apiRoute, body, { headers: headers });
    }
}