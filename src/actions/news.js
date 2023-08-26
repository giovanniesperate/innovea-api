const axios = require("axios");

module.exports = {
  async get({ dataInicial, dataFinal }) {
    const params = {
      q: "tecnologia",
      language: "pt",
      from: dataInicial ? dataInicial : undefined,
      to: dataFinal ? dataFinal : undefined,
      sortBy: "publishedAt",
      apiKey: process.env.API_KEY,
    };
    const { data } = await axios.get("https://newsapi.org/v2/everything", {
      params,
    });
    return data;
  },
};
