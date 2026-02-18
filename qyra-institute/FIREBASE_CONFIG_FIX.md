# Firebase Configuration Fix

## The Problem
The current Firebase API key `xdKnqlSTIIXQHzzlLPNhU6srcel2` is not valid. Firebase API keys are typically 39 characters long and follow this format:
`AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`

## How to Get Correct Firebase Credentials

### Step 1: Go to Firebase Console
1. Visit [Firebase Console](https://console.firebase.google.com/)
2. Select your project (or create a new one)

### Step 2: Get Web App Configuration
1. In your project dashboard, click the **Web icon** (</>) to add a web app
2. Give your app a name (e.g., "qyra-institute")
3. Click **Register app**
4. Firebase will show you your configuration details

### Step 3: Copy the Firebase Config
Your config should look like this:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", // 39 characters
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456789012345678"
};
```

### Step 4: Update Your Config File
Replace the contents of `src/firebase/config.ts` with your actual Firebase config:

```typescript
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_ACTUAL_API_KEY_HERE",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, signInWithEmailAndPassword, signOut, onAuthStateChanged };
export default app;
```

## Important Notes

1. **API Key Format**: Must start with "AIzaSy" and be 39 characters total
2. **Auth Domain**: Usually ends with `.firebaseapp.com`
3. **Project ID**: Your actual Firebase project ID
4. **Security**: API keys are public, but Firebase security rules protect your data

## Alternative: Use a Test Firebase Project

If you don't have a Firebase project yet:

1. Create a new Firebase project at [console.firebase.google.com](https://console.firebase.google.com/)
2. Enable Authentication (Email/Password)
3. Enable Firestore Database
4. Add a web app to get your config
5. Create the admin user in Authentication > Users

## Quick Fix Template

Once you have your correct config, replace the entire content of `src/firebase/config.ts` with:

```typescript
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "PASTE_YOUR_39_CHARACTER_API_KEY_HERE",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456789012345678"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, signInWithEmailAndPassword, signOut, onAuthStateChanged };
export default app;
```

After updating the config, the login should work properly!
