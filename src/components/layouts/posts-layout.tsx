import React, { FC, ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';
import DefaultLayout from './default';
import * as layout from './layout.module.css';

const shortcodes = {
  Link,
};
// import styles from './index.module.less';
export interface PostsLayoutProps {
  children: ReactNode
}
const PostsLayout: FC<PostsLayoutProps> = ({ children }: PostsLayoutProps) => {
  console.log(PostsLayout);
  return (
    <DefaultLayout>
      <section className={layout.posts}>
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
      </section>
    </DefaultLayout>
  );
};
export default PostsLayout;
