const fetch = require('node-fetch');

async function testContactAPI() {
  try {
    const res = await fetch('http://localhost:3001/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Test Setup Agent',
        email: 'agent@test.com',
        subject: 'Database Verification',
        message: 'This is a test message to verify the MongoDB connection works.'
      })
    });
    
    const data = await res.json();
    console.log("Contact API Status:", res.status);
    console.log("Contact API Response:", data);
  } catch (err) {
    console.error("Test failed:", err);
  }
}

async function testVolunteerAPI() {
  try {
    const res = await fetch('http://localhost:3001/api/volunteer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        role: 'Join Campaign'
      })
    });
    
    const data = await res.json();
    console.log("Volunteer API Status:", res.status);
    console.log("Volunteer API Response:", data);
  } catch (err) {
    console.error("Test failed:", err);
  }
}

testContactAPI().then(() => testVolunteerAPI());
