import Nav from './Nav';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './style.scss';
import backgroundImage from './background.jpg';
import { ImSearch } from 'react-icons/im';
import PropType from 'prop-types';
import FavRequest from './FavRequest';
import axios from 'axios';

const HeaderStyled = styled.header`
  background: url(${props => props.backgroundImg});
  background-position: center;
  background-size: cover;
  margin: 0;
  overflow: hidden;
`
const Header = ( {searchValue, changeSearchValue, setphotosData}) => {
  const [backgroundImg] = useState(backgroundImage);
  const [favVisible, setFavVisible] = useState(false);
  const [favRequests] = useState(['Montagne', 'Surf', 'Océan', 'chien', 'Nature', 'Golf']); 
  const [favRequestsUrl, setFavRequestUrl] = useState([]);
  useEffect(() => {
     let data = []
    favRequests.forEach(((favRequest) => {
      axios.get(`https://api.pexels.com/v1/search?query=${favRequest}&per_page=1`, {
            headers:{
              Authorization: '563492ad6f9170000100000105d9c487a507471d9ac025bdd924a596',
            },
          },
          )
            .then((response) => {
              const newItem = {name: favRequest, url:response.data.photos[0].src.small};
              data.push(newItem);
            })
            .then((error) => error)
              
       
    }))
   setFavRequestUrl(data);
   console.log(favRequestsUrl);
  }, []);
 
  return (
    <HeaderStyled backgroundImg= {backgroundImg}>
        <h1 className='header__title'>Ici tu trouveras la photo de tes rêves !!</h1>
        <form className='header__form' >
          <input 
            className='form__input' 
            placeholder="Recherchez des photos" 
            value={searchValue} 
            onChange={(e) => changeSearchValue(e.target.value)} 
            onFocus={()=> (setFavVisible(true))}
            onBlur={() => (setFavVisible(false))}
          />
          { favVisible && <FavRequest  data={favRequestsUrl}/> }
          <button typeof='submit' className='form__button'><ImSearch  className='input__search'/></button>
        </form>
        <Nav />
    </HeaderStyled>
  )
}
Header.propType = {
  searchValue: PropType.string.isRequired,
  changeSearchValue: PropType.func.isRequired,
  setphotosData: PropType.func.isRequired,
}

export default Header