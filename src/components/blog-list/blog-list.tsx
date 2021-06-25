import React, { FC } from 'react';
import { Link } from 'gatsby';
// import styles from './index.module.less';
interface BlogFile {
  node: {
    name: string
    url: string
  }
}
export interface BlogListProps {
  list?: BlogFile[]
}
const BlogList: FC<BlogListProps> = ({ list }: BlogListProps) => (
  <ul>
    {list && list.map((item) => (
      <li key={item.node.name}>
        <Link to={item.node.url}>{item.node.name}</Link>
      </li>
    ))}
  </ul>
);

export default BlogList;
