import './App.css';
import Header from '../Header';
import { useState, useEffect } from 'react';
import  Pictures from '../Pictures'
import axios from 'axios';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [photosData, setPhotosData] = useState([]); 
  const [page, setPage] = useState(1);
  const [galeryLoading, setGaleryLoading] = useState(true);
  const [column1, setColumn1] = useState([]);
  const [column2, setColumn2] = useState([]);
  const [column3, setColumn3] = useState([]);
  useEffect( () => {
    setGaleryLoading(true)
    axios.get(`https://api.pexels.com/v1/curated?per_page=15&page=${page}`, {
      headers:{
        Authorization: '563492ad6f9170000100000105d9c487a507471d9ac025bdd924a596',
      },
    },
    )
      .then((response) => {
        const column1Data = []
        for(let i=0; i<5; i++){
          column1Data.push(response.data.photos[i])
        }
        setColumn1([...column1, ...column1Data]);
        const column2Data = []
        for(let i=5; i<10; i++){
          column2Data.push(response.data.photos[i])
        }
        setColumn2([...column2, ...column2Data]);
        const column3Data = []
        for(let i=10; i<15; i++){
          column3Data.push(response.data.photos[i])
        }
        setColumn3([...column3, ...column3Data]);
      })
      .then((error) => error)
      .finally( () => {
        setGaleryLoading(false);
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return (
    <div className="App" >
      <Header searchValue={searchValue} changeSearchValue={setSearchValue} setPhotoData={setPhotosData}/>
      <Pictures 
        column1={column1} 
        column2={column2} 
        column3={column3} 
        setPage={setPage} 
        page={page} 
        setPhotosData={setPhotosData} 
      />
      { galeryLoading && <div> Loading</div>}
    </div>
  );
}

export default App;
