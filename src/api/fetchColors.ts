import { Colours } from './types';
import { colourOptions } from '../data/colors';

export default function fetchColors(query: string): Promise<Colours> {
  const promise: Promise<Colours> = new Promise((resolve) => {
    setTimeout(() => {
      const filteredColours: Colours = colourOptions.filter((colour) => {
        return colour.text.toLowerCase().includes(query.toLowerCase());
      });
      resolve(filteredColours);
    }, 500);
  });

  return promise;
}