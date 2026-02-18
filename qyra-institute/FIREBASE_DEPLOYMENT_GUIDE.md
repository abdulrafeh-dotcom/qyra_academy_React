# Firebase Setup and Deployment Guide

## Firebase Configuration

The project is already configured with Firebase using the provided credentials:
- API Key: xdKnqlSTIIXQHzzlLPNhU6srcel2
- Auth Domain: iaa.com
- Project ID: iaa

## Step 1: Set up Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select existing project "iaa"
3. Enable Authentication:
   - Go to Authentication > Sign-in method
   - Enable Email/Password provider
4. Enable Firestore Database:
   - Go to Firestore Database > Create database
   - Start in test mode (for development)
5. Create the admin user:
   - Go to Authentication > Users > Add user
   - Email: admin@qyra.com
   - Password: Qyra@12345

## Step 2: Install Firebase CLI

```bash
npm install -g firebase-tools
```

## Step 3: Login to Firebase

```bash
firebase login
```

## Step 4: Initialize Firebase Hosting

```bash
firebase init hosting
```

When prompted:
- Select your project "iaa"
- Set public directory as "build"
- Configure as a single-page app (Yes)
- Do not overwrite index.html (No)

## Step 5: Build and Deploy

```bash
# Build the React app
npm run build

# Deploy to Firebase hosting
firebase deploy
```

## Access Points

- **Public Website**: `https://your-project-name.web.app`
- **Admin Login**: `https://your-project-name.web.app/admin/login`
- **Admin Dashboard**: `https://your-project-name.web.app/dashboard`

## Admin Credentials

- **Email**: admin@qyra.com
- **Password**: Qyra@12345

## Security Notes

1. The admin dashboard is protected and only accessible after login
2. Firebase security rules should be configured for production
3. Change the admin password before deploying to production

## Firebase Security Rules (Firestore)

Add these rules in Firebase Console > Firestore Database > Rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Only authenticated users can read/write
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## Testing Locally

1. Start the development server:
   ```bash
   npm start
   ```

2. Test admin functionality:
   - Navigate to `http://localhost:3000/admin/login`
   - Login with admin credentials
   - Access dashboard at `http://localhost:3000/dashboard`

## Features Implemented

✅ Firebase Authentication with Email/Password
✅ Protected admin routes
✅ Admin dashboard with video management
✅ Admin dashboard with course management
✅ CRUD operations for videos and courses
✅ Custom CSS styling with hover effects
✅ Responsive design
✅ Firebase hosting configuration
✅ Logout functionality

## Next Steps

1. Set up the Firebase project as described above
2. Create the admin user in Firebase Console
3. Test the application locally
4. Deploy to Firebase hosting
5. Configure production security rules
