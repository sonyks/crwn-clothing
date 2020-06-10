import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Gsc4hFcWPoQuWklOWoz0E8urThhF5UZ2XZMM9bByvVWzjysJpMSMKOLMx70ADb66Wft4SLcwUBC3zSRD55ifT8J00eXB4qc2T';

    const onToken = token => {
        console.log(token);
    };

    return (<StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={() => onToken}
        stripeKey={publishableKey}
        />)
}

export default StripeCheckoutButton;