# Buhler Store - Vue.js E-commerce App

A modern Vue.js 3 e-commerce application built with Vite and Vue Router.

## Features

- **Product Catalog**: Browse products with detailed information
- **Shopping Cart**: Add items to cart and track total quantity
- **Product Details**: View detailed product information
- **Checkout**: Complete your purchase flow
- **Real-time Clock**: Display current date and time (Jan/15/26, 5:42:08 AM format)
- **Responsive Design**: Clean and intuitive UI

## Prerequisites

Before you begin, make sure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)

## Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/satishsingh003/buhlerstore.git
   cd buhlerstore/vue-store
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Running the App

### Development Mode
Start the development server with hot module replacement:
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the next available port)

### Production Build
Build the app for production:
```bash
npm run build
```

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
vue-store/
├── src/
│   ├── components/
│   │   ├── Cart.vue
│   │   ├── Home.vue
│   │   └── ProductCard.vue
│   ├── pages/
│   │   ├── Cart.vue
│   │   ├── Checkout.vue
│   │   ├── Home.vue
│   │   └── ProductDetail.vue
│   ├── data/
│   │   └── products.js
│   ├── router/
│   │   └── index.js
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── public/
├── index.html
├── package.json
└── vite.config.js
```

## Key Technologies

- **Vue.js 3**: Progressive JavaScript framework
- **Vue Router 4**: Official router for Vue.js
- **Vite**: Next generation frontend build tool

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically try the next available port.

### Dependencies Not Installed
Make sure to run:
```bash
npm install
```

### Module Not Found
Clear node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

## Git Push (GitHub)

To push your changes to GitHub:

1. **Add files to staging**:
   ```bash
   git add .
   ```

2. **Commit changes**:
   ```bash
   git commit -m "Your commit message"
   ```

3. **Push to GitHub**:
   ```bash
   git push origin main
   ```

**Note**: Use a Personal Access Token or SSH for authentication instead of password.

## License

MIT

## Support

For issues or questions, please contact the development team.
