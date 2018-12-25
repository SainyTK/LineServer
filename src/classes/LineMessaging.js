import LineApiService from '../services/LineApiService';
import FirebaseApiService from '../services/FirebaseApiService';

class LineMessaging {
    constructor() { }

    replyMessage(replyToken, message) {
        return new Promise((resolve, reject) => {
            try {
                FirebaseApiService.getAnswer(message).then((answer) => {
                    let messages = [{
                        type: 'text',
                        text: answer
                    }];
                    return LineApiService.reply(replyToken, messages)
                        .then(rs => resolve(rs))
                        .catch(err => reject(err));
                }).catch((err) => reject(err));
            } catch (e) {
                reject(e);
            }
        });
    }
}

export default new LineMessaging();