const express = require("express");
const router = express.Router();

// const fetchAPI = async () => {
//     const response = await axios.get("https://api.open-meteo.com/v1/forecast?latitude=-12.9711&longitude=-38.5108&hourly=temperature_2m,apparent_temperature&timezone=America%2FSao_Paulo&forecast_days=1"); //Faz uma requisição a rota através do axios para o node.
//     console.log(response);
//   }
//   useEffect(() => {
//     fetchAPI();
//   }, []);

router.get("/", (request, response) =>{ //Não precisa definir o /routaAqui porque já é feito no app.use()
    response.setHeader("Referrer-Policy", "no-referrer"); // ou outra opção desejada
    response.json({"fruits": ["apple", "orange", "banana"]});
});

module.exports = router;