import React from 'react';
import { SelectOptionsItemProps } from './types';

export default function SelectOptionsItem({ option, onClick }: SelectOptionsItemProps) {
  return (
    <div
      className="select__option"
      onClick={() => onClick(option)}
    >
      {option.text}
    </div>
  )
}
