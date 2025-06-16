import React from "react";
import { StepItem } from "../molecules/StepItem";
import { Button } from "../atoms/Button";
import { Text } from "../atoms/Text";
import "../../styles/components/organisms/_StepSection.scss";

export const StepsSection = () => {
  return (
    <section className="steps" aria-labelledby="steps-title">
      <div className="steps__container">
        <Text level={2}>
          <span className="highlight">Pasos</span> para hacer la transferencia{" "}
          <br />
          de tu coche con nosotros
        </Text>

        <div className="steps__list">
          <div className="steps__timeline" role="list">
            <StepItem
              number={1}
              title="Matrícula y datos"
              description="Ingresa la matrícula del coche, comunidad autónoma del comprador, precio de venta del coche, y tus datos básicos de contacto."
            />
            <StepItem
              number={2}
              title="Presupuesto y pago"
              description="¡Calculamos tu presupuesto al momento! Solo pagarás las tasas DGT e impuestos ITP. Se aplicará tu descuento automático y continúa para realizar el pago."
              highlightedText="Solo pagarás las tasas DGT e impuestos ITP"
            />
            <StepItem
              number={3}
              title="Identificación biométrica"
              description="Es hora de identificar vuestras identidades mediante la captura de ambos lados del DNI/NIE y un reconocimiento facial.
 ¡100% online!"
            />
            <StepItem
              number={4}
              title="Firma electrónica"
              description="Firma digitalmente los documentos. ¡Y listo! Tramicar se encarga de la gestión con la DGT y de enviarte tu nuevo permiso de circulación a casa."
            />
          </div>
        </div>

        <div className="steps__cta">
          <Button label="Realiza tu trámite" />
        </div>
      </div>
    </section>
  );
};
