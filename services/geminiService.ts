
import { GoogleGenAI } from "@google/genai";
import { UserInputs } from "../types";

/**
 * Validates inputs to prevent prompt injection or malformed requests.
 */
const validateInputs = (inputs: UserInputs) => {
  if (!inputs.business_category || inputs.business_category.length < 3) {
    throw new Error("Validation Error: Business category is too short or missing.");
  }
  if (inputs.extra_details && inputs.extra_details.length > 2000) {
    throw new Error("Security Alert: Creative brief exceeds maximum safe character limit.");
  }
};

export const generateSocialContent = async (inputs: UserInputs): Promise<string> => {
  // Security Pre-flight
  validateInputs(inputs);

  // Initialize with named parameter as per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    Act as a world-class Social Media Strategist, Copywriter, and Content Creator.
    Generate highly engaging, platform-ready content based on the following details:

    BUSINESS CATEGORY: ${inputs.business_category}
    CONTENT TYPE NEEDED: ${inputs.content_type}
    LANGUAGE: ${inputs.language}
    TONE: ${inputs.tone}
    PLATFORM: ${inputs.platform}
    ADDITIONAL NOTES: ${inputs.extra_details}

    STRATEGIC CONSTRAINTS:
    - Content must be original, fresh, and human-like.
    - Maintain the selected tone and platform style strictly.
    - Avoid generic filler. Use specific industry terminology.
    - For Indian languages, ensure cultural resonance.
    - Use Markdown for clear hierarchy.

    OUTPUT REQUIREMENTS FOR ${inputs.content_type}:
    ${getContentTypeRequirements(inputs.content_type)}
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: prompt,
      config: {
        temperature: 0.75, // Slightly lower for better strategic consistency
        topP: 0.95,
        topK: 64,
        systemInstruction: "You are an elite creative director. Your output must be audit-ready, high-retention, and strictly follow brand safety protocols. Focus on conversion hooks and authentic voice."
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("Zero-Length Response: The model failed to generate text.");
    }

    return text;
  } catch (error: any) {
    console.error("Studio Engine Error:", error);
    if (error.message?.includes("API_KEY")) {
      throw new Error("Authentication Failure: API Key is invalid or restricted.");
    }
    throw new Error(error.message || "Synthesis failure: Error communicating with core engine.");
  }
};

const getContentTypeRequirements = (type: string) => {
  switch (type) {
    case 'content_calendar':
      return `Return a complete 30-day content calendar. Format: Day X: Post Idea, Type (Reel/Carousel/etc), Hook, Short Caption, CTA.`;
    case 'captions':
      return `Return 10 caption variations (Short, Long, Hook-based). Include emojis and relevant hashtags at the end.`;
    case 'hashtags':
      return `Return 30 niche hashtags categorized as Low/Medium/High competition.`;
    case 'reels_script':
      return `Return a high-retention script: Hook, Scene-by-scene breakdown, Full dialog, On-screen text, and CTA.`;
    case 'ad_copy':
      return `Return 5 primary texts, 5 headlines, 5 descriptions across 3 angles: Emotional, Value, and Urgency.`;
    case 'festival_wishes':
      return `Return Short, Long, and Business-focused festival wishes with promotional angles and specific hashtags.`;
    case 'image_prompt':
      return `Return 5 detailed Midjourney/DALL-E style prompts in different aesthetics (minimal, cinematic, luxury, etc).`;
    default:
      return "Generate professional social media content following the creative brief.";
  }
};
