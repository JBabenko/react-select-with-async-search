import React, { useState } from 'react';
import fetchColors from './api/fetchColors';
import { Colours } from './api/types';
import Select from './components/Select';
import { SelectOption } from './components/Select/types';

export default function App() {
  const [selected, setSelected] = useState(null as SelectOption);
  const [colors, setColors] = useState([] as Colours);

  const onSelectChange = (value: SelectOption) => {
    setSelected(value);
  }

  const loadColors = async (query: string) => {
    try {
      console.log(query);
      const data = await fetchColors(query);
      console.log(data);
      setColors(data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="App">
      <Select
        options={colors}
        searchable
        placeholder="Select..."
        onChange={onSelectChange}
        loadOptionsFn={loadColors}
      />
      <hr/>
      {selected ? `Выбрано: ${selected.text}` : 'Ничего не выбрано...'}
    </div>
  );
}
