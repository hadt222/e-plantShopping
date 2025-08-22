import './Checkout.css';

const Checkout = ({ onHomeClick }) => {
  const handleHome = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  return (
    <div className="checkout-container">
      <h2>Thank you for your purchase!</h2>
      <p>Your plants will be delivered soon.</p>
      <button className="get-started-button" onClick={handleHome}>
        Back to Home
      </button>
    </div>
  );
};

export default Checkout;
