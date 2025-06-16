import React from "react";
import { Text } from "../atoms/Text";
import { Button } from "../atoms/Button";
import { Logo } from "../atoms/Logo";
import "../../styles/components/organisms/_HeroSection.scss";
import heroIllustration from "../../assets/hero-illustration.svg"; // usa tu imagen

export const HeroSection = () => {
  return (
    <section className="hero" role="banner" aria-label="Hero principal">
      <Logo />
      <div className="hero__container">
        <div className="hero__text">
          <header>
            <Text level={1} className="mb-5">
              <span className="highlight">Esto es una prueba</span> para
              demostrar tus capacidades de{" "}
              <span className="highlight">maquetación</span>
            </Text>
          </header>
          <main>
            <Text level={5} color="primary" font="dm-sans" weight="normal">
              Solo pagarás los impuestos (ITP) y tasas (DGT).
            </Text>
            <Text
              level={5}
              color="primary"
              font="dm-sans"
              weight="bold"
              className="mb-4"
            >
              Línea Directa te regala el 100% de los gastos de gestión*
            </Text>
            <Text level={4} font="dm-sans" weight={400} className="mb-2">
              En Tramicar, tenemos un equipo de profesionales listos para
              gestionar el cambio de nombre de tu vehículo de manera
              completamente online, desde cualquier lugar y en cualquier momento
              del año.
            </Text>
            <Button label="Realiza tu trámite ahora" className="ml-3" />
          </main>
        </div>
        <div className="hero__image">
          <img
            src={heroIllustration}
            alt="Ilustración de servicios de tramitación de vehículos"
            role="presentation"
          />
        </div>
      </div>
    </section>
  );
};
