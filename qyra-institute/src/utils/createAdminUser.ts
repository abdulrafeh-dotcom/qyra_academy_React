import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

// Function to create admin user only if doesn't exist
export const createAdminUser = async () => {
  try {
    // First try to sign in to see if user exists
    await signInWithEmailAndPassword(auth, 'admin@qyra.com', 'Qyra@12345');
    console.log('Admin user already exists and can login');
    return null;
  } catch (error: any) {
    // If User doesn't exist, create them
    if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth, 
          'admin@qyra.com', 
          'Qyra@12345'
        );
        console.log('Admin user created successfully!', userCredential.user.email);
        return userCredential.user;
      } catch (createError: any) {
        console.error('Error creating admin user:', createError.message);
        return null;
      }
    } else {
      console.error('Unexpected error during admin user check:', error.message);
      return null;
    }
  }
};

// Auto-create admin user when this file is imported (for setup)
createAdminUser();
