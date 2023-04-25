export type GifCardType = {
  title: string;
  id: string;
  picture: string
  url: string;
  isFavorite: boolean;
  handleAddToFavorites: (data: any) => void;
}
