import { useAsync } from '@hooks';
import { getMockData } from '@apis';

function App() {
  const { response } = useAsync(getMockData, true);

  console.log(response.data);

  return <></>;
}

export default App;
