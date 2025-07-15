const http = require('http');

const postData = JSON.stringify({
  companyName: 'Test Hotel',
  contactPerson: 'John Doe',
  email: 'test@example.com',
  phone: '1234567890',
  address: '123 Test St',
  city: 'Test City',
  zipCode: '12345',
  serviceType: 'hotel-laundry',
  pickupDate: '2024-01-15',
  pickupTime: '10:00'
});

const options = {
  hostname: 'localhost',
  port: 5000,
  path: '/api/schedule-pickup',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = http.request(options, (res) => {
  console.log(`Status: ${res.statusCode}`);
  console.log(`Headers: ${JSON.stringify(res.headers)}`);
  
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log('Response:', data);
  });
});

req.on('error', (e) => {
  console.error(`Problem with request: ${e.message}`);
});

req.write(postData);
req.end();
