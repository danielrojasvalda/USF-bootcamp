import { useState } from 'react';
import axios from 'axios';
import { v1 as uuid } from 'uuid';

export function useFlip() {
  const [isFacingUp, setIsFacingUp] = useState(true);

  const flipCard = () => {
    setIsFacingUp(isUp => !isUp);
  };

  return [isFacingUp, flipCard];
}

export function useAxios(baseURL) {
  const [data, setData] = useState([]);

  const fetchData = async (urlPart) => {
    try {
      const response = await axios.get(`${baseURL}${urlPart}`);
      setData(prevData => [...prevData, { ...response.data, id: uuid() }]);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  return [data, fetchData];
}
