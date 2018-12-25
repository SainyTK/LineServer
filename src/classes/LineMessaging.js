import LineApiService from '../services/LineApiService';

class LineMessaging {
    constructor() { }

    replyMessage(replyToken, message) {
        return new Promise((resolve, reject) => {
            try {
                let messages = [{
                    type: 'text',
                    text: message
                }];
                return LineApiService.reply(replyToken, messages)
                    .then(rs => resolve(rs))
                    .catch(err => reject(err));
            } catch (e) {
                reject(e);
            }
        })

    }
}

export default new LineMessaging();