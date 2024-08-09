const items = [
    {
        name: "Kata v2 miror",
        price: "Trex-Dough-Mamous",
        imageUrl: "https://images.app.goo.gl/QURgHWarfYWDDJoj6",
        description: "A rare and powerful sword.",
      },
      {
        name: "1 trail",
        price: "buddha",
        imageUrl: "https://via.placeholder.com/300x200",
        description: "An epic fruit with special abilities.",
      },
      {
        name: "2trail",
        price: "t-rex",
        imageUrl: "https://via.placeholder.com/300x200",
        description: "A common fruit with basic powers.",
      },
      {
        name: "3trail",
        price: "dough",
        imageUrl: "https://via.placeholder.com/300x200",
        description: "A common fruit with basic powers.",
      },
      {
        name: "Max trail",
        price: "leo",
        imageUrl: "https://via.placeholder.com/300x200",
        description: "A common fruit with basic powers.",
      },
      {
        name: "500lvl",
        price: "shadow",
        imageUrl: "https://via.placeholder.com/300x200",
        description: "A common fruit with basic powers.",
      },
      {
        name: "1000lvl",
        price: "venom",
        imageUrl: "https://via.placeholder.com/300x200",
        description: "A common fruit with basic powers.",
      },
      {
        name: "1500lvl",
        price: "mamous",
        imageUrl: "https://via.placeholder.com/300x200",
        description: "A common fruit with basic powers.",
      },
      {
        name: "2000lvl",
        price: "t-rex or dough",
        imageUrl: "https://via.placeholder.com/300x200",
        description: "A common fruit with basic powers.",
      },
      {
        name: "Max lvl",
        price: "dragon or leo or kitsuni",
        imageUrl: "https://via.placeholder.com/300x200",
        description: "A common fruit with basic powers.",
      },
      {
        name: "guitar brook",
        price: "dough",
        imageUrl: "https://via.placeholder.com/300x200",
        description: "A common fruit with basic powers.",
      },
      {
        name: "Zoro sword",
        price: "leo",
        imageUrl: "https://via.placeholder.com/300x200",
        description: "A common fruit with basic powers.",
      },
      {
        name: "Cursed duel katana",
        price: "leo",
        imageUrl: "https://via.placeholder.com/300x200",
        description: "A common fruit with basic powers.",
      },
      {
        name: "frag 5000",
        price: "buddha",
        imageUrl: "https://via.placeholder.com/300x200",
        description: "A common fruit with basic powers.",
      },
      {
        name: "frag 10000",
        price: "soul or venom",
        imageUrl: "https://via.placeholder.com/300x200",
        description: "A common fruit with basic powers.",
      },
      {
        name: "frag 15000",
        price: "dough",
        imageUrl: "https://via.placeholder.com/300x200",
        description: "A common fruit with basic powers.",
      },
      {
        name: "money 5M",
        price: "blizzard ",
        imageUrl: "https://via.placeholder.com/300x200",
        description: "A common fruit with basic powers.",
      },
      {
        name: "money 10M",
        price: "control",
        imageUrl: "https://via.placeholder.com/300x200",
        description: "A common fruit with basic powers.",
      },
      {
        name: "money 15M",
        price: "portal and rumble",
        imageUrl: "https://via.placeholder.com/300x200",
        description: "A common fruit with basic powers.",
      },
      {
        name: "money 20M",
        price: "buddha and soul",
        imageUrl: "https://via.placeholder.com/300x200",
        description: "A common fruit with basic powers.",
      },
      {
        name: "money 30M",
        price: "dough",
        imageUrl: "https://via.placeholder.com/300x200",
        description: "A common fruit with basic powers.",
      },
      {
        name: "money 50M",
        price: " kitsuni.leo or dragon",
        imageUrl: "https://via.placeholder.com/300x200",
        description: "A common fruit with basic powers.",
      },
    
];

let cart = [];
let totalPrice = 0;

function renderItems() {
    const itemsContainer = document.getElementById('items');
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.innerHTML = `
            <h2>${item.name}</h2>
            <p>Price: ${item.price} </p>
            <button onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
        `;
        itemsContainer.appendChild(itemDiv);
    });
}

function addToCart(name, price) {
    cart.push({ name, price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';
    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ${item.price} Coins`;
        cartItemsList.appendChild(listItem);
    });
    document.getElementById('total-price').textContent = totalPrice;
}

function checkout() {
    const message = document.getElementById('message');
    message.textContent = `Thank you for your purchase! Total: ${totalPrice} Coins.`;
    cart = [];
    totalPrice = 0;
    updateCart();
}

document.addEventListener('DOMContentLoaded', () => {
    renderItems();
});
