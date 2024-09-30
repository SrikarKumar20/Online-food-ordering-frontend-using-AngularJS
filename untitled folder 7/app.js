var app = angular.module('foodApp', []);

app.controller('FoodController', function() {
    var vm = this;

    // Menu items (sample data)
    // Menu items (updated with real food images)
// Menu items with images from external websites
vm.menuItems = [
    { 
        name: 'Margherita Pizza', 
        description: 'Classic Margherita pizza with fresh basil and mozzarella cheese', 
        price: 599, 
        image: 'Screenshot 2024-09-18 at 2.10.47 PM.png'
    },
    { 
        name: 'Cheeseburger', 
        description: 'Grilled beef patty topped with cheddar cheese, lettuce, and tomato', 
        price: 299, 
        image: 'Screenshot 2024-09-18 at 2.02.43 PM.png'
    },
    { 
        name: 'Spaghetti Carbonara', 
        description: 'Creamy carbonara sauce with crispy pancetta and Parmesan', 
        price: 399, 
        image: 'Screenshot 2024-09-18 at 2.01.03 PM.png'
    },
    { 
        name: 'Caesar Salad', 
        description: 'Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan', 
        price: 199, 
        image: 'Screenshot 2024-09-18 at 2.06.16 PM.png'
    },
    { 
        name: 'Chicken Alfredo', 
        description: 'Grilled chicken with creamy Alfredo sauce over fettuccine', 
        price: 499, 
        image: 'Screenshot 2024-09-18 at 2.08.06 PM.png'
    },
    { 
        name: 'Vegetarian Wrap', 
        description: 'A healthy wrap filled with roasted vegetables and hummus', 
        price: 399, 
        image: 'Screenshot 2024-09-18 at 2.09.21 PM.png'
    }
];




    // Order items
    vm.orderItems = [];

    // Add item to order
    vm.addToOrder = function(item) {
        vm.orderItems.push(item);
    };

    // Remove item from order
    vm.removeFromOrder = function(item) {
        var index = vm.orderItems.indexOf(item);
        if (index !== -1) {
            vm.orderItems.splice(index, 1);
        }
    };

    // Calculate total price
    vm.getTotal = function() {
        var total = 0;
        for (var i = 0; i < vm.orderItems.length; i++) {
            total += vm.orderItems[i].price;
        }
        return total.toFixed(2);
    };

    // Place order
    vm.placeOrder = function() {
        alert('Order placed successfully!');
        vm.orderItems = []; // Clear the order
    };
});
