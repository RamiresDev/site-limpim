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
        "Frei Gaspar",
        "Fronteira dos Vales",
        "Itambacuri",
        "Ladainha",
        "Machacalis",
        "Malacacheta",
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
        "Felisburgo",
        "Francisco Badaró",
        "Itaobim",
        "Itinga",
        "Jacinto",
        "Jequitinhonha",
        "Joaíma",
        "Jordânia",
        "Medina",
        "Minas Novas",
        "Padre Paraíso",
        "Palmópolis",
        "Pedra Azul",
        "Ponto dos Volantes",
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
        "Alpercata",
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
        "Iapu",
        "Inhapim",
        "Ipaba",
        "Ipatinga",
        "Itabirinha",
        "Itanhomi",
        "Jampruca",
        "João Monlevade",
        "Mendes Pimentel",
        "Mutum",
        "Nova Módica",
        "Pescador",
        "Piedade de Caratinga",
        "Resplendor",
        "Santa Maria do Suaçuí",
        "Santana do Paraíso",
        "São Geraldo do Baixio",
        "São João do Manteninha",
        "São José do Divino",
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
        "Água Boa",
        "Barbacena",
        "Bugre",
        "Congonhas",
        "Diamantina",
        "Guanhães",
        "Itabira",
        "Itamarandiba",
        "José Raydan",
        "Lavras",
        "Mariana",
        "Nova Era",
        "Ouro Branco",
        "Ouro Preto",
        "Peçanha",
        "Presidente Kubitschek",
        "São Domingos da Prata",
        "São João del-Rei",
        "São Sebastião do Maranhão",
        "Senhora de Oliveira",
        "Tiradentes"
      ]
    },

    metropolitana: {
      titulo: "Metropolitana BH",
      cidades: [
        "Belo Horizonte",
        "Betim",
        "Iguatama"
      ]
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