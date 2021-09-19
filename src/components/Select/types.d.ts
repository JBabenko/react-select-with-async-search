type OptionValue = string | number;

export interface SelectOptionItem {
  text: string;
  value: OptionValue;
  disabled?: boolean;
}

export interface SelectProps {
  options: SelectOptionItem[];
  searchable?: boolean;
  placeholder?: string;
  onChange: (value: SelectOption) => void;
  loadOptionsFn: (query: string) => Promise<void>;
}

export type SelectOption = SelectOptionItem | null;

export interface SelectInnerProps {
  searchValue: string;
  onSearchValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  selected: SelectOption;
  searchable: boolean;
}

export type SelectOptionsItemProps = {
  option: SelectOptionItem;
  onClick: (option: SelectOptionItem) => void;
}

export interface SelectOptionsProps {
  options: Array<SelectOptionItem>;
  isOpened: boolean;
  loading: boolean;
  onClickOption: (option: SelectOptionItem) => void;
}
