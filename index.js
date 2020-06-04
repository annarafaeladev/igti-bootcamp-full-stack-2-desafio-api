const express = require("express");

const app = express();

app.use(express.json());

const fs = require("fs");

function getCidades() {
  const cidades = fs.readFileSync("./arquivos/Cidades.json", "utf-8");

  return JSON.parse(cidades);
}

function getEstados() {
  const estados = fs.readFileSync("./arquivos/Estados.json", "utf-8");
  return JSON.parse(estados);
}

function citiesUF() {
  let arrayUF = [];
  let initialID = 1;
  const estados = getEstados();
  estados.find((uf) => {
    if (initialID < 28) {
      if (parseInt(uf.ID, 10) === initialID) {
        let cidades = fs.readFileSync(
          `cidades-estado/${uf.Sigla}.json`,
          "utf-8"
        );
        arrayUF.push({
          sigla: uf.Sigla,
          total: Object.keys(JSON.parse(cidades)).length,
        });
        initialID++;
      }
    }
  });
  return arrayUF;
}

function createFileUF() {
  const cidades = getCidades();
  const estados = getEstados();

  let initialID = 1;
  estados.find((uf) => {
    if (initialID < 28) {
      if (parseInt(uf.ID, 10) === initialID) {
        let cidade = cidades.filter((cidade) => {
          return parseInt(cidade.Estado, 10) === initialID;
        });
        fs.writeFileSync(
          `cidades-estado/${uf.Sigla}.json`,
          JSON.stringify(cidade)
        );
        initialID += 1;
      }
    }
  });

  return citiesUF();
}

function getQtdCitiesUF(uf) {
  // prettier-ignore
  const ufList = fs.readFileSync(`cidades-estado/${uf.toUpperCase()}.json`,
    "utf-8"
  );
  const json = JSON.parse(ufList);
  return Object.keys(json).length;
}

function bigLegthNameCityUF() {
  let arrayUF = [];
  let initialID = 1;

  const estados = getEstados();
  estados.find((uf) => {
    if (initialID < 28) {
      if (parseInt(uf.ID, 10) === initialID) {
        let lengthName = 0;
        let lengthCurrentName = 0;
        let oldName = null;
        let arrayName = [];
        let cidades = fs.readFileSync(
          `cidades-estado/${uf.Sigla}.json`,
          "utf-8"
        ); //
        JSON.parse(cidades).filter((city) => {
          lengthCurrentName = city.Nome.length;
          if (lengthCurrentName > lengthName) {
            oldName = city.Nome;
            lengthName = lengthCurrentName;
          } else {
            if (lengthCurrentName === lengthName) {
              arrayName = [city.Nome, oldName];

              arrayName = arrayName.sort();
              oldName = arrayName[0];
              lengthName = arrayName[0].length;
            }
          }
        });
        arrayUF.push({
          uf: uf.Sigla,
          nome: oldName,
          length: lengthName,
        });
        initialID++;
      }
    }
  });

  return arrayUF;
}

function smallLegthNameCityUF() {
  let arrayUF = [];
  let initialID = 1;

  const estados = getEstados();
  estados.find((uf) => {
    if (initialID < 28) {
      if (parseInt(uf.ID, 10) === initialID) {
        let lengthName = 30;
        let lengthCurrentName = 0;
        let oldName = null;
        let arrayName = [];
        let cidades = fs.readFileSync(
          `cidades-estado/${uf.Sigla}.json`,
          "utf-8"
        ); //
        JSON.parse(cidades).filter((city) => {
          lengthCurrentName = city.Nome.length;
          if (lengthCurrentName < lengthName) {
            oldName = city.Nome;
            lengthName = lengthCurrentName;
          } else {
            if (lengthCurrentName === lengthName) {
              arrayName = [city.Nome, oldName];

              arrayName = arrayName.sort();
              oldName = arrayName[0];
              lengthName = arrayName[0].length;
            }
          }
        });
        arrayUF.push({
          uf: uf.Sigla,
          nome: oldName,
          length: lengthName,
        });

        initialID++;
      }
    }
  });

  return arrayUF;
}
function sortAsc() {
  let data = citiesUF().sort((a, b) => a.total - b.total);
  let initialID = 1;
  let result = [];
  data.filter((uf) => {
    if (initialID < 6) {
      result.push(`${uf.sigla} - ${uf.total}`);
      initialID++;
    }
  });

  return result.reverse();
}

