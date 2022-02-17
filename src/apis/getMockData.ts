import axios from 'axios';

const getMockData = async <T>(): Promise<T> => {
  const { data } = await axios.get('mock/nutrientList.json');
  return data.list;
};

export default getMockData;
