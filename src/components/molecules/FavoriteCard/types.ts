export type FavoriteCardType = {
  title: string;
  id: string;
  picture: string
  url: string;
  removeFromFavorites: (id: string) => void;
}
