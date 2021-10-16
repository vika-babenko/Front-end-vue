let app = new Vue({
    el: '#app',
    data: {
        product: "Blouse",
        brand: 'ZARA',
        selectedVariant: 0,
        image: "./assets/green_blouse.jpg",
        inStock: true,
        inventory: 20,
        details: ['75% cotton', '25% polyester', 'gender: female'],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: "./assets/green_blouse.jpg"
                
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: "./assets/blue_blouse.jpg"
                
            }

        ],
        cart: 0
        
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        updateProduct(variantImage){
            this.image = variantImage;
            
        }
    },
    computed: {
        title(){
            return this.brand + ' ' + this.product;
        }
    }
})
