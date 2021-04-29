import React, { FC } from 'react';
import { Seo, DefaultLayout } from '@/components';
import { graphql, PageProps } from 'gatsby';
// import styles from './index.module.less';
export interface PostProps extends PageProps {
}

const Page: FC<PostProps> = ({ children, data }: PostProps) => {
  console.log(data);
  return (
    <DefaultLayout>
      <Seo title="文章" />
      <article>
        {children}
      </article>
    </DefaultLayout>

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
