# Shop Ease

Shop Ease is a frontend ecommerce application built with React. It allows users to browse products, search and filter items, manage a cart and wishlist, and authenticate using the DummyJSON authentication API.

## Features

### Product Browsing

- Product listing page
- Product details page
- Category-based filtering
- Product sorting
- API-based product search
- Pagination
- Debounced search requests

### Cart & Wishlist

- Add products to cart
- Remove products from cart
- Update product quantities
- Add products to wishlist
- Remove products from wishlist
- Persistent cart and wishlist using Redux Persist

### Authentication

- Login using DummyJSON authentication API
- Auth token management
- User profile page
- Persistent authentication state

### User Experience

- Responsive layout
- Loading skeletons
- Toast notifications using React Hot Toast
- Product image viewer
- Client-side routing with React Router

## Tech Stack

- React
- Redux Toolkit
- Redux Persist
- React Router
- Bootstrap
- Vite
- React Hot Toast
- DummyJSON API

## APIs Used

### Products API

Used for:

- Product listing
- Product details
- Search
- Category filtering

### Authentication API

Used for:

- User login
- User profile data

API Provider:
https://dummyjson.com

## Demo Credentials

This project uses DummyJSON authentication.

New account creation is only for demonstration purposes and does not create a permanent user account.

Use the following credentials to test authenticated features:

```js

  {
    idx: 0,
    username: "emilys",
    password: "emilyspass",
  },
  {
    idx: 1,
    username: "michaelw",
    password: "michaelwpass",
  },
  {
    idx: 2,
    username: "sophiab",
    password: "sophiabpass",
  },
  {
    idx: 3,
    username: "jamesd",
    password: "jamesdpass",
  },
  {
    idx: 4,
    username: "emmaj",
    password: "emmajpass",
  },
  {
    idx: 5,
    username: "oliviaw",
    password: "oliviawpass",
  },
  {
    idx: 6,
    username: "alexanderj",
    password: "alexanderjpass",
  },
  {
    idx: 7,
    username: "avat",
    password: "avatpass",
  },
  {
    idx: 8,
    username: "ethanm",
    password: "ethanmpass",
  },
  {
    idx: 9,
    username: "isabellad",
    password: "isabelladpass",
  },


```

Replace the values above with your preferred DummyJSON test account.

## Installation

```bash
git clone <repository-url>

cd shop-ease

npm install

npm run dev
```

## Project Structure

```text
src
│
├── components
├── store
├── services
└── routes
```

## Future Improvements

- Backend integration
- Real user registration
- Order management
- Payment gateway integration
- Admin dashboard

## Disclaimer

This project uses the DummyJSON API for product and authentication data. Authentication and signup functionality are intended for learning and demonstration purposes.
