import * as React from "react";
import { Button, Card, Text } from 'react-native-paper';
import Card_noticias from "../components/Card_noticias";
import { ScrollView } from "react-native-gesture-handler";

const Noticias=()=>{

return(

    <>
    <ScrollView>
<Card_noticias 
   urlCover={
    "https://media.primicias.ec/2024/07/03113434/banecuador-2024.jpg"
  }
  textContent={
    "Esto le costará USD 18 millones al banco, dijo el Gobierno de Daniel Noboa."
  }
  textTitle={
    "BanEcuador condonará deudas por segunda vez en dos años, pese a pérdidas y alta morosidad"
  }
  urlSource={
    "https://www.primicias.ec/noticias/economia/banecuador-perdidas-morosidad-deudas-vencidas-condonacion/"
  }
  fecha={"Actualizado el 4 de julio, 2024"}


>

</Card_noticias>
      <Card_noticias
      urlCover={
        "https://www.elcomercio.com/wp-content/uploads/2024/06/alimentos-ley-1024x683.jpg"
      }
      textContent={
        "Comercializar en espacios públicos la leche cruda extraída directamente del animal no humano y cocinar o colocar animales no humanos vivos vertebrados o invertebrados en recipientes de agua hirviendo.(...)"
      }
      textTitle={
        "Estas son las 34 prohibiciones que constan en proyecto de ley que plantea no exhibir animales crudos y cocinados"
      }
      urlSource={
        "https://www.eluniverso.com/noticias/economia/ley-defensa-derechos-animales-ecuador-prohibiciones-asados-hornado-nota/"
      }
      fecha={"Actualizado el 13 de junio, 2024"}
    ></Card_noticias>
    </ScrollView>

</>

)

}


export default Noticias