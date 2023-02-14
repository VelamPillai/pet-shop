import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm'
import {loadStripe} from '@stripe/stripe-js';
import { useEffect, useState } from 'react';


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51MZVC9Do7mxngBje4154bKmOLZpqKDzjZjUaR67v5anL1gVV2T19beq5Lh58XZjHVyTyY1S5lrcPQHebaZ2InQeS00DKXD2VmH');


export default function StripeContainer({clientSecret}) {
 
  
  console.log('clientSecret:', clientSecret);
    
  return (
    <>
      {clientSecret ?  <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm />
    </Elements> : <h1>loading ....</h1>} 
    </>
   
  );
};