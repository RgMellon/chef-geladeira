import axios from "axios";

export const apiClarifai = axios.create({
  baseURL: "https://api.clarifai.com",
  headers: {
    Accept: "application/json",
    Authorization: "Key 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",
  },
});
