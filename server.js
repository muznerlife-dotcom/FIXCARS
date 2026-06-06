const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index', {
    stationName: 'Car Depot Auto Mechanic Service',
    tagline: 'Your Trusted Auto Care Partner',
    phone: '+1 720-215-6718',
    email: 'cardepotmechanic@gmail.com',
    address: '1950 W Union Ave A11, Englewood, CO 80110',
    googleMapsLink: 'https://www.google.com/maps/dir/?api=1&destination=39.6318955,-105.0119894&travelmode=driving',
    hours: {
      weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM',
      saturday: 'Saturday: 10:00 AM - 5:00 PM',
      sunday: 'Sunday: 10:00 AM - 5:00 PM'

    }
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

module.exports = app;
