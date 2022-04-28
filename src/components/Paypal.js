import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useGlobalState } from "./GlobalState";

export default function Paypal(total, clearCart) {

    let amount= total.total.toString()
    console.log(amount)

    const [ state, dispatch ] = useGlobalState();

    function clearCart(){
        dispatch(state.cart = [])
        localStorage.clear();
    }

    return (
        <PayPalScriptProvider options={{ "client-id": "test" }}>
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: amount,
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        clearCart();
                    });
                }}
            />
        </PayPalScriptProvider>
    );
}