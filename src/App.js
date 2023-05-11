import { useCallback, useState } from 'react';
import axios from '../node_modules/axios/index';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

const App = () => {
  // const [data, setData] = useState();
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);
  // const onClick = async () => {
  //   try {
  //     const response = await axios.get(
  //       'https://newsapi.org/v2/top-headlines?country=kr&category=technology&apiKey=88c2753ff425461ba70edf97a763a6be',
  //     );

  //     setData(response.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  return (
    // <div>
    //   <div>
    //     <button onClick={onClick}>불러오기</button>
    //   </div>
    //   {data && (
    //     <textarea
    //       rows={7}
    //       value={JSON.stringify(data, null, 2)}
    //       readOnly={true}
    //     />
    //   )}
    // </div>
    // <hr></hr>
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default App;
