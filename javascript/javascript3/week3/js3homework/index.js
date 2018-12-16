console.log("testing");


function createProduct(name, price, quantity, color, make, model) {
    return {
        name: name,
        price: price,
        quantity: quantity,
        color: color,
        make: make,
        model: model
    }
}

const request = require("request");
let userDetails;


function createShoppingCart(products) {
    return {
        addProduct: function(product) {

            products.push(product);
            // Implement functionality here
        },
        removeProduct: function(product) {

            products.pop(product);
            // Implement functionality here
        },
        getTotal: function() {

            return price;
            // Implement functionality here
        },
        renderProducts: function() {
            // Implement functionality here
        },
        getUser: function() {
            //setting URL and haders for request

            const options = {
                 url : "https://jsonplaceholder.typicode.com/users/1",
                 headers : {
                     "User-Agent" : "request"
                 }
            };

            //returning new promise

            return new Promise(function(resolve, reject){
                request.get(options, function(err, resp, body){
                    if(err){
                        reject(err);
                    }else{
                            resolve(JSON.parse(body));
                        }
                    })
                })
            }            
            
            // Implement functionality here
        }
    }


function main() {
    var getUserPromise = initialize();
    getUserPromise.then(function(result) {
        userDetails = result;
        console.log("Initialized user details");
        // Use user details from here
        console.log(userDetails)
    }, function(err) {
        console.log(err);
    })
}

const flatscreen = createProduct('flat-screen', 5000);
const shoppingCart = createShoppingCart([flatscreen]);

console.log(flatscreen);



