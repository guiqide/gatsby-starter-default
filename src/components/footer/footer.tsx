import React, { FC } from 'react';
import { Avator } from '@/components/elements';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub, faTwitter, faWeibo, faZhihu,
} from '@fortawesome/free-brands-svg-icons';
import * as styles from './footer.module.scss';

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
      allLinkYaml {
        edges {
          node {
            github,
            twitter,
            weibo,
            zhihu
          }
        }
      }
    }
  `);

  return (
    <footer className={styles.container}>
      <Avator name={data.site.siteMetadata.title} />
      <br />
      <div>
        <a href={data.allLinkYaml.edges[0].node.github} className={styles.btnRound}>
          <FontAwesomeIcon icon={faGithub} color="#fff" />
        </a>
        <a href={data.allLinkYaml.edges[0].node.twitter} className={styles.btnRound}>
          <FontAwesomeIcon icon={faTwitter} color="#fff" />
        </a>
        <a href={data.allLinkYaml.edges[0].node.weibo} className={styles.btnRound}>
          <FontAwesomeIcon icon={faWeibo} color="#fff" />
        </a>
        <a href={data.allLinkYaml.edges[0].node.zhihu} className={styles.btnRound}>
          <FontAwesomeIcon icon={faZhihu} color="#fff" />
        </a>
      </div>
      <div className={styles.credits}>
        © 2021 GuiQide, all rights reserved. Made with for a better web.
      </div>
    </footer>
  );
};
export default Footer;
