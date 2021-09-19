import React from 'react';
import { SelectInnerProps } from './types';

export default function SelectInner({
  searchValue,
  onSearchValueChange,
  placeholder,
  selected,
  searchable,
}: SelectInnerProps) {
  return searchable
    ? (
      <input
        className="select__value select__input"
        placeholder={placeholder}
        type="text"
        value={searchValue}
        onChange={onSearchValueChange}
      />
    )
    : (
      <>
      <span
        className={`select__value ${selected ? '' : 'select__value_empty'}`}
      >
        {selected ? selected.text : placeholder}
      </span>
      </>
    )
} 