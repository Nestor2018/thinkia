import React from "react";
import "../../styles/components/molecules/_StepItem.scss";
import { Text } from "../atoms/Text";

type StepItemProps = {
  number: number;
  title: string;
  description: string;
  highlightedText?: string;
};

export const StepItem: React.FC<StepItemProps> = ({
  number,
  title,
  description,
  highlightedText,
}) => {
  const renderDescription = () => {
    if (!highlightedText) return description;

    const parts = description.split(highlightedText);
    return (
      <>
        {parts[0]}
        <Text level={6} color="primary" font="dm-sans" weight={400}>
          {highlightedText}
        </Text>
        {parts[1]}
      </>
    );
  };
  return (
    <article className="step-item">
      <header>
        <Text
          level={4}
          weight="bold"
          font="dm-sans"
          className="step-item__title"
        >
          {title}
        </Text>
      </header>
      <aside className="step-item__number mt-4">
        <Text level={8} color="secondary" font="dm-sans" weight={400}>
          {number}
        </Text>
      </aside>
      <section>
        <Text level={6} weight={400} font="dm-sans">
          {renderDescription()}
        </Text>
      </section>
    </article>
  );
};
