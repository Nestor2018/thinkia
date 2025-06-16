import React from "react";
import { BenefitItem } from "../molecules/BenefitItem";
import "../../styles/components/organisms/_BenefitsSection.scss";
import { LiaIdCard } from "react-icons/lia";
import { GoShieldCheck } from "react-icons/go";
import { MdAccessTime } from "react-icons/md";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { Button } from "../atoms/Button";
import { Text } from "../atoms/Text";

export const BenefitsSection = () => {
  return (
    <section className="benefits">
      <div className="benefits__container">
        <header>
          <Text level={2} weight={600}>
            <span className="highlight">Ventajas</span> de hacer el cambio de{" "}
            <br />
            titularidad online con Tramicar
          </Text>
        </header>

        <ul className="benefits__list">
          <BenefitItem
            icon={<LiaIdCard />}
            title="100% Online"
            description="Identificación y Firma telemática, envío a tu domicilio de tu nuevo Permiso de Circulación."
          />
          <BenefitItem
            icon={<GoShieldCheck />}
            title="Seguro"
            description="Garantizamos la seguridad del proceso, evita fraudes y/o estafas."
          />
          <BenefitItem
            icon={<MdAccessTime />}
            title="Rápido"
            description="En 15 minutos, habrás tramitado la transferencia."
          />
          <BenefitItem
            icon={<HiOutlineComputerDesktop />}
            title="Cómodo"
            description="Sin enviar papeles, sin tener que moverte, desde tu teléfono u ordenador."
          />
        </ul>

        <footer className="benefits__cta">
          <Button label="Realiza tu trámite" />
        </footer>
      </div>
    </section>
  );
};
