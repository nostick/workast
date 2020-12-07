import { WebClient } from '@slack/web-api';

export default class Slack {
    constructor(){
        this.client = new WebClient(process.env.SLACK_TOKEN);
    }

    async sendMessage(owner, title, text){
        await this.client.chat.postMessage({
            channel: '#general',
            text: `${owner} just created this new article: ${title} with this content: ${text}`,
        });
    }
}
