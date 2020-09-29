import { useEffect, useState } from 'react';

/** Function to set and remove local storage values */

const useLocalStorage = (key, firstVal = null) => {
  const initialVal = localStorage.getItem(key) || firstVal;
  const [item, setItem] = useState(initialVal);

  useEffect(() => {
    if (!item) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, item);
    }
  }, [key, item]);
  return [item, setItem];
};

export default useLocalStorage;
