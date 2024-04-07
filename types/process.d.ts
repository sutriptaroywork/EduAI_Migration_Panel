declare namespace NodeJS {
  export interface ProcessEnv {
    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;
    COOKIE_PASSWORD: string;
    NEXT_PUBLIC_IS_SECURE: string;

    NEXT_PUBLIC_HOST: string;
    REVERSE_PROXY_BASE_URL: string;
    NEXT_PUBLIC_SHIKSHA_HOSTNAME: string;
    // NEXT_PUBLIC_SERVER_MANAGEMENT: string;
    // NEXT_PUBLIC_CMA_SERVER_AUTOMATION: string;
  }
}
