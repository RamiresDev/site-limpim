document.addEventListener("DOMContentLoaded", function () {
  const regioes = {
    mucuri: {
      titulo: "Vale do Mucuri",
      cidades: [
        "Águas Formosas",
        "Ataléia",
        "Bertópolis",
        "Carlos Chagas",
        "Catuji",
        "Crisólita",
        "Franciscópolis",
        "Frei Gaspar",
        "Fronteira dos Vales",
        "Ladainha",
        "Machacalis",
        "Malacacheta",
        "Mucuri (distrito de T. Otoni)",
        "Nanuque",
        "Novo Oriente de Minas",
        "Ouro Verde de Minas",
        "Pavão",
        "Poté",
        "Serra dos Aimorés",
        "Teófilo Otoni",
        "Umburatiba"
      ]
    },

    jequitinhonha: {
      titulo: "Vale do Jequitinhonha",
      cidades: [
        "Almenara",
        "Angelândia",
        "Araçuaí",
        "Bandeira",
        "Berilo",
        "Capelinha",
        "Caraí",
        "Diamantina",
        "Felisburgo",
        "Francisco Badaró",
        "Itamarandiba",
        "Itaobim",
        "Itinga",
        "Jacinto",
        "Jequitinhonha",
        "Joaíma",
        "Jordânia",
        "Medina",
        "Minas Novas",
        "Novo Cruzeiro",
        "Padre Paraíso",
        "Palmópolis",
        "Pedra Azul",
        "Ponto dos Volantes",
        "Presidente Kubitschek",
        "Rio do Prado",
        "Rubim",
        "Santa Maria do Salto",
        "Santo Antônio do Jacinto",
        "Turmalina"
      ]
    },

    riodoce: {
      titulo: "Vale do Rio Doce",
      cidades: [
        "Água Boa",
        "Alpercata",
        "Bugre",
        "Campanário",
        "Caratinga",
        "Central de Minas",
        "Conselheiro Pena",
        "Coronel Fabriciano",
        "Cuparaque",
        "Dom Cavati",
        "Engenheiro Caldas",
        "Fernandes Tourinho",
        "Frei Inocêncio",
        "Galiléia",
        "Goiabeira",
        "Governador Valadares",
        "Guanhães",
        "Iapu",
        "Inhapim",
        "Ipaba",
        "Ipanema",
        "Ipatinga",
        "Itabirinha",
        "Itambacuri",
        "Itanhomi",
        "Jampruca",
        "José Raydan",
        "Mantena",
        "Mathias Lobato",
        "Mendes Pimentel",
        "Mutum",
        "Nova Módica",
        "Peçanha",
        "Pescador",
        "Piedade de Caratinga",
        "Resplendor",
        "Santa Maria do Suaçuí",
        "Santana do Paraíso",
        "São Geraldo do Baixio",
        "São João do Manteninha",
        "São José do Divino",
        "São Sebastião do Maranhão",
        "Sardoá",
        "Sobrália",
        "Tarumirim",
        "Timóteo",
        "Virginópolis"
      ]
    },

    zonamata: {
      titulo: "Zona da Mata",
      cidades: [
        "Além Paraíba",
        "Barbacena",
        "Carangola",
        "Cataguases",
        "Coimbra",
        "Ervália",
        "Espera Feliz",
        "Lajinha",
        "Leopoldina",
        "Manhuaçu",
        "Manhumirim",
        "Matipó",
        "Muriaé",
        "Piraúba",
        "Ponte Nova",
        "Raul Soares",
        "Rio Pomba",
        "São João Nepomuceno",
        "Tocantins",
        "Ubá",
        "Viçosa",
        "Visconde do Rio Branco"
      ]
    },

    central: {
      titulo: "Região Central",
      cidades: [
        "Congonhas",
        "Itabira",
        "Mariana",
        "Nova Era",
        "Ouro Branco",
        "Ouro Preto",
        "São Domingos da Prata",
        "São João del-Rei",
        "Senhora de Oliveira",
        "Tiradentes"
      ]
    },

    metropolitana: {
      titulo: "Metropolitana BH",
      cidades: [
        "Belo Horizonte",
        "Betim",
        "João Monlevade"
      ]
    },

    norte: {
      titulo: "Norte de Minas",
      cidades: [
        "São João das Missões"
      ]
    },

    sul: {
      titulo: "Sul de Minas",
      cidades: ["Lavras"]
    },

    centroOeste: {
      titulo: "Centro-Oeste",
      cidades: ["Iguatama"] 
    }


  };

  const botoes = document.querySelectorAll(".regiao-btn");
  const modal = document.getElementById("regiaoModal");
  const titulo = document.getElementById("modalRegiaoTitulo");
  const lista = document.getElementById("modalCidades");
  const fechar = document.getElementById("fecharModal");

  function abrirModal(chave) {
    const regiao = regioes[chave];

    if (!regiao) return;

    titulo.textContent = regiao.titulo;

    lista.innerHTML = regiao.cidades
      .map(cidade => `<span>${cidade}</span>`)
      .join("");

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function fecharModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  botoes.forEach(botao => {
    botao.addEventListener("click", function () {
      abrirModal(this.dataset.regiao);
    });
  });

  fechar.addEventListener("click", fecharModal);

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      fecharModal();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      fecharModal();
    }
  });
});