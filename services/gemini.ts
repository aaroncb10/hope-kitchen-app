
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getSmartInsights = async (inventory: any[], needs: any[]) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Analyze current food shelter status. 
      Inventory: ${JSON.stringify(inventory)}. 
      Community Needs: ${JSON.stringify(needs)}. 
      Provide a short, 2-sentence actionable insight for the kitchen manager.`,
      config: {
        thinkingConfig: { thinkingBudget: 0 }
      }
    });
    return response.text;
  } catch (error) {
    console.error("Failed to fetch AI insights", error);
    return "Optimizing logistics for today's distribution based on real-time need.";
  }
};

export const optimizeRoute = async (points: string[]) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an AI logistics expert. Optimize a route for these locations to minimize fuel and maximize freshness: ${points.join(', ')}. Return the optimized sequence only.`,
      config: {
        thinkingConfig: { thinkingBudget: 0 }
      }
    });
    return response.text;
  } catch (error) {
    return points.join(' -> ');
  }
};
