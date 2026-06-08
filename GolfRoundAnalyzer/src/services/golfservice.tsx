import type { GolfRound } from "../types";

const API_URL = "http://localhost:5183/api";

export const golfService = {
  async getGolfRounds() {
    const response = await fetch(`${API_URL}/golfRounds`);
    return response.json();
  },

  async createGolfRound(round: GolfRound) {
    const response = await fetch(`${API_URL}/golfRounds`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(round),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`API error ${response.status}: ${text}`);
    }

    return response.json();
  }
}