// Test file to verify admin login functionality
// Run with: node src/test-admin-login.js

const firebase = require('firebase/app');
require('firebase/auth');

// Firebase configuration (same as in firebase.ts)
const firebaseConfig = {
  apiKey: "AIzaSyDemoKeyForTestingOnly",
  authDomain: "qyra-institute.firebaseapp.com",
  projectId: "qyra-institute",
  storageBucket: "qyra-institute.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

async function testAdminLogin() {
  console.log('🔐 Testing Admin Login Functionality...\n');
  
  const adminCredentials = {
    email: 'admin@qyra.com',
    password: 'Qyra@12345'
  };

  try {
    console.log('📧 Email:', adminCredentials.email);
    console.log('🔑 Password:', adminCredentials.password.replace(/./g, '*'));
    console.log('\n⏳ Attempting login...\n');

    // Attempt to sign in
    const userCredential = await auth.signInWithEmailAndPassword(
      adminCredentials.email,
      adminCredentials.password
    );

    const user = userCredential.user;
    
    console.log('✅ LOGIN SUCCESSFUL!');
    console.log('👤 User ID:', user.uid);
    console.log('📧 Email:', user.email);
    console.log('🔐 Email Verified:', user.emailVerified);
    console.log('📅 Created:', user.metadata.creationTime);
    console.log('🔄 Last Sign-in:', user.metadata.lastSignInTime);

    // Test logout
    await auth.signOut();
    console.log('\n✅ LOGOUT SUCCESSFUL!');
    console.log('👋 User signed out successfully');

  } catch (error) {
    console.log('❌ LOGIN FAILED!');
    console.log('🔍 Error Code:', error.code);
    console.log('📝 Error Message:', error.message);
    
    // Provide specific guidance based on error
    switch (error.code) {
      case 'auth/user-not-found':
        console.log('\n💡 Solution: Create admin user in Firebase Console');
        console.log('   Go to: Firebase Console → Authentication → Users → Add user');
        break;
      case 'auth/wrong-password':
        console.log('\n💡 Solution: Check password or reset it in Firebase Console');
        break;
      case 'auth/invalid-email':
        console.log('\n💡 Solution: Check email format');
        break;
      case 'auth/user-disabled':
        console.log('\n💡 Solution: Enable user in Firebase Console');
        break;
      case 'auth/too-many-requests':
        console.log('\n💡 Solution: Wait a few minutes or reset password');
        break;
      case 'auth/api-key-not-allowed':
        console.log('\n💡 Solution: Check Firebase configuration and API keys');
        break;
      default:
        console.log('\n💡 Solution: Check Firebase project configuration');
    }
  }
}

// Test development mode detection
console.log('🌍 Environment Check:');
console.log('NODE_ENV:', process.env.NODE_ENV || 'undefined');
console.log('Development Mode:', process.env.NODE_ENV === 'development');
console.log('');

// Run the test
testAdminLogin().then(() => {
  console.log('\n🏁 Test completed!');
  process.exit(0);
}).catch((error) => {
  console.log('\n💥 Test failed with error:', error);
  process.exit(1);
});
