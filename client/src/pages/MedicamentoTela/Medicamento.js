import React, { useCallback, useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { EmployeeList } from "./EmployeeList";
import { AntDesign } from "@expo/vector-icons";
import { api } from "../../lib/api";
import { useFocusEffect } from "@react-navigation/native";

export function Medicamento() {
  const [itens, setItens] = useState([
    {
      key: 1,
      name: "Abretia",
      role: "",
      image:
        "https://www.farmaciasespecializadas.com/ccstore/v1/images/?source=/file/v6398369037751509459/products/28938.png&height=475&width=475",
    },
    {
      key: 2,
      name: "Baclofen",
      role: "",
      image:
        "https://www.teutoonline.com.br/fotos/4141d8506e78b751e86d53b441b3c414.png",
    },
    {
      key: 3,
      name: "Cabergolina",
      role: "",
      image:
        "https://santaluciadrogaria.vtexassets.com/arquivos/ids/165455-800-1067?v=637638188672200000&width=800&height=1067&aspect=true",
    },
    {
      key: 4,
      name: "Daforin",
      role: "",
      image: "https://cdn-cosmos.bluesoft.com.br/products/7894916201353",
    },
    {
      key: 5,
      name: "Ecalta",
      role: "",
      image: "https://cendis.com.gt/wp-content/uploads/2023/04/1001270_2.webp",
    },
    {
      key: 6,
      name: "Famox",
      role: "",
      image:
        "https://santaluciadrogaria.vtexassets.com/arquivos/ids/155822-800-1067?v=637637939673130000&width=800&height=1067&aspect=true",
    },
    {
      key: 7,
      name: "Gabapentina",
      role: "",
      image:
        "https://d1xdssnpeez8k0.cloudfront.net/Custom/Content/Products/12/28/12280_gabapentina-biosintetica-300mg-caixa-com-30-capsulas-p7896181904946_l1_637217822250143231.jpg",
    },
    {
      key: 8,
      name: "Haldol",
      role: "",
      image: "https://cdn-cosmos.bluesoft.com.br/products/7896212479603",
    },
    {
      key: 9,
      name: "IbanUno",
      role: "",
      image:
        "https://www.sbel.org.br/image/cache/catalog/produtos/Medicamentos/IbanUno%20-%20Ibandronato%20de%20S%C3%B3dio%20150mg%20-%201%20C%C3%A1psula-300x300.jpg",
    },
    {
      key: 10,
      name: "Jetrea",
      role: "",
      image: "https://qtxasset.com/quartz/qcloud5/media/image/jetrea.jpg",
    },
    {
      key: 11,
      name: "Kaletra",
      role: "",
      image:
        "https://www.abbvie.pt/our-science/products/Kaletra/_jcr_content/root/container/container/row/par_1/image_669513206.coreimg.85.1024.png/1634216511814/5-kaletra-100mg.png",
    },
    {
      key: 12,
      name: "Lac 0",
      role: "",
      image:
        "https://uploads.consultaremedios.com.br/product_variation_images/full/6d49487b4339d5817f07b03c56f3dd28457df25d.jpg?1621437628 ",
    },
    {
      key: 13,
      name: "Maleato de dexclorfeniramina",
      role: "",
      image:
        "https://uploads.consultaremedios.com.br/product_variation_images/full/171a080c381c1ed5c399971d9128859efdd59c09.jpg?1677269310",
    },
    {
      key: 14,
      name: "Naproxeno",
      role: "",
      image:
        "https://d1xdssnpeez8k0.cloudfront.net/Custom/Content/Products/16/30/16305_naproxeno-sodico-neo-quimica-550mg-caixa-com-10-comprimidos-revestidos-p7896714214405_z1_637217824196322710.jpg",
    },
    {
      key: 15,
      name: "Ofolato",
      role: "",
      image:
        "https://araujo.vteximg.com.br/arquivos/ids/4112629-1000-1000/07896094916203.jpg?v=637630915338930000",
    },
    {
      key: 16,
      name: "PantoCal",
      role: "",
      image:
        "https://beta.cruzverde.cl/on/demandware.static/-/Sites-masterCatalog_Chile/default/dw5a1c4ba3/images/large/276254-pantocal-comprimido-recubierto-enterico-28-unidades-pantoprazol-40-mg.jpg",
    },
    {
      key: 17,
      name: "Quadriderm",
      role: "",
      image:
        "https://www.cliquefarma.com.br/blog/wp-content/uploads/2015/05/quadriderm.jpg",
    },
    {
      key: 18,
      name: "Ramipril",
      role: "",
      image:
        "https://www.crescentpharma.com/wp-content/uploads/2020/07/Ramipril-2.5mg-Capsules_28s-2.png",
    },
    {
      key: 19,
      name: "Saizen",
      role: "",
      image:
        "https://calm-medical.com/wp-content/uploads/2019/09/ApplicationFrameHost_LhaRW2Lokm-1024x473.png ",
    },
    {
      key: 20,
      name: "Tandriflan",
      role: "",
      image:
        "https://santaluciadrogaria.vtexassets.com/arquivos/ids/164927/7896006234524.png?v=637638175426270000",
    },
    {
      key: 21,
      name: "Ulcerocin",
      role: "",
      image:
        "https://santaluciadrogaria.vtexassets.com/arquivos/ids/159782-514-514?v=637638046526430000&width=514&height=514&aspect=true",
    },
    {
      key: 22,
      name: "Vabam",
      role: "",
      image:
        "https://www.sbel.org.br/image/cache/catalog/produtos/Medicamentos/Vabam%20-%20Rivaroxabana%2015mg%20-%205%20Comprimidos-1000x1000.jpeg ",
    },
    {
      key: 23,
      name: "Waryz",
      role: "",
      image:
        "https://images.tcdn.com.br/img/img_prod/745294/waryz_450mg_50mg_com_60_comprimidos_cimed_5883_1_f677f10075db1a1af111dbef5299ef1b.jpg",
    },
    {
      key: 24,
      name: "Xarope 44E",
      role: "",
      image:
        "https://drogariasp.vteximg.com.br/arquivos/ids/376207-1000-1000/Xarope-Guaifenesina-44E-Vick-120ml-Drogaria-SP-11126--2-.jpg?v=637051007092530000 ",
    },
    {
      key: 25,
      name: "Ylana",
      role: "",
      image:
        "https://santaluciadrogaria.vtexassets.com/arquivos/ids/163743-800-1067?v=637638145307830000&width=800&height=1067&aspect=true",
    },
    {
      key: 26,
      name: "Zarmine",
      role: "",
      image:
        "https://santaluciadrogaria.vtexassets.com/arquivos/ids/162436-800-1067?v=637638108336230000&width=800&height=1067&aspect=true",
    },
  ]);

  useFocusEffect(useCallback(() => {
    api.get("/favoritos")
      .then(({ data }) => {

        const lista = itens.map((item) => ({
          ...item,
          favorited: data.some(d => d.nome.toLowerCase() === item.name.toLowerCase())
        }));

        setItens(lista)
      })

  }, []));

  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <AntDesign name="search1" size={24} color="black" />
        <TextInput style={styles.footerText} placeholder="Pesquisar" />
      </View>
      <EmployeeList data={itens} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  footer: {
    height: 90,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderTopColor: "#ddd",
    flexDirection: "row",
    padding: 25,
  },
  footerText: {
    marginLeft: 25,
    justifyContent: "center",
  },
});
