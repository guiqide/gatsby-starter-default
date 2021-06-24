import React, { FC } from 'react';
import { Avator } from '@/components/elements';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub, faTwitter, faWeibo, faZhihu,
} from '@fortawesome/free-brands-svg-icons';
import * as styles from './footer.module.css';

export interface FooterProps {
}
const Footer: FC<FooterProps> = () => {
  const data = useStaticQuery(graphql`
    query SiteAvatorQuery {
      site {
        siteMetadata {
          avator,
          title
        }
      }
      configsYaml {
        github,
        twitter,
        weibo,
        zhihu
      }
    }
  `);

  return (
    <footer className={styles.container}>
      <Avator name={data.site.siteMetadata.title} />
      <div>
        <a href={data.configsYaml.github}>
          <FontAwesomeIcon icon={faGithub} color="#fff" />
        </a>
        <a href={data.configsYaml.twitter}>
          <FontAwesomeIcon icon={faTwitter} color="#fff" />
        </a>
        <a href={data.configsYaml.weibo}>
          <FontAwesomeIcon icon={faWeibo} color="#fff" />
        </a>
        <a href={data.configsYaml.zhihu}>
          <FontAwesomeIcon icon={faZhihu} color="#fff" />
        </a>
      </div>
      <div>
        © 2021 GuiQide, all rights reserved. Made with for a better web.
      </div>
    </footer>
  );
};
export default Footer;
