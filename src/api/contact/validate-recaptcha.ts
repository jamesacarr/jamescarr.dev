import axios from 'axios';

import { UnauthorizedError } from '../lib/errors';

type RecaptchaResponse = {
  success: boolean;
  score: number;
  action: string;
  challenge_ts: string;
  hostname: string;
};

const validateReCAPTCHA = async (token: string): Promise<void> => {
  const verification = await axios.request<RecaptchaResponse>({
    url: 'https://www.google.com/recaptcha/api/siteverify',
    method: 'POST',
    params: {
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: token,
    },
  });

  if (!verification.data.success) {
    throw new UnauthorizedError('Invalid ReCAPTCHA token');
  }

  if (verification.data.score && verification.data.score < 0.6) {
    throw new UnauthorizedError('Low ReCAPTCHA score');
  }
};

export default validateReCAPTCHA;
