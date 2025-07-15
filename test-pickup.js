const fetch = require('node-fetch');

async function testPickupAPI() {
  try {
    const response = await fetch('http://localhost:5000/api/schedule-pickup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
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
      })
    });

    const result = await response.json();
    console.log('Status:', response.status);
    console.log('Response:', result);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

testPickupAPI();
