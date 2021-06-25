import React, { FC } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './avator.module.scss';

export interface AvatorProps {
  name: string;
}
export const Avator: FC<AvatorProps> = ({ name }: AvatorProps) => (
  <div className={styles.container}>
    <div>
      <StaticImage
        src="../../../images/avator.jpg" alt="avator"
        className={styles.avator}
      />
    </div>
    <span className={styles.name}>{name}</span>
  </div>
);
