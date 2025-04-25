import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import React, { useState } from 'react';

const stripeStyle = {
  style: {
    base: {
      fontSize: '16px',
      color: '#32325d',
      fontFamily: 'sans-serif',
      '::placeholder': { color: '#aab7c4' },
    },
    invalid: { color: '#fa755a' },
  },
};

const mapContainerStyle = { width: '100%', height: '300px' };
const defaultCenter = { lat: 28.6139, lng: 77.2090 }; // New Delhi

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [location, setLocation] = useState(defaultCenter);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: card,
    });

    if (error) {
      console.error(error);
      alert('Payment failed');
    } else {
      console.log('PaymentMethod:', paymentMethod);
      alert('Payment successful!');
    }
  };

  const handleMapClick = (e) => {
    setLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-12 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 text-center">Checkout</h2>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">Select Shipping Location</label>
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={location}
            zoom={10}
            onClick={handleMapClick}
          >
            <Marker position={location} />
          </GoogleMap>
        </LoadScript>
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">Card Information</label>
        <div className="p-4 border border-gray-300 rounded-md bg-gray-50 shadow-inner">
          <CardElement options={stripeStyle} />
        </div>
      </div>

      <button
        type="submit"
        disabled={!stripe}
        className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Pay Now
      </button>
    </form>
  );
};

export default CheckoutForm;
