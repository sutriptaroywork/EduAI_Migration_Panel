// ADD groups of links together
// ALL THE GET_ONE NEED `code` as a query parameter

export const SHIKSHA_BASE_URL = `${process.env.NEXT_PUBLIC_SHIKSHA_HOSTNAME}` as const;
export const SHIKSHA_LOGIN_URL = `${process.env.NEXT_PUBLIC_SHIKSHA_LOGIN}` as const;
export const REVERSE_PROXY_BASE_URL = `${process.env.REVERSE_PROXY_BASE_URL}` as const;

export const MFS_HOST = process.env.NEXT_PUBLIC_HOST;

export const API_URL = {
  FORGOT_PASSWORD: '/forget_pass/change-password-request',
  REST_PASS: '/forget_pass/change-password',

  SUMMARY: '/summarization',
  QANDA: '/qna_section',
  CHAT_BOT: '/chatbot',
  UPLOAD_YOUTUBE: '/upload_youtube',
  RIDDLE: '/riddles',
  DIAGRAM: '/diagrams',
  JOKES: '/jokes',
  UPLOAD_PDF: '/upload',
  CHAT_QUESTIONS: '/chat_questions',
  MNEMONICS: '/mnemonics',
  CURRENTAFFAIRS:'generate_currentaffairs',
  QUIZ:'generate_quiz',
  IQ:'generate_iq',
  FILTER:'filter',
  TRANSCRIPTION:'/transcriptions',
  TRANSCRIPTIONPDF:'/transcriptionspdf',
} as const;

export const BACK_END_API_URLS = {
  // ORGANIZATION_CODE: '/helpers/check_organization_code',
  USERLOGIN: 'api/auth/sikhshaML/login',
};