function sortDesc() {
  let data = citiesUF().sort((a, b) => b.total - a.total);
  let initialID = 1;
  let result = [];
  data.filter((uf) => {
    if (initialID < 6) {
      result.push(`${uf.sigla} - ${uf.total}`);
      initialID++;
    }
  });

  return result;
}

app.get("/cidade/index", (_, res) => {
  //ex: localhost:3456/create -> retorna os todos as cidades do arquivo
  res.send(getCidades());
});

app.get("/estado/index", (_, res) => {
  //ex: localhost:3456/create -> retorna os todos estados do arquivo
  res.send(getEstados());
});

app.get("/create", (_, res) => {
  //ex: localhost:3456/create -> cria os arquivos json de cada estado
  return res.json({
    status: true,
    message: "Arquivos JSON de cada estado criado com sucesso",
    result: createFileUF(),
  });
});

app.get("/estado/:uf", (req, res) => {
  // ex: localhost:3456/estado/MG ou localhost:3456/estado/mg
  res.json({
    result: `Total de cidade do estado ${req.params.uf.toUpperCase()} = ${getQtdCitiesUF(
      req.params.uf
    )}`,
  });
});

app.get("/estado/index/order-crescente", (_, res) => {
  //ex: localhost:3456//estado/index/order-crescente ->
  res.send(sortDesc());
});

app.get("/estado/index/order-descrescente", (_, res) => {
  //ex: localhost:3456//estado/index/order-descrescente ->
  res.send(sortAsc());
});

app.get("/biglengthName", (_, res) => {
  // ex: localhost:3456/smallLengthName/name -> retorna um array com a cidade de maior nome de cada estado
  let result = [];
  bigLegthNameCityUF().filter((item) => {
    result.push(`${item.nome} - ${item.uf} - ${item.length}`);
  });
  res.send(result);
});

app.get("/smalllengthName", (_, res) => {
  // ex: localhost:3456/smallLengthName/name -> retorna um array com a cidade de menor nome de cada estado
  let result = [];
  smallLegthNameCityUF().filter((item) => {
    result.push(`${item.nome} - ${item.uf} - ${item.length}`);
  });
  res.send(result);
});

app.get("/biglengthName/name", (_, res) => {
  // ex: localhost:3456/biglengthName/name -> retorna a cidade de maior nome dentre os elementodo do
  // array de cidades de maior nome de cada estado
  let result;
  let name = 0;

  bigLegthNameCityUF().find((item) => {
    if (item.nome.length > name) {
      name = item.nome.length;
      result = `${item.nome} - ${item.uf}`;
    }
  });

  res.json({ result });
});

app.get("/smalllengthName/name", (_, res) => {
  // ex: localhost:3456/smallLengthName/name -> retorna a cidade de menor nome dentre os elementos do
  // array de cidades de menor nome de cada estado
  let result;
  let name = 15;

  smallLegthNameCityUF().find((item) => {
    if (item.nome.length < name) {
      name = item.nome.length;
      result = `${item.nome} - ${item.uf}`;
    }
  });

  res.json({ result });
});

app.get("/index", (_, res) => {
  //ex: localhost:3456/index -> retorna , total de estados, o 5 estados de maior quantidad e
  // createFileUF();
  res.json({
    totalCidade: getCidades(), //total de cidads
    totalEstados: getEstados(), //total de estados
    sortDesc: sortDesc(), // Retorna o 5 estado que mais possui cidades, em ordem descrescente da quantidade de cidade
    sortAsc: sortAsc(), // Retorna o 5 estado que mais possui menor cidades, em ordem descrescente da quantidade de cidade
    citiesUF: citiesUF(), // Retorda todos os estados com a quantidade de cidade correspondente em ordenado de forma alfabetica a partir do UF
  });
});

app.listen(3456, () => console.log("Starded API"));
