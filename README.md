# 🎯 Elite Shooting Academy Website

A premium, modern, production-ready website for a professional Shooting Academy built with React, Three.js, and Tailwind CSS.

## 🌟 Features

### Pages
- **Home**: Hero section with interactive 3D gun model, academy overview, programs preview, and testimonials
- **About Us**: Mission, vision, timeline, achievements, and facility showcase
- **Training Programs**: Beginner, Intermediate, and Advanced programs with detailed features
- **Arsenal/Equipment**: Interactive 3D showcase of training firearms with specifications
- **Coaches**: Professional profiles with achievements and certifications
- **Safety & Rules**: Comprehensive safety guidelines and legal compliance
- **Gallery**: Filterable image gallery with training, competition, and awards photos
- **Contact**: Contact form, location info, and FAQ section

### Tech Stack
- **Frontend**: React 19 with Vite
- **3D Graphics**: Three.js + React Three Fiber + Drei
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS with custom theme
- **Routing**: React Router DOM
- **Performance**: Optimized for production with lazy loading

### Design Features
- ✨ Premium dark theme with gunmetal and steel colors
- 🎨 Glassmorphism effects and smooth transitions
- 📱 Fully responsive (desktop, tablet, mobile)
- 🎯 Sports-focused, professional aesthetic
- 🔄 Interactive 3D models with rotate and zoom
- ⚡ Smooth scroll animations with Framer Motion
- 🛡️ Strong emphasis on safety and discipline

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies**
```bash
npm install
```

2. **Start development server**
```bash
npm run dev
```

3. **Open in browser**
Navigate to the URL shown in terminal (typically http://localhost:5173)

### Build for Production

```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
dsharp/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Gun3DModel.jsx
│   │   ├── Gun3DScene.jsx
│   │   └── WeaponModels.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Programs.jsx
│   │   ├── Arsenal.jsx
│   │   ├── Coaches.jsx
│   │   ├── Safety.jsx
│   │   ├── Gallery.jsx
│   │   └── Contact.jsx
│   ├── App.jsx         # Main app with routing
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── tailwind.config.js  # Tailwind configuration
├── vite.config.js      # Vite configuration
└── package.json
```

## 🎨 Design System

### Colors
- **Gunmetal**: Dark backgrounds (#0a0c0e to #3a3f47)
- **Steel**: Secondary text and accents (#71757c to #a3a6ab)
- **Accent Red**: CTAs and highlights (#c62828, #ef5350)
- **White**: Primary text

### Typography
- **Headings**: Montserrat (600-800 weight)
- **Body**: Inter (300-700 weight)

## 🛡️ Safety & Compliance

This website emphasizes:
- ✅ Educational and sports purposes only
- ✅ Olympic-standard training focus
- ✅ Safety-first approach
- ✅ No violent or aggressive content
- ✅ Professional sports academy presentation

## 📱 Responsive Design

Fully optimized for:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1440px+)

## ⚡ Performance Optimizations

- Lazy loading for components
- Optimized 3D models and scenes
- Code splitting with React Router
- Minified production builds
- Tailwind CSS purging

## 📦 Key Dependencies

- react ^19.2.0
- @react-three/fiber ^8.18.5
- @react-three/drei ^9.123.1
- framer-motion ^12.0.5
- react-router-dom ^7.1.3
- tailwindcss ^3.4.20

## 🌐 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

---

**Note**: All firearm representations are purely educational for Olympic-standard sports shooting training purposes.

