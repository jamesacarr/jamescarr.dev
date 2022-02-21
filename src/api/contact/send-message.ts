import SlackWebhook from '../lib/slack-webhook';

import generatePayload from './generate-payload';
import { ContactRequestBody } from './types';

const webhook = new SlackWebhook();

const sendMessage = async (body: ContactRequestBody): Promise<void> => {
  const payload = generatePayload(body);
  await webhook.send(payload);
};

export default sendMessage;
