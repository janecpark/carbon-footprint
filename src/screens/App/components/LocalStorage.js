import React, { useEffect, useState } from 'react';

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
