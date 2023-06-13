// Visite nosso site: https://nezsab-apis.xyz/
// Scrapper desenvolvida por @nezsab-team.exe
// Team: Vitinho⧽Daniel⧽Dayane⧽Yoshi⧽Anônimo 

//=============> ======== <==============\\

const {
  axios,
  cheerio,
  encodeUrl,
  fs,
  linkfy,
  qs,
  randomIntFromInterval,
  removerAcentos,
  useragent_1,
  default_criador
} = require('./defaults.js');

//==========> Lojas Americanas <===========\\


const AmericanasSearch = (q) => new Promise((resolve, reject) => {
  axios.get(`https://www.americanas.com.br/busca/${removerAcentos(q)}`, {
      headers: {
        ...useragent_1
      }
    })
    .then((res) => {
      const $ = cheerio.load(res.data);
      const dados = [];
      $('div[class="col__StyledCol-sc-1snw5v3-0 fSocOq src__Card-sc-1c6bco3-2 geHCaf"]').each((i, e) => {
        dados.push({
          produto: $(e).find('h3:first').text(),
          imagem: $(e).find('div > picture > source').attr('srcset') || $(e).find('img:first').attr('src'),
          valor: $(e).find('span[class="src__Text-sc-154pg0p-0 price__PromotionalPrice-sc-1tree3h-1 kPoyca"]').text() || $(e).find('span[class="src__Text-sc-154pg0p-0 price__Price-sc-1tree3h-0 jVOqbP"]').text(),
          link: 'https://www.americanas.com.br' + $(e).find('a:first').attr('href')
        });
      });
      resolve({
        status: res.status,
        criador: default_criador,
        resultado: dados
      });
    })
    .catch((e) => {
      reject(e)
    });
});


//=============> Submarino <==============\\

const SubmarinoSearch = (q) => new Promise((resolve, reject) => {
  axios.get(`https://www.submarino.com.br/busca/${removerAcentos(q)}`, {
      headers: {
        ...useragent_1
      }
    })
    .then((res) => {
      const $ = cheerio.load(res.data);
      const dados = [];
      $('div[class="col__StyledCol-sc-1snw5v3-0 fSocOq src__Card-sc-1aktmdp-2 clCGoY"]').each((i, e) => {
        dados.push({
          produto: $(e).find('h3:first').text(),
          imagem: $(e).find('div > picture > source').attr('srcset') || $(e).find('img:first').attr('src'),
          valor: $(e).find('span[class="src__Text-sc-154pg0p-0 price__PromotionalPrice-sc-dkjci0-1 bYpEZF"]').text() || $(e).find('span[class="src__Text-sc-154pg0p-0 price__Price-sc-dkjci0-0 evgOfk"]').text(),
          link: 'https://www.submarino.com.br' + $(e).find('a:first').attr('href')
        });
      });
      resolve({
        status: res.status,
        criador: default_criador,
        resultado: dados
      });
    })
    .catch((e) => {
      reject(e)
    });
});

module.exports = {}
module.exports.AmericanasSearch = AmericanasSearch
module.exports.SubmarinoSearch = SubmarinoSearch