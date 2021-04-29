import React, { FC, ReactNode } from 'react';
import DefaultLayout from './default';
// import styles from './index.module.less';
export interface PostsLayoutProps {
  children: ReactNode
}
const PostsLayout: FC<PostsLayoutProps> = ({ children }: PostsLayoutProps) => {
  console.log(PostsLayout);
  return (
    <DefaultLayout>
      <section>
        {children}
      </section>
    </DefaultLayout>
  );
};
export default PostsLayout;
