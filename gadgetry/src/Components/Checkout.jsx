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
const defaultCenter = { lat: 31.5497, lng: 74.3436 };


const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [location, setLocation] = useState(defaultCenter);

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    postal: '',
  });

  const handleMapClick = (e) => {
    setLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.error(error);
      alert('Payment failed');
    } else {
      console.log('Shipping Info:', formData);
      console.log('Location:', location);
      console.log('PaymentMethod:', paymentMethod);
      alert('Payment and shipping info submitted!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-12 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 text-center">Checkout</h2>

      {/* Shipping Form */}
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          name="postal"
          placeholder="Postal Code"
          value={formData.postal}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Google Map */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2 mt-6">Select Shipping Location</label>
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

      {/* Stripe Card */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2 mt-6">Card Information</label>
        <div className="p-4 border border-gray-300 rounded-md bg-gray-50 shadow-inner">
          <CardElement options={stripeStyle} />
        </div>
      </div>

      <button
        type="submit"
        disabled={!stripe}
        className="w-full bg-blue-600 text-white py-3 mt-6 rounded-lg hover:bg-blue-700 transition"
      >
        Pay & Place Order
      </button>
    </form>
  );
};

export default CheckoutForm;
