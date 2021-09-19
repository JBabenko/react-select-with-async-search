import React from 'react';
import SelectOptionsItem from './SelectOptionsItem';
import { SelectOptionsProps } from './types';

export default function SelectOptions({ options, isOpened, onClickOption, loading }: SelectOptionsProps) {
  
  const optionsList = options.map(option => (
    <SelectOptionsItem key={option.value} option={option} onClick={onClickOption}/>
  ));

  const dummyText = loading ? 'Загрузка...' : 'Нет данных';

  const optionsDummy = (
    <div className="select__dummy">{dummyText}</div>
  )

  const optionsWindow = optionsList.length && !loading
    ? optionsList
    : optionsDummy;
  
  return (
    <div
      className={`select__options${isOpened ? ' select__options_opened' : ''}`}
    >
      {optionsWindow}
    </div>
  )
}
