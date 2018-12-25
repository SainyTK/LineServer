import LineApiService from '../services/LineApiService';

class LineMessaging {
    constructor() { }

    replyMessage(replyToken, message) {
        let messages = [{
            type: 'text',
            text: message
        }];
        return LineApiService.reply(replyToken, messages);
    }
}

export default new LineMessaging();