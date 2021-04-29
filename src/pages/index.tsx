import React, { FC } from 'react';
import { Link, PageProps, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { DefaultLayout, Seo, BlogList } from '@/components';

interface IEdge {
  node: {
    id: string
    name: string
    absolutePath: string
  }
}
interface IAllFiles {
  allFile: {
    edges: IEdge[]
  }
}
interface IndexProps extends PageProps {
  data: IAllFiles
}
const IndexPage: FC<IndexProps> = ({ data }: IndexProps) => {
  console.log('index');
  console.log(data?.allFile?.edges);

  return (
    <DefaultLayout>
      <Seo title="首页" />
      <h1>11Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={['auto', 'webp', 'avif']}
        alt="A Gatsby astronaut"
        style={{ marginBottom: '1.45rem' }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link>
        <br />
      </p>
      <section>
        <BlogList list={data?.allFile?.edges} />
      </section>
    </DefaultLayout>
  );
};

export default IndexPage;

export const query = graphql`
  query BlogsQuery {
    allFile {
      edges {
        node {
          id
          absolutePath
          name
        }
      }
    }
  }
`;
