declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      WEB_PUSH_PUBLIC_KEY: string;
      WEB_PUSH_PRIVATE_KEY: string;
    }
  }
}
