import React from "react";
import { Text } from "../atoms/Text";
import "../../styles/components/molecules/_BenefitItem.scss";

type BenefitItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export const BenefitItem: React.FC<BenefitItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <article className="benefit-item">
      <header className="benefit-item__icon">{icon}</header>
      <Text level={3} color="gray" weight="bold" font="dm-sans">
        {title}
      </Text>
      <Text level={6} color="gray" weight={400} font="dm-sans" className="mt-2">
        {description}
      </Text>
    </article>
  );
};
