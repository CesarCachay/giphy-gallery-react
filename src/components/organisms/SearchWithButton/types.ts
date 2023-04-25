export type SearchWithButtonProps = {
  onChangeValue: (value: any) => void;
  searchValue: string;
  onSubmit: () => void;
  onClear: () => void;
  placeholder?: string;
  width?: string;
  height?: string;
}