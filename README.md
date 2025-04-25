Gadgetry - Modern E-commerce Store

A fully functional e-commerce platform built with React, Redux, Node.js, MongoDB, Stripe for payments, and Google Maps for shipping integration. Designed for selling electronic gadgets like phones, laptops, and accessories.

Features

- Product Listing & Filtering by Categories
- Dynamic Search Bar
- Product Detail Pages with Add-to-Cart
- Cart Management (Add/Remove, Quantity)
- User Login & Signup (with roles)
- Admin Access for Adding Products
- Checkout with Stripe Payment
- Shipping location selection using Google Maps
- State management with Redux Toolkit
- Responsive UI with Tailwind CSS

Project Structure

/src
  /backend
    /config       # MongoDB config
    /models       # Mongoose Schemas
    /routes       # Express Routes
    /controllers  # Logic Controllers
    /operations   # DB Logic Functions
  /components      # React Components
  /redux           # Redux Toolkit Slices
  App.jsx
  main.jsx

Tech Stack

- Frontend: React, Redux Toolkit, Tailwind CSS
- Backend: Express.js, Node.js, MongoDB (Mongoose)
- Payments: Stripe
- Maps: Google Maps API
- State: Redux Toolkit

Getting Started

1. Clone the Repo

   git clone https://github.com/yourusername/gadgetry.git
   cd gadgetry

2. Install Frontend & Backend Dependencies

   # Install frontend
   npm install

   # Navigate to backend folder
   cd src/backend
   npm install

3. Setup MongoDB

   - Ensure MongoDB is running locally or use MongoDB Atlas
   - Default DB URL used:
     mongodb://localhost:27017/gadgetrydb

4. Setup Google Maps API Key

   - Get your API key from Google Cloud Console
   - Replace "YOUR_GOOGLE_MAPS_API_KEY" in CheckoutForm.js

5. Setup Stripe

   - Use your Stripe Publishable Key in:
     const stripePromise = loadStripe('your_stripe_key_here');

6. Run the App

   # In backend folder
   node db.js

   # In root folder
   npm run dev

Test Accounts

You can use any email/password combo for testing (no actual authentication encryption for simplicity).

Stripe Test Card

Card Number: 4242 4242 4242 4242
Exp: 12/34
CVC: 123

Notes

- You can switch to secure auth using bcrypt/JWT
- Add more roles or order history as needed
- For production, hide API keys using environment variables


License

This project is licensed under the MIT License.
