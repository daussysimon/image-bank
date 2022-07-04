import PropTypes from 'prop-types';
import Picture from './Picture'
import './style.scss';
import  styled from 'styled-components';
import { useRef } from 'react';
import { useEffect } from 'react';

const ImageContainer = styled.div`
  border-radius: 5px;
  margin-bottom: 20px
`
const PictureList = styled.section`
  display: flex;
  margin: 20px auto;
  max-width: 1500px
`
const Pictures = ({ column1,column2, column3, setPage, page,}) => {
  const containerRef = useRef(null);
  const handleScroll = (e) => {
    if(e.currentTarget.scrollY + 1200 >= containerRef.current.scrollHeight &&  e.currentTarget.scrollY+1200  <= containerRef.current.scrollHeight+100){
      
      setTimeout(() => {
        setPage(page + 1);
      }, 900);
    }
  }

  useEffect( () => {
    window.addEventListener('scroll', handleScroll);
    return( () => ( window.removeEventListener('scroll', handleScroll)))
  }, [page]);

 
  
  return (  
    <PictureList ref={containerRef}>
      <div className='img__column'>
        {column1.map((picture) => (
          <ImageContainer key={picture.id} className='image__container' >
            <Picture  {...picture}/>
          </ImageContainer>
        ))}
      </div>
      <div className='img__column'>
        {column2.map((picture) => (
          <ImageContainer key={picture.id} className='image__container' >
            <Picture  {...picture}/>
          </ImageContainer>
        ))}
      </div>
      <div className='img__column'>
        {column3.map((picture) => (
          <ImageContainer key={picture.id} className='image__container' >
            <Picture  {...picture}/>
          </ImageContainer>
        ))}
      </div>
    </PictureList>
  )
}
Pictures.propTypes = {
 column1: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  })).isRequired,
  column2: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  })).isRequired,
  column3: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  })).isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,

}
export default Pictures;