import { useAsync } from '@hooks';
import { getMockData } from '@apis';
import { Main } from '@pages';

function App() {
  const { response } = useAsync(getMockData, true);

  return (
    <>
      <Main data={response.data} />
    </>
  );
}

export default App;
