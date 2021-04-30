import React, { FC } from 'react';
import { Link } from 'gatsby';
// import styles from './index.module.less';
interface BlogFile {
  name: string
  url: string
}
export interface BlogListProps {
  list?: BlogFile[]
}
const BlogList: FC<BlogListProps> = ({ list }: BlogListProps) => (
  <ul>
    {list && list.map((item) => (
      <li key={item.name}>
        <Link to={item.url}>{item.name}</Link>
      </li>
    ))}
  </ul>
);

export default BlogList;
