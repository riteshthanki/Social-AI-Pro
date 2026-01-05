
export type ContentType = 
  | 'content_calendar' 
  | 'captions' 
  | 'hashtags' 
  | 'reels_script' 
  | 'ad_copy' 
  | 'festival_wishes' 
  | 'image_prompt';

export interface UserInputs {
  business_category: string;
  content_type: ContentType;
  language: string;
  tone: string;
  platform: string;
  extra_details: string;
}

export interface GeneratedResult {
  content: string;
  timestamp: number;
  type: ContentType;
}
