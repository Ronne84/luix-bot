const fetch = require('node-fetch')

OPENAI_KEY="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" // Coloque sua key/Token dentro do ""

const ia = async (query) => {
let response = await fetch('https://api.openai.com/v1/completions', {
  method: "POST",
  headers: {
     Accept: "application/json",
     "Content-Type": "application/json",
     Authorization: "Bearer " + OPENAI_KEY,
    },
    body: JSON.stringify({
       model: "text-davinci-003",
       prompt: query,
       max_tokens: 2048, // Tamanho da resposta.
       temperature: 90, // Criatividade da resposta.
  }),
})

let openai = await response.json()
let hasil = []
hasil.push({
  resposta: openai.choices[0].text.trim()
})

return hasil
}

module.exports = { ia }