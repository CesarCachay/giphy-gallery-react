export type GifType = {
  id: string;
  title: string;
  picture: string;
  url: string;
}

export type ErrorStateType = {
  hasError: boolean;
  message: null | string;
}