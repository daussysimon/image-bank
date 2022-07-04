import './style.scss';



const FavRequest = ({data}) =>{
  
  return(
  <section className="favReq__container">
    <ul className="favReq__list" >
      {data.map( (element) => (
        <li key={element.name} className='favReq__item'><img className='favReq__img' src={element.url} alt='favItem'/><button className='favReq__link'>{element.name}</button></li>
      )
      )}
    </ul>
  </section>
  )
}
export default FavRequest;

