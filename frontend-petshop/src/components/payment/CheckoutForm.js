import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,

      confirmParams: {
        return_url: "http://localhost:3000/confirmPayment",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      
    }
  };

  return (
    
    <form
      onSubmit={handleSubmit}
      className="md:w-[1000px] flex justify-center items-center flex-col m-5"
    >
      <PaymentElement />
      <button disabled={!stripe} className="bg-red-500 rounded-lg text-[20px] text-white m-5 p-1">
        Submit
      </button>
      </form>
      
  );
};

export default CheckoutForm;
