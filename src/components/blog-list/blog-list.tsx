import React, { FC } from 'react';
// import styles from './index.module.less';
interface BlogFile {
  node: {
    id: string
    name: string
    absolutePath: string
  }
}
export interface BlogListProps {
  list?: BlogFile[]
}
const BlogList: FC<BlogListProps> = ({ list }: BlogListProps) => (
  <ul>
    {list && list.map((item) => (
      <li key={item.node.id}>{item.node.name}</li>
    ))}
  </ul>
);

export default BlogList;
