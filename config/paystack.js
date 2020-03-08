const paystack = (request) => {
  const MySecretKey = 'Bearer sk_test_52a2165c532d264711c702ea2472e54f753ff51f';

   const initializePayment = (form, mycallback) => {
      const option = {
          url : 'https://api.paystack.co/transaction/initialize',
          headers : {
              authorization: MySecretKey,
              'content-type': 'application/json',
              'cache-control': 'no-cache'
           },
           form
        }
        const callback = (error, response, body)=>{
            return mycallback(error, body);
        }
        request.post(option,callback);
    }
    const verifyPayment = (ref,mycallback) => {
        const option = {
            url : 'https://api.paystack.co/transaction/verify/'+encodeURIComponent(ref),
            headers : {
                authorization: MySecretKey,
                'content-type': 'application/json',
                'cache-control': 'no-cache'
           }
        }
        const callback = (error, response, body)=>{
            return mycallback(error, body);
        }
        request(option,callback);
    }
    return {initializePayment, verifyPayment};
  }
  module.exports = paystack
