// Type definitions for Qyra Institute Admin Dashboard

export interface AdminUser {
  uid: string;
  email: string | null;
  displayName?: string | null;
}

export interface Course {
  id: string;
  title: string;
  category: 'Quran' | 'Academic' | 'Professional';
  level: string;
  duration: string;
  description: string;
  courseFocus: string[];
  status: 'active' | 'inactive';
  createdAt: any;
  updatedAt: any;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  phone?: string;
  enrolledPrograms: string[];
  status: 'trial' | 'active' | 'completed';
  createdAt: any;
  lastActive?: any;
}

export interface FreeTrialRequest {
  id: string;
  name: string;
  email: string;
  phone?: string;
  interestedCourse: string;
  message?: string;
  status: 'pending' | 'contacted' | 'converted';
  createdAt: any;
  contactedAt?: any;
  convertedAt?: any;
}

export interface Media {
  id: string;
  type: 'video' | 'image';
  title: string;
  youtubeUrl?: string;
  imageUrl?: string;
  section: 'homepage' | 'course' | 'media';
  createdAt: any;
}

export interface SiteContent {
  id: string;
  sectionName: string;
  content: string | string[];
  updatedAt: any;
}

export interface Settings {
  id: string;
  key: string;
  value: string;
  category: string;
  description: string;
  updatedAt: any;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface LoadingState {
  loading: boolean;
  error?: string;
}
