# PureBiz Laundry Services - Professional B2B Laundry Website

A modern, responsive marketing website for PureBiz Laundry Services, a B2B commercial laundry company serving hotels and hospitals.

## 🌟 Features

### Frontend
- **Modern React.js** with functional components and hooks
- **Tailwind CSS** for responsive, utility-first styling
- **GSAP Animations** with ScrollTrigger for smooth transitions
- **Responsive Design** optimized for mobile and desktop
- **SEO Optimized** with meta tags and structured data
- **Professional Design** with blue/white color scheme

### Website Sections
- ✅ **Hero Section** - Animated text with call-to-action buttons
- ✅ **About Us** - Company mission, experience, and statistics
- ✅ **Services** - Hotel laundry, hospital linen, pickup/delivery, bulk washing
- ✅ **Why Choose Us** - 8 key benefits with icons and highlights
- ✅ **Testimonials** - Client reviews with carousel functionality
- ✅ **Contact Form** - Full-featured form with backend integration
- ✅ **Footer** - Social media, contact info, and newsletter signup

### Backend API
- **Node.js/Express** server for contact form processing
- **Email Integration** with Nodemailer (Gmail support)
- **Auto-reply** system for customer inquiries
- **Professional Email Templates** with HTML formatting
- **Error Handling** and fallback messaging

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Gmail account (for email functionality)

### Frontend Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Open Browser**
   Navigate to `http://localhost:3000`

### Backend Setup (Optional)

1. **Install Backend Dependencies**
   ```bash
   # Copy backend package.json
   cp backend-package.json package-backend.json
   
   # Install backend dependencies
   npm install express cors nodemailer dotenv
   ```

2. **Configure Environment Variables**
   ```bash
   # Copy environment template
   cp .env.example .env
   
   # Edit .env file with your email credentials
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   PORT=5000
   ```

3. **Start Backend Server**
   ```bash
   node server.js
   ```

4. **Backend will run on** `http://localhost:5000`

## 📧 Email Configuration

### Gmail Setup
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Use the generated password in your `.env` file

### Email Features
- **Contact Form Submissions** sent to business email
- **Auto-reply** sent to customers
- **Professional HTML Templates** with company branding
- **Error Handling** with fallback messages

## 🎨 Customization

### Colors
The website uses a professional blue/white color scheme defined in `tailwind.config.js`:
- **Primary Blue**: `#3b82f6` (blue-500)
- **Secondary Gray**: `#64748b` (slate-500)
- **Gradients**: Blue to darker blue variations

### Content
All content can be customized in the respective component files:
- `src/components/Hero.js` - Hero section content
- `src/components/About.js` - Company information
- `src/components/Services.js` - Service descriptions
- `src/components/WhyChooseUs.js` - Benefits and features
- `src/components/Testimonials.js` - Client testimonials
- `src/components/ContactForm.js` - Contact information

### Images
Add your own images to `src/assets/` and update component references:
- Hero background image
- Service-specific images
- Team photos
- Facility images

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Available Scripts

### Frontend
- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

### Backend
- `node server.js` - Start backend server
- `npm run dev` - Start with nodemon (auto-restart)

## 📦 Dependencies

### Frontend
- React 18.2.0
- Tailwind CSS 3.3.6
- GSAP 3.12.2
- React Icons 4.12.0
- Autoprefixer & PostCSS

### Backend
- Express 4.18.2
- Nodemailer 6.9.7
- CORS 2.8.5
- Dotenv 16.3.1

## 🌐 Deployment

### Frontend Deployment
1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to hosting service** (Netlify, Vercel, etc.)
   - Upload `build/` folder contents
   - Configure redirects for SPA routing

### Backend Deployment
1. **Deploy to cloud service** (Heroku, Railway, etc.)
2. **Set environment variables** in hosting platform
3. **Update frontend API URL** in ContactForm.js

## 📊 SEO Features

- **Meta Tags** - Title, description, keywords
- **Open Graph** - Social media sharing
- **Twitter Cards** - Twitter sharing optimization
- **Structured Data** - JSON-LD for search engines
- **Semantic HTML** - Proper heading hierarchy
- **Alt Tags** - Image accessibility

## 🔒 Security Features

- **CORS Protection** - Cross-origin request security
- **Input Validation** - Form data validation
- **Error Handling** - Graceful error management
- **Environment Variables** - Secure credential storage

## 🎯 Performance

- **Optimized Images** - Compressed and responsive
- **Code Splitting** - React lazy loading
- **CSS Optimization** - Tailwind purging
- **Animation Performance** - GSAP hardware acceleration

## 📞 Support

For questions or support:
- **Email**: info@purebizlaundry.com
- **Phone**: +91 (8318424372)
- **Emergency**: +1 (555) URGENT-1

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

**Built with ❤️ for PureBiz Laundry Services**
