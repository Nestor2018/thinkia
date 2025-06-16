import React from "react";
import "../../styles/components/organisms/_Footer.scss";
import { Text } from "../atoms/Text";
import Tramicar from "../../assets/tramicar.svg";
import LineaDirecta from "../../assets/linea-directa.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Text
          level={7}
          color="footer"
          weight={400}
          font="dm-sans"
          className="footer__text"
        >
          *Línea Directa asume únicamente los gastos de gestión del servicio
          "transferencia estándar". En el caso de que desees contratar nuestro
          servicio "transferencia express", será necesario abonar la cantidad
          adicional correspondiente, 15€, la cual no está cubierta por Línea
          Directa.
          <br />
          <br /> * TRAMICAR es una empresa dedicada a representación de las
          partes involucradas ante la Dirección General de Tráfico. Para el
          servicios de "transferencia estándar", Tramicar lleva a cabo la
          gestión de expediente con la administración pública, ejecutando el
          trámite en nombre de las partes interesadas. La Dirección General de
          Tráfico enviará la documentación provisional y definitiva según sus
          procesos. Los plazos de entrega del nuevo permiso de circulación
          oscilan entorno a 3 - 6 semanas, no obstante, Tramicar no se
          responsabiliza ante cualquier demora por parte de la administración
          pública. En el caso de la contratación del servicio de "transferencia
          express", Tramicar trabaja con las mejores gestorías colegiadas, lo
          cual nos permite llevar a cabo la gestión del expediente con plazos
          más reducidos, estos oscilan entorno a 7-15 días. Tramicar no se
          responsabiliza ante cualquier demora por parte de la gestoría en
          cuestión.
          <br />
          <br /> La documentación entregada por TRAMICAR al final del flujo web
          (certificado de operaciones) es un documento con validez jurídica que
          acredita la compraventa realizada entre las partes involucradas
          proporcionando cobertura legal desde el primer momento.
        </Text>
        <div className="footer__logos">
          <div className="footer__logos-container">
            <img
              src={Tramicar}
              alt="Tramicar Logo"
              className="footer__logos-tramicar"
            />

            <img
              src={LineaDirecta}
              alt="Linea-directa Logo"
              className="footer__logos-linea"
            />
          </div>

          <div className="footer__logos-container-text">
            <nav aria-label="Footer links">
              <Text level={7} color="footer-gray" weight={400} font="dm-sans">
                Política de Privacidad | Política de Cookies | Aviso Legal |
                Condiciones de Uso
              </Text>
            </nav>
            <address>
              <Text
                level={6}
                color="footer-gray"
                weight={400}
                font="dm-sans"
                className="footer__logos-text"
              >
                ©2023 Tramicar. Todos los derechos reservados.{" "}
              </Text>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
};
