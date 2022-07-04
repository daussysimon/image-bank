import PropTypes from 'prop-types'
import styled from 'styled-components';


const Picture = ({ src, height, width }) => (
      <img  className='img' src={src.large} alt='current' />
)

Picture.propTypes = {
  src: PropTypes.shape({
    original: PropTypes.string.isRequired
  }).isRequired
}

export default Picture