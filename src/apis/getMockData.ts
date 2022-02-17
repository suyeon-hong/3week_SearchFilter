import axios from 'axios';
import { IMockData } from '@types';

const getMockData = async (): Promise<IMockData[]> => {
  const { data } = await axios.get('mock/nutrientList.json');
  return data.list;
};

export default getMockData;
