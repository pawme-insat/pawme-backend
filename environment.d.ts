declare global {
  namespace NodeJS {
    interface ProcessEnv {
      POSTGRES_CONNECTION_STRING: string;
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      PWD: string;
    }
  }
}

export {};
