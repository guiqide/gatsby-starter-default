import React, { FC } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './avator.module.css';

export interface AvatorProps {
  name: string;
}
export const Avator: FC<AvatorProps> = ({ name }: AvatorProps) => {
  console.log(Avator);
  return (
    <div className={styles.container}>
      <StaticImage
        src="../../../images/avator.jpg" alt="avator"
        className={styles.avator}
      />
      <span className={styles.name}>{name}</span>
    </div>
  );
};
