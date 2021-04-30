import React, { FC } from 'react';
import { PageProps, graphql } from 'gatsby';

import { DefaultLayout, Seo, BlogList } from '@/components';

export interface IEdge {
  node: {
    id: string
    name: string
    absolutePath: string
  }
}
export interface IAllFiles {
  allFile: {
    edges: IEdge[]
  }
}
interface IndexProps extends PageProps {
  data: {
    allAllPostsYaml: IAllPostsYaml
  }
}

interface IYamlNode {
  id: string
  name: string
  url: string
}
interface IAllPostsYaml {
  nodes: IYamlNode[]
}
const IndexPage: FC<IndexProps> = ({ data }: IndexProps) => {
  console.log('index');
  console.log(data?.allAllPostsYaml.nodes);

  return (
    <DefaultLayout>
      <Seo title="首页" />
      <section>
        <BlogList list={data?.allAllPostsYaml.nodes} />
      </section>
    </DefaultLayout>
  );
};

export default IndexPage;

export const query = graphql`
  query BlogsQuery {
    allAllPostsYaml {
      nodes {
        id
        name
        url
      }
    }
  }
`;
