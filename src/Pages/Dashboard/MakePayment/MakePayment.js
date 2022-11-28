import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);


const MakePayment = () => {

    const order = useLoaderData();
    const navigation = useNavigation();
    const { productName, price } = order;

    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    return (
        <div className='p-8'>
            <h1 className='text-xl font-bold'>Payment for {productName}</h1>
            <p className='py-2'>Please pay <strong>$ {price}</strong> for {productName}</p>
            <Elements stripe={stripePromise}>
                <CheckoutForm
                    order={order} />
            </Elements>
        </div>
    );
};

export default MakePayment;