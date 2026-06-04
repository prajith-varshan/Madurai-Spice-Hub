# 🍛 Madurai Spice Hub

<p align="center">
  <img src="images/hero-food.jpg" alt="Madurai Spice Hub Logo" width="200"/>
</p>

<p align="center">
  <strong>A premium restaurant website with modern design, shopping cart, and interactive features</strong>
</p>

<p align="center">
  <a href="https://github.com/yourusername/madurai-spice-hub"><img src="https://img.shields.io/badge/Made%20with-HTML%2FCSS%2FJavaScript-orange" alt="Built with HTML/CSS/JavaScript"></a>
  <a href="https://github.com/yourusername/madurai-spice-hub/stargazers"><img src="https://img.shields.io/github/stars/yourusername/madurai-spice-hub" alt="GitHub stars"></a>
  <a href="https://github.com/yourusername/madurai-spice-hub/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue" alt="License"></a>
</p>

---

## 📖 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Layout Overview](#-layout-overview)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Screenshots](#-screenshots)
- [Live Demo](#-live-demo)
- [How to Customize](#-how-to-customize)
- [Credits](#-credits)
- [License](#-license)

---

## 🎯 About

**Madurai Spice Hub** is a modern, responsive restaurant website built with HTML, CSS, and JavaScript. It showcases a premium dining experience with a dark/gold theme, interactive menu system, shopping cart functionality, dark/light mode toggle, and smooth scroll animations.

This project is designed for food businesses who want to:
- Display their menu online
- Accept online orders via cart
- Allow table reservations
- Show gallery and reviews
- Provide contact information and location

---

## ✨ Features

### Core Features
- 🎬 **Video Hero Background** - Dark overlay with slow-motion food video
- 🛒 **Shopping Cart System** - Add multiple items with quantity controls
- 🌓 **Dark/Light Mode Toggle** - Easy theme switching
- 📱 **Fully Responsive Design** - Works on mobile, tablet, and desktop
- 🎨 **Interactive Menu Cards** - Hover effects with zoom and ingredient display
- 📍 **Google Maps Integration** - Embedded restaurant location
- 📸 **Instagram Feed Section** - Display latest food photos
- 🔄 **Scroll Animations** - Elements fade in on scroll
- 🔝 **Back-to-Top Button** - Appears on scroll
- ⚡ **Fast Loading** - Optimized images and clean code

### Additional Features
- ✅ Form validation for reservations
- 📞 WhatsApp integration for quick contact
- 🌟 Customer rating display (4.8/5)
- 📊 Stats section (menu items, happy customers, etc.)
- 🎯 SEO-friendly meta tags

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic structure and SEO |
| **CSS3** | Styling, animations, and responsive design |
| **JavaScript (ES6)** | Interactivity, cart logic, and scroll effects |
| **Google Fonts** | Poppins font family |
| **Google Maps** | Location embed |
| **Unsplash** | Free food images (commercial use allowed) [web:1] |

---

## 📐 Layout Overview

The website follows this exact section order:

1. **Hero** - Video background with tagline and CTAs
2. **Stats** - Restaurant statistics (50+ items, 10k+ customers)
3. **Featured Dishes** - Chef's specials
4. **About** - Restaurant story
5. **Signature Dish** - Must-try plate
6. **Menu** - Full menu with categories and cart
7. **Why Choose Us** - Unique selling points
8. **Testimonials** - Customer reviews
9. **Gallery** - Instagram feed + food photos
10. **Reservation** - Table booking form
11. **Payment** - Payment options
12. **Contact** - Phone, WhatsApp, Google Maps
13. **Footer** - Social links and copyright

---

## 🚀 Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code recommended)
- Git (optional, for version control)

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/madurai-spice-hub.git
cd madurai-spice-hub
```

2. **Open the project**
```bash
# VS Code
code .

# Or open index.html directly in browser
```

3. **Install images and video**
- Download food images from Unsplash (free for commercial use) [web:1]
- Save them in the `images/` folder with exact filenames listed below
- Add a video file named `hero-video.mp4` for the hero background

---

## 📖 Usage

### Running Locally
Simply open `index.html` in your browser:

```bash
# Double-click index.html
# OR use a local server
npx serve
```

### Customizing Content

**Change restaurant details:**
- Edit `index.html` to update phone number, address, and WhatsApp link
- Modify menu items in `js/script.js` under `menuData`
- Update colors in `css/style.css` under `:root`

**Add your own images:**
1. Save images in `images/` folder
2. Use exact filenames from the list below
3. Replace placeholder images

**Deploy to GitHub Pages:**
```bash
# Settings > Pages > Source: main branch > Save
# Your site will be live at: https://yourusername.github.io/madurai-spice-hub
```

---

## 📁 Project Structure

---

## 🖼️ Screenshots

### Desktop View
<p align="center">
  <img src="screenshots/desktop-hero.png" alt="Desktop Hero Section" width="600"/>
</p>

### Mobile View
<p align="center">
  <img src="screenshots/mobile-menu.png" alt="Mobile Menu" width="300"/>
</p>

---

## 🌐 Live Demo

**Deployed URL:** [https://yourusername.github.io/madurai-spice-hub](https://yourusername.github.io/madurai-spice-hub)

*(Replace with your actual GitHub Pages URL after deployment)*

---

## 🔧 How to Customize

### 1. Change Colors
Edit `css/style.css`:

```css
:root {
  --accent: #ff9f1c;      /* Change orange */
  --accent2: #d4af37;     /* Change gold */
  --bg: #0b0b0d;          /* Change dark background */
}
```

### 2. Update Menu Items
Edit `js/script.js` under `menuData`:

```javascript
starters: [
  { name: 'Your Dish Name', price: 180, img: 'images/your-image.jpg' },
  // Add more items
]
```

### 3. Change Contact Info
Edit `index.html` in the Contact section:

```html
<p><strong>Phone:</strong> +91 YOUR_NUMBER</p>
<a href="https://wa.me/YOUR_NUMBER">WhatsApp</a>
```

### 4. Update Google Maps
Replace the iframe `src` in `index.html`:

```html
<iframe src="https://www.google.com/maps?q=YOUR_LOCATION&output=embed"></iframe>
```

---

## 📝 Menu Items List

### Starters
- Chicken 65 (₹180)
- Dragon Chicken (₹220)
- Paneer Tikka (₹190)
- Crispy Corn (₹150)
- French Fries (₹120)

### Main Course
- Butter Chicken (₹260)
- Chicken Curry (₹240)
- Paneer Butter Masala (₹230)
- Veg Fried Rice (₹170)
- Chicken Fried Rice (₹210)

### Biryanis
- Chicken Biryani (₹250)
- Mutton Biryani (₹320)
- Egg Biryani (₹180)
- Veg Biryani (₹170)

### Desserts
- Gulab Jamun (₹90)
- Brownie with Ice Cream (₹140)
- Chocolate Lava Cake (₹160)
- Fruit Salad (₹110)

### Beverages
- Fresh Lime Juice (₹70)
- Mango Shake (₹120)
- Cold Coffee (₹110)
- Soft Drinks (₹50)

---

## 👨‍💻 Credits

- **Developer:** Gulathai Anathar
- **Design Inspiration:** Modern restaurant landing pages
- **Images:** Unsplash (free for commercial use) [web:1]
- **Fonts:** Google Fonts - Poppins
- **Icons:** Emoji icons and CSS-based UI

---

## 📄 License

This project is open source and available under the **MIT License**.

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

---

## 📬 Contact

- **Email:** your-email@example.com
- **Location:** Madurai, Tamil Nadu, India
- **GitHub:** [yourusername](https://github.com/yourusername)

---

<p align="center">
  <strong>Made with ❤️ for food lovers</strong>
</p>