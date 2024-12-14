import http from 'http';
import FormData from 'form-data';

async function runTests() {
  /* eslint-disable-next-line no-console */
  console.log('Running tests...\n');

  // Test 1: Server is running
  try {
    await testServerRunning();
    /* eslint-disable-next-line no-console */
    console.log('✓ Server is running and responding');
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.error('✗ Server test failed:', error.message);
    process.exit(1);
  }

  // Test 2: Form submission
  try {
    await testFormSubmission();
    /* eslint-disable-next-line no-console */
    console.log('✓ Form submission works correctly');
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.error('✗ Form submission test failed:', error.message);
    process.exit(1);
  }

  /* eslint-disable-next-line no-console */
  console.log('\nAll tests passed successfully!');
  process.exit(0);
}

function testServerRunning() {
  return new Promise((resolve, reject) => {
    http.get('http://localhost:3000', (res) => {
      if (res.statusCode === 200) {
        resolve();
      } else {
        reject(new Error(`Server responded with status code ${res.statusCode}`));
      }
    }).on('error', reject);
  });
}

function testFormSubmission() {
  return new Promise((resolve, reject) => {
    const form = new FormData();
    form.append('family_member', 'Test');
    form.append('driver', 'Test');
    form.append('rating', '5');
    form.append('comment', 'Test comment');

    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/submit',
      method: 'POST',
      headers: form.getHeaders()
    };

    const req = http.request(options, (res) => {
      if (res.statusCode === 200) {
        resolve();
      } else {
        reject(new Error(`Form submission failed with status code ${res.statusCode}`));
      }
    });

    form.pipe(req);
    req.on('error', reject);
  });
}

// Only run tests if server is already running
runTests().catch(console.error);
