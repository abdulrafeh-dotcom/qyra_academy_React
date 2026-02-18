import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

// This function can be used to create the initial admin user
// You would run this once from the browser console or a temporary component
export const createAdminUser = async () => {
  try {
    // Note: In a real Firebase project, you would create users through the Firebase Console
    // or use Firebase Admin SDK on the server side. For this demo, we'll assume the user
    // admin@qyra.com with password Qyra@12345 already exists in Firebase Auth.
    
    // You can test the login by calling:
    await signInWithEmailAndPassword(auth, 'admin@qyra.com', 'Qyra@12345');
    console.log('Admin user logged in successfully!');
  } catch (error: any) {
    console.error('Error:', error.message);
    
    if (error.code === 'auth/user-not-found') {
      console.log('Admin user not found. Please create the user in Firebase Console first.');
      console.log('Go to Firebase Console > Authentication > Users > Add user');
      console.log('Email: admin@qyra.com');
      console.log('Password: Qyra@12345');
    }
  }
};

// Export for manual testing
declare global {
  interface Window {
    createAdminUser: typeof createAdminUser;
  }
}

window.createAdminUser = createAdminUser;
