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
    allPostYaml: IAllPostsYaml
  }
}

interface IYamlNode {
  node: {
    id: string
    name: string
    url: string
  }
}
interface IAllPostsYaml {
  edges: IYamlNode[]
}
const IndexPage: FC<IndexProps> = ({ data }: IndexProps) => {
  console.log('index');
  console.log(data?.allPostYaml.edges);

  return (
    <DefaultLayout>
      <Seo title="首页" />
      <section>
        <BlogList list={data?.allPostYaml.edges} />
      </section>
    </DefaultLayout>
  );
};

export default IndexPage;

export const query = graphql`
  query BlogsQuery {
    allMdx {
      edges {
        node {
          slug
          id
          headings(depth: h1) {
            value
            depth
          }
        }
      }
    }
  }
`;
