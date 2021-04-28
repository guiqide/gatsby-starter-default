import React, { FC } from 'react';
import { Seo, Layout } from '@/components';
import { graphql, PageProps } from 'gatsby';
// import styles from './index.module.less';
export interface PostProps extends PageProps {
}

const Page: FC<PostProps> = ({ children, data }: PostProps) => {
  console.log(data);
  return (
    <Layout>
      <Seo title="文章" />
      <article>
        {children}
      </article>
    </Layout>

  );
};
export default Page;

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
