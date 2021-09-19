import React, { useEffect, useMemo, useRef, useState } from 'react';
import { debounce } from 'lodash';
import SelectInner from './SelectInner';
import SelectOptions from './SelectOptions';
import { SelectOption, SelectOptionItem, SelectProps } from './types';
import './styles.scss';
import arrow from '../../assets/svg/arrow_bottom.svg'
import useClickOutside from '../../hooks/useClickOutside';

export default function Select({
  options,
  searchable,
  placeholder = '',
  onChange,
  loadOptionsFn
}: SelectProps) {
  const [value, setValue] = useState(null as SelectOption);
  const [searchValue, setSearchValue] = useState('');
  const [inputPlaceholder, setInputPlaceholder] = useState(placeholder);
  const [isOpened, setIsOpened] = useState(false);
  const [debouncing, setDebouncing] = useState(false);
  const [loading, setLoading] = useState(false);

  const selectRef = useRef(null);

  const debounceSearch = useMemo(() => debounce(async (query: string) => {
    setLoading(true);
    await loadOptionsFn(query);
    setLoading(false);
    setDebouncing(false);
  }, 500), [loadOptionsFn]);

  useEffect(() => {
    onChange(value);
  }, [onChange, value]);

  const onSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
    if (!value) return;
    setDebouncing(true);
    debounceSearch(value);
  }

  const closeOptions = () => {
    setIsOpened(false);
  }

  const showOptions = () => {
    setIsOpened(true);
  }

  const onClickOption = (option: SelectOptionItem) => {
    setValue(option);
    closeOptions();
    if (searchable) {
      setSearchValue('');
      setInputPlaceholder(option.text);
    }
  }

  useClickOutside(selectRef, closeOptions);

  return (
    <div className="select" ref={selectRef}>
      <div className="select__inner" onClick={() => showOptions()}>
        <SelectInner
          onSearchValueChange={onSearchValueChange}
          selected={value}
          placeholder={inputPlaceholder}
          searchValue={searchValue}
          searchable={searchable || false}
        />
        <img src={arrow} className="select__arrow" alt=""/>
      </div>
      <SelectOptions
        options={options}
        onClickOption={onClickOption}
        isOpened={isOpened}
        loading={loading || debouncing}
      />
    </div>
  )
}
