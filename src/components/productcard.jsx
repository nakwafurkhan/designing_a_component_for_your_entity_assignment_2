import React from 'react';
import ViewProductButton from './button.jsx'; // Adjust the path if necessary

const Productcard = () => {
  // Static dummy data for the product details
  const productImage =
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fidestiny.in%2Fproduct%2Fiphone-16-pro%2F&psig=AOvVaw3kc04A11IODE1avT2ywh-V&ust=1740801957603000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJD56ee-5YsDFQAAAAAdAAAAABAE';
  const productName = 'i Phone 16 Pro';
  const price = '₹1,19,000';

  // Inline styling for the product card (optional)
  const cardStyle = {
    width: '300px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  };

  const titleStyle = {
    fontSize: '18px',
    margin: '16px 0 8px',
  };

  const priceStyle = {
    fontSize: '16px',
    color: '#333',
    marginBottom: '16px',
  };

  return (
    <div style={cardStyle}>
      <img src={productImage} alt="Product" style={imageStyle} />
      <h2 style={titleStyle}>{productName}</h2>
      <p style={priceStyle}>{price}</p>
      <ViewProductButton />
    </div>
  );
};

export default Productcard;
