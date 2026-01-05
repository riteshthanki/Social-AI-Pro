
import React from 'react';
import { 
  Calendar, 
  Type, 
  Hash, 
  Film, 
  Target, 
  Sparkles, 
  Image as ImageIcon 
} from 'lucide-react';
import { ContentType } from './types';

export const CONTENT_TYPE_OPTIONS: { value: ContentType; label: string; icon: React.ReactNode }[] = [
  { value: 'content_calendar', label: '30-Day Calendar', icon: <Calendar className="w-5 h-5" /> },
  { value: 'captions', label: 'Captions (10x)', icon: <Type className="w-5 h-5" /> },
  { value: 'hashtags', label: 'Viral Hashtags', icon: <Hash className="w-5 h-5" /> },
  { value: 'reels_script', label: 'Reels/TikTok Script', icon: <Film className="w-5 h-5" /> },
  { value: 'ad_copy', label: 'Conversion Ad Copy', icon: <Target className="w-5 h-5" /> },
  { value: 'festival_wishes', label: 'Festival Wishes', icon: <Sparkles className="w-5 h-5" /> },
  { value: 'image_prompt', label: 'AI Image Prompts', icon: <ImageIcon className="w-5 h-5" /> },
];

export const TONE_OPTIONS = [
  'Professional', 'Witty', 'Empathetic', 'Luxury', 'Minimalist', 'Inspirational', 'Urgent', 'Casual'
];

export const PLATFORM_OPTIONS = [
  'Instagram', 'LinkedIn', 'TikTok', 'Facebook', 'X (Twitter)', 'Pinterest', 'YouTube'
];

export const LANGUAGE_OPTIONS = [
  'English', 'Hindi', 'Gujarati', 'Marathi', 'Tamil', 'Telugu', 'Bengali', 'Spanish', 'French'
];
