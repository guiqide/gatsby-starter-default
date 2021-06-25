import React, { FC, ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';
import { Seo } from '@/components';
import DefaultLayout from './default';
import * as layout from './layout.module.scss';

const shortcodes = {
  Link,
};
// import styles from './index.module.less';
export interface PostsLayoutProps {
  children: ReactNode
}
const PostsLayout: FC<PostsLayoutProps> = ({ children }: PostsLayoutProps) => {
  console.log(children);
  return (
    <DefaultLayout>
      <Seo title="文章" />
      <section className={layout.posts}>
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
      </section>
    </DefaultLayout>
  );
};
export default PostsLayout;
