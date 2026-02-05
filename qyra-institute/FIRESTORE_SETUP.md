# Firestore Collections Setup Guide

This document outlines the Firestore collections structure for Qyra Institute Admin Dashboard.

## Collections Structure

### 1. courses
```javascript
{
  title: string,           // "Quran Reading with Tajweed"
  category: string,        // "Quran" | "Academic" | "Professional"
  level: string,          // "Beginner" | "Intermediate" | "Advanced"
  duration: string,       // "3 months" | "6 weeks"
  description: string,    // Course description
  courseFocus: array,     // ["Tajweed", "Recitation", "Memorization"]
  status: string,         // "active" | "inactive"
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### 2. students
```javascript
{
  name: string,           // "Ahmed Hassan"
  email: string,          // "ahmed@example.com"
  phone: string,          // "+1234567890" (optional)
  enrolledCourses: array, // ["Quran Reading", "Digital Marketing"]
  status: string,         // "trial" | "active" | "completed"
  createdAt: timestamp,
  lastActive: timestamp   // (optional)
}
```

### 3. freeTrialRequests
```javascript
{
  name: string,           // "Fatima Al-Rashid"
  email: string,          // "fatima@example.com"
  phone: string,          // "+1234567890" (optional)
  interestedCourse: string, // "Digital Marketing"
  message: string,        // "I'm interested in..." (optional)
  status: string,         // "pending" | "contacted" | "converted"
  createdAt: timestamp,
  contactedAt: timestamp, // (optional)
  convertedAt: timestamp   // (optional)
}
```

### 4. media
```javascript
{
  type: string,           // "video" | "image"
  title: string,         // "Introduction Video"
  youtubeUrl: string,     // "https://youtube.com/watch?v=..." (for videos)
  imageUrl: string,       // "https://storage.googleapis.com/..." (for images)
  section: string,       // "homepage" | "course" | "media"
  createdAt: timestamp
}
```

### 5. siteContent
```javascript
{
  sectionName: string,    // "homepage" | "about" | "mission" | "whyChooseUs"
  content: string,        // HTML or plain text content
  updatedAt: timestamp
}
```

### 6. settings
```javascript
{
  key: string,           // "facebook_url" | "contact_email" etc.
  value: string,         // "https://facebook.com/qyra"
  category: string,      // "Social Media" | "Contact" | "Features"
  description: string,   // "Facebook page URL"
  updatedAt: timestamp
}
```

## Security Rules (Production)

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Only authenticated admins can access the dashboard
    match /{document=**} {
      allow read, write: if request.auth != null && request.auth.token.admin == true;
    }
  }
}
```

## Initial Setup

1. Create these collections in Firestore Console
2. Set up security rules for production
3. Create admin users in Firebase Authentication
4. Add custom claims for admin users (optional but recommended)

## Custom Admin Claims (Optional)

To add admin claims to users, use Firebase Admin SDK:

```javascript
// In a Cloud Function or admin script
admin.auth().setCustomUserClaims(uid, { admin: true });
```
