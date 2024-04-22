var app = new Vue({
    el: "#article",
    data: {
        products: [
            {
                id: 1, title: "Yellow Apple", short_text: "Sweet and Juicy", image: "images/YellowApple.png", desc: {
                    plant: {
                        p1: "Yellow Apples have a strong sweet taste.",
                        p2: "Very high productivity with good fruit setting.",
                        p3: "Early maturing variety."
                    },
                    fruit: {
                        f1: "Shelf life of the fruit is 2.5-3 months.",
                        f2: "Nice shiny attractive deep yellow color.",
                        f3: "Average fruit size: 140-160 grams."
                    },
                    cycle: { spring: "Spring", summer: "Summer" },
                    color: "Yellow"
                }
},
            {
                id: 2, title: "Red Apple", short_text: "Tart with a Sweet Undertone", image: "images/redApple.jpg", desc: {
                    plant: {
                        p1: "Red Apples have a crisp texture with a sweet undertone.",
                        p2: "High productivity with good fruit setting.",
                        p3: "Early maturing variety."
                    },
                    fruit: {
                        f1: "Shelf life of the fruit is 2.5-3 months.",
                        f2: "Nice shiny attractive deep red color.",
                        f3: "Average fruit size: 140-160 grams."
                    },
                    cycle: { spring: "Spring", summer: "Summer" },
                    color: "Red"
                } },
            {
                id: 3, title: "Green Apple", short_text: "Tart-Sweet and Crisp", image: "images/greenApple1.png", desc: {
                    plant: {
                        p1: "Green Apples have a refreshing tart-sweet taste.",
                        p2: "High productivity with good fruit setting.",
                        p3: "Early maturing variety."
                    },
                    fruit: {
                        f1: "Shelf life of the fruit is 2.5-3 months.",
                        f2: "Nice shiny attractive green color.",
                        f3: "Average fruit size: 140-160 grams."
                    },
                    cycle: { spring: "Spring", summer: "Summer" },
                    color: "Green"
                }
},
            {
                id: 4, title: "Fuji Apple", short_text: "Sweet with Rich Flavor", image: "images/yablonyafudzhi.png", desc: {
                    plant: {
                        p1: "Fuji Apples have a sweet flavor with a rich undertone.",
                        p2: "High productivity with good fruit setting.",
                        p3: "Early maturing variety."
                    },
                    fruit: {
                        f1: "Shelf life of the fruit is 2.5-3 months.",
                        f2: "Nice shiny attractive yellow-red color.",
                        f3: "Average fruit size: 140-160 grams."
                    },
                    cycle: { spring: "Spring", summer: "Summer" },
                    color: "Yellow-Red"
                }
},
            {
                id: 5, title: "Golden Apple", short_text: "Tender and Fragrant", image: "images/goldenApple.jpg", desc: {
                    plant: {
                        p1: "Golden Apples have a tender sweet taste.",
                        p2: "High productivity with good fruit setting.",
                        p3: "Early maturing variety."
                    },
                    fruit: {
                        f1: "Shelf life of the fruit is 2.5-3 months.",
                        f2: "Nice shiny attractive golden color.",
                        f3: "Average fruit size: 140-160 grams."
                    },
                    cycle: { spring: "Spring", summer: "Summer" },
                    color: "Golden"
                } }
        ],
        product: [],
        btnVisible: 0

    },
    mounted: function () {
        this.getProduct();
        this.checkInCart();
    },
    methods: {
        getProduct: function () {
            if (window.location.hash) {
                var id = window.location.hash.replace('#', '');
                if (this.products && this.products.length > 0) {
                    for (i in this.products) {
                        if (this.products[i] && this.products[i].id && id == this.products[i].id) this.product = this.products[i];
                    }
                }
            }
        },
        addToCart: function (id) {
            var cart = [];
            if (window.localStorage.getItem('cart')) {
                cart = window.localStorage.getItem('cart').split(',');
            }

            if (cart.indexOf(String(id)) == -1) {
                cart.push(id);
                window.localStorage.setItem('cart', cart.join());
                this.btnVisible = 1;
            }
        },
        checkInCart: function () {
            if (this.product && this.product.id && window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id)) != -1) this.btnVisible = 1;
        }
    },

});
