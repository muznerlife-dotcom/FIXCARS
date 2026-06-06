# AutoPro Mechanic Station Website

A simple, professional one-page website for an auto mechanic station built with Node.js, Express, and EJS.

## Features

- 🎨 Clean and modern UI/UX design
- 📱 Fully responsive layout
- ✨ Glowing navigation menu effects
- 🗺️ Google Maps integration for address
- 📸 Image gallery
- 📞 Contact information with clickable phone and email
- ⚡ Smooth scrolling navigation
- 🎯 Single-page application with multiple sections

## Sections

1. **Hero** - Eye-catching landing section with call-to-action buttons
2. **About** - Information about the mechanic station
3. **Services** - List of services offered
4. **Gallery** - Photo gallery of the shop and work
5. **Contact** - Contact information and embedded Google Maps

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **EJS** - Templating engine
- **CSS3** - Styling with modern effects
- **Vanilla JavaScript** - Interactive features

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

3. For development with auto-restart:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

## Customization

### Update Business Information

Edit the data in `server.js`:

```javascript
stationName: 'AutoPro Mechanic Station',
tagline: 'Your Trusted Auto Care Partner',
phone: '+1 (555) 123-4567',
email: 'contact@autopro.com',
address: '123 Main Street, Your City, State 12345',
googleMapsLink: 'https://www.google.com/maps/search/...',
```

### Change Colors

Edit CSS variables in `public/css/style.css`:

```css
:root {
  --primary-color: #e74c3c;
  --secondary-color: #2c3e50;
  --accent-color: #3498db;
  /* ... */
}
```

### Add Your Images

Replace the Unsplash URLs in `views/index.ejs` with your own images.

## Future Enhancements

- Add MongoDB database for booking system
- Implement contact form with email notifications
- Add customer testimonials section
- Include pricing information
- Add blog section for auto care tips
- Integration with social media

## License

MIT

## Author

Yaro Muzychenko
