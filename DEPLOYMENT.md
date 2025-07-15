# PureBiz Laundry Services - Deployment Guide

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Gmail account (for email functionality)

## 📧 Email Configuration

### 1. Gmail Setup
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to [Google Account settings](https://myaccount.google.com/)
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Update your `.env` file with the credentials

### 2. Environment Variables
Update the `.env` file with your actual credentials:

```env
# Email Configuration
EMAIL_USER=your-actual-email@gmail.com
EMAIL_PASS=your-16-character-app-password
BUSINESS_EMAIL=info@purebizlaundry.com
PORT=5000

# Optional: Google Maps API Key
GOOGLE_MAPS_API_KEY=your-google-maps-api-key
```

## 🖥️ Local Development

### Frontend Setup
```bash
# Install dependencies
npm install

# Start development server
npm start

# Open browser at http://localhost:3000
```

### Backend Setup
```bash
# Start backend server (in a new terminal)
node server.js

# Backend runs on http://localhost:5000
```

## 🏗️ Production Build

### 1. Build Frontend
```bash
# Create production build
npm run build

# This creates a 'build' folder with optimized files
```

### 2. Test Production Build Locally
```bash
# Install serve globally
npm install -g serve

# Serve the build folder
serve -s build -l 3000
```

## 🌐 Deployment Options

### Option 1: Netlify (Frontend Only)
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to [Netlify](https://netlify.com)
3. Configure redirects for SPA routing:
   - Create `public/_redirects` file with: `/* /index.html 200`

### Option 2: Vercel (Frontend Only)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Option 3: Full Stack Deployment (Heroku)

#### Frontend + Backend on Heroku
1. Create `package.json` in root with both frontend and backend scripts:
```json
{
  "scripts": {
    "build": "npm run build",
    "start": "node server.js",
    "heroku-postbuild": "npm install && npm run build"
  }
}
```

2. Update `server.js` to serve static files:
```javascript
// Add after middleware setup
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}
```

3. Deploy to Heroku:
```bash
# Install Heroku CLI
# Create Heroku app
heroku create purebiz-laundry

# Set environment variables
heroku config:set EMAIL_USER=your-email@gmail.com
heroku config:set EMAIL_PASS=your-app-password
heroku config:set BUSINESS_EMAIL=info@purebizlaundry.com
heroku config:set NODE_ENV=production

# Deploy
git push heroku main
```

### Option 4: Railway (Full Stack)
1. Connect your GitHub repository to [Railway](https://railway.app)
2. Set environment variables in Railway dashboard
3. Deploy automatically on git push

## 🔧 Configuration Updates

### Update API Endpoint for Production
In `src/components/ContactForm.js`, update the fetch URL:

```javascript
// For production, use your actual backend URL
const response = await fetch('https://your-backend-url.com/api/contact', {
  // ... rest of the code
});
```

### Update Google Maps (Optional)
1. Get a Google Maps API key
2. Update the iframe src in `ContactForm.js` with actual coordinates
3. Add the API key to your environment variables

## 📊 Performance Optimization

### 1. Image Optimization
- Compress images in `src/assets/`
- Use WebP format for better compression
- Implement lazy loading for images

### 2. Code Splitting
- The app already uses React's built-in code splitting
- Consider adding route-based code splitting for larger apps

### 3. Caching
- Configure proper cache headers for static assets
- Use CDN for better global performance

## 🔒 Security Checklist

- ✅ Environment variables are properly configured
- ✅ CORS is configured for production domains
- ✅ Email credentials are secured
- ✅ Input validation is implemented
- ✅ Error handling is in place

## 🧪 Testing

### Frontend Testing
```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage
```

### Backend Testing
```bash
# Test email functionality
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "companyName": "Test Company",
    "email": "test@example.com",
    "phone": "+1234567890",
    "serviceType": "hotel-laundry",
    "message": "Test message"
  }'
```

## 📈 Monitoring

### Health Check
- Backend health check: `GET /api/health`
- Monitor email delivery success rates
- Set up error logging (consider services like Sentry)

## 🔄 Updates and Maintenance

### Regular Updates
1. Keep dependencies updated: `npm audit fix`
2. Monitor email delivery rates
3. Update content as needed
4. Check Google Maps integration

### Backup
- Regularly backup your `.env` file (securely)
- Keep a copy of your email templates
- Document any custom configurations

## 🆘 Troubleshooting

### Common Issues

1. **Email not sending**
   - Check Gmail app password
   - Verify 2FA is enabled
   - Check console for error messages

2. **Contact form not working**
   - Verify backend is running
   - Check CORS configuration
   - Verify API endpoint URL

3. **Build errors**
   - Clear node_modules: `rm -rf node_modules && npm install`
   - Check for dependency conflicts

### Support
For technical support, check:
- Console errors in browser developer tools
- Server logs for backend issues
- Network tab for API call failures

---

**Your PureBiz Laundry Services website is now ready for deployment! 🎉**
