declare interface Env {
  readonly NODE_ENV: string;
  readonly YOUTUBE_API_KEY: string;
  readonly YOUTUBE_CHANNEL_ID: string;
  [key: string]: string | undefined;
}

declare interface ImportMeta {
  readonly env: Env;
}
