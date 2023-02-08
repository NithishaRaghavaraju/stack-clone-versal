// import RazorpayCheckout from 'react-native-razorpay';
// // react-native link razorpay
// export const onPress=() => {
//   var options = {
//     description: 'Credits towards consultation',
//     image: 'https://i.imgur.com/3g7nmJC.png',
//     currency: 'INR',
//     key: 'svacLMAC4P6facUSWGxAVefL', // Your api key
//     amount: '5000',
//     name: 'foo',
//     prefill: {
//       email: 'void@razorpay.com',
//       contact: '9191919191',
//       name: 'Razorpay Software'
//     },
//     theme: {color: '#F37254'}
//   }
//   RazorpayCheckout.open(options).then((data) => {
//     // handle success
//     console.log(data)
//     alert(`Success: ${data.razorpay_payment_id}`);
//   })
//   // .catch((error) => {
//   //   // handle failure
//   //   alert(`Error: ${error.code} | ${error.description}`);
//   // });
// }
import logoo from "../../assets/logo.png"
const loadScript = (src) => {
  return new Promise((resovle) => {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => {
      resovle(true);
    };

    script.onerror = () => {
      resovle(false);
    };

    document.body.appendChild(script);
  });
};
export const displayRazorpay = async (amount) => {
  const res = await loadScript(
    "https://checkout.razorpay.com/v1/checkout.js"
  );

  if (!res) {
    alert("You are offline... Failed to load Razorpay SDK");
    return;
  }

  const options = {
    key: "rzp_test_VdGdvprTKB8u1w",
    currency: "INR",
    amount:  amount * 100,
    name: "Payment For StackOverFlow Subcription",
    description: "Thanks for purchasing",
    image:logoo,

    handler: function (response) {
      alert(response.razorpay_payment_id);
      alert("Payment Successfully");
    },
    prefill: {
      name: "code with akky",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};