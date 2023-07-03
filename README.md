# Hotel Booking Application

This is a hotel booking application built using HTML, CSS, JavaScript, React, Node.js, MongoDB, Twilio, and Stripe.

## Features

- Landing page
- Search Hotel page
- Hotel Details page
- Sending messages using Twilio
- Collecting payments using Stripe
- Data storage using MongoDB

## Technologies Used

- HTML
- CSS
- JavaScript
- React
- Node.js
- MongoDB
- Twilio
- Stripe

## Installation

1. Clone the repository:

git clone https://github.com/Adarsh9-dev/Looking

2. Navigate to the project directory:

cd hotel-booking

3. Install the dependencies for the server:

npm install

4. Install MongoDB and make sure it's running on your local machine or provide a MongoDB connection URL in the `.env` file.

5. Navigate to the client directory:

cd client

6. Install the dependencies for the client:

npm install

7. Start the development server:

npm start

### Deployed on https://lookingcom.netlify.app



## Configuration

1. Rename the `.env.example` file to `.env` in both the server and client directories.

2. In the server `.env` file, add your MongoDB connection URL, Twilio account SID, auth token, and Twilio phone number:

- MONGODB_URI=your_mongodb_connection_url
- TWILIO_ACCOUNT_SID=your_twilio_account_sid
- TWILIO_AUTH_TOKEN=your_twilio_auth_token
- TWILIO_PHONE_NUMBER=your_twilio_phone_number

3. In the client `.env` file, add your Stripe publishable key:

REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

## Usage

1. Register an account and log in to the hotel booking application.

2. Explore the landing page to get an overview of the available hotels.

3. Use the search functionality on the search hotel page to find hotels based on location, date, or other criteria.

4. View the details of a specific hotel on the hotel details page.

5. Make a booking and complete the payment using the Stripe payment gateway.

6. Send a message to your mobile on successful booking. The messaging feature powered by Twilio.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please open an issue or submit a pull request.
