const loader = document.getElementById('loader');
window.addEventListener('load', () => {
  setTimeout(() => loader.style.display = 'none', 800);
});

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light');
  body.classList.toggle('dark');
  themeToggle.textContent = body.classList.contains('light') ? '☀️' : '🌙';
});

const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('show'));
});

const menuData = {
  starters: [
    { name: 'Chicken 65', price: 180, img: 'images/chicken-65.jpg' },
    { name: 'Dragon Chicken', price: 220, img: 'images/dragon-chicken.jpg' },
    { name: 'Paneer Tikka', price: 190, img: 'images/paneer-tikka.jpg' },
    { name: 'Crispy Corn', price: 150, img: 'images/crispy-corn.jpg' },
    { name: 'French Fries', price: 120, img: 'images/french-fries.jpg' }
  ],
  main: [
    { name: 'Butter Chicken', price: 260, img: 'images/butter-chicken.jpg' },
    { name: 'Chicken Curry', price: 240, img: 'images/chicken-curry.jpg' },
    { name: 'Paneer Butter Masala', price: 230, img: 'images/paneer-butter-masala.jpg' },
    { name: 'Veg Fried Rice', price: 170, img: 'images/veg-fried-rice.jpg' },
    { name: 'Chicken Fried Rice', price: 210, img: 'images/chicken-fried-rice.jpg' }
  ],
  biryani: [
    { name: 'Chicken Biryani', price: 250, img: 'images/chicken-biryani.jpg' },
    { name: 'Mutton Biryani', price: 320, img: 'images/mutton-biryani.jpg' },
    { name: 'Egg Biryani', price: 180, img: 'images/egg-biryani.jpg' },
    { name: 'Veg Biryani', price: 170, img: 'images/veg-biryani.jpg' }
  ],
  desserts: [
    { name: 'Gulab Jamun', price: 90, img: 'images/gulab-jamun.jpg' },
    { name: 'Brownie with Ice Cream', price: 140, img: 'images/brownie-ice-cream.jpg' },
    { name: 'Chocolate Lava Cake', price: 160, img: 'images/chocolate-lava-cake.jpg' },
    { name: 'Fruit Salad', price: 110, img: 'images/fruit-salad.jpg' }
  ],
  beverages: [
    { name: 'Fresh Lime Juice', price: 70, img: 'images/fresh-lime-juice.jpg' },
    { name: 'Mango Shake', price: 120, img: 'images/mango-shake.jpg' },
    { name: 'Cold Coffee', price: 110, img: 'images/cold-coffee.jpg' },
    { name: 'Soft Drinks', price: 50, img: 'images/soft-drinks.jpg' }
  ]
};

const menuGrid = document.getElementById('menuGrid');
const tabs = document.querySelectorAll('.tab');
let cart = [];

function renderMenu(category) {
  menuGrid.innerHTML = menuData[category].map(item => `
    <article class="menu-item reveal">
      <img src="${item.img}" alt="${item.name}">
      <div class="info">
        <h3>${item.name}</h3>
        <p>Freshly prepared with premium ingredients</p>
        <div class="price">₹${item.price}</div>
        <button class="add-btn" data-name="${item.name}" data-price="${item.price}">Add to Cart</button>
      </div>
    </article>
  `).join('');
  attachAddEvents();
  observeReveals();
}

function attachAddEvents() {
  document.querySelectorAll('.add-btn').forEach(btn => {
    btn.onclick = () => {
      const name = btn.dataset.name;
      const price = Number(btn.dataset.price);
      const existing = cart.find(item => item.name === name);
      if (existing) existing.qty += 1;
      else cart.push({ name, price, qty: 1 });
      renderCart();
    };
  });
}

function renderCart() {
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');

  if (cart.length === 0) {
    cartItems.innerHTML = '<p>Your cart is empty.</p>';
    cartTotal.textContent = '₹0';
    return;
  }

  let total = 0;
  cartItems.innerHTML = cart.map((item, index) => {
    total += item.price * item.qty;
    return `
      <div class="cart-row">
        <div>
          <strong>${item.name}</strong>
          <p>₹${item.price} x ${item.qty}</p>
        </div>
        <div class="qty-controls">
          <button onclick="changeQty(${index}, -1)">-</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${index}, 1)">+</button>
        </div>
      </div>
    `;
  }).join('');

  cartTotal.textContent = `₹${total}`;
}

window.changeQty = function(index, change) {
  cart[index].qty += change;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  renderCart();
};

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderMenu(tab.dataset.category);
  });
});

renderMenu('starters');

const reserveForm = document.getElementById('reserveForm');
const formMsg = document.getElementById('formMsg');

reserveForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();

  if (name.length < 2) {
    formMsg.textContent = 'Please enter a valid name.';
    return;
  }
  if (!/^[0-9]{10}$/.test(phone)) {
    formMsg.textContent = 'Please enter a valid 10-digit phone number.';
    return;
  }
  if (!email.includes('@')) {
    formMsg.textContent = 'Please enter a valid email address.';
    return;
  }

  formMsg.textContent = 'Reservation request sent successfully!';
  reserveForm.reset();
});

const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function observeReveals() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('active');
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => observer.observe(el));
}

observeReveals();