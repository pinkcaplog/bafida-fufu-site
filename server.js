const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.post('/order', (req, res) => {
  console.log('New order:', req.body);
  res.json({ message: 'Order received! We will contact you shortly.' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
