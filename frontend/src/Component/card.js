// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { add_to_cart, remove_from_cart } from './Redux/Action';

function BasicExample({thumbnail,category,title,price,discount,description,cart_btn}) {
  const dispatch=useDispatch();
  const Add=()=>{
      let cart={thumbnail,category,title,price,discount,description};
      dispatch(add_to_cart(cart));
  }

  const Remove=()=>{
    let cart=title;
    dispatch(remove_from_cart(cart));
}
  
  return (
    <Card style={{ width: '18rem', border: '1px solid #e0e0e0', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', zIndex:'0'}}>
  <Card.Img variant="top" className='card-img' src={thumbnail} />
  <Card.Body className='card-body' style={{ padding: '1.5rem' }}>
    <div style={{ marginBottom: '1rem' }}>
      <h6 style={{ fontSize: '0.8rem', color: '#6c757d' }}>{category}</h6>
      <h5 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{title}</h5>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
      <div>
        <h5 style={{ fontSize: '1.2rem', color: '#333' }}>{`$${price}`}</h5>
      </div>
      
    </div>
    <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '1rem' }}>{description}</p>
    <div className='card-button'>
      <button className='card-button-buy' style={{ width: '5rem', height: '2rem', fontSize: '0.6rem', borderRadius: '6px', color: 'white', border: 'none' , margin:'1rem' }}>BUY NOW</button>    
      {cart_btn ? (
            <button className='card-button-card' style={{ width: '5rem', height: '2rem', fontSize: '0.6rem', borderRadius: '6px', color: 'white', border: 'none', margin: '1rem' }} onClick={Remove}>Remove Cart</button>
          ) : (
            <button className='card-button-card' style={{ width: '5rem', height: '2rem', fontSize: '0.6rem', borderRadius: '6px', color: 'white', border: 'none', margin: '1rem' }} onClick={Add} >Add Cart</button>
          )}
    </div>

  </Card.Body>
</Card>

  );
}

export default BasicExample;