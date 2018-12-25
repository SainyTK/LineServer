import LineApiService from '../services/LineApiService';

export default class LineMessaging {
    constructor() {}

    replyMessage(replyToken, message) {
        let messages = [{
            type: 'text',
            text: message
        }];
        return LineApiService.replyMessage(replyToken, messages);
    }
}