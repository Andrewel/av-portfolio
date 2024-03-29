import { graphql, useStaticQuery } from 'gatsby';
import { Project } from '../types';

export type QueryResponse = {
  contentfulAbout: {
    projects: {
      id: string;
      name: string;
      description: string;
      des: any;
      homepage: string;
      repository: string;
      publishedDate: string;
      type: string;
      logo: {
        title: string;
        file: {
          url: string;
        };
      };
    }[];
  };
};

export const useProjectsQuery = (): Project[] => {
  const { contentfulAbout } = useStaticQuery<QueryResponse>(graphql`
    query ProjectsQuery {
      contentfulAbout {
        projects {
          id
          name
          description
          des {
            raw
          }
          homepage: projectUrl
          repository: repositoryUrl
          publishedDate(formatString: "YYYY")
          type
          logo {
            title
            file {
              url
            }
          }
        }
      }
    }
  `);

  return contentfulAbout.projects.map(({ logo, ...rest }) => ({
    ...rest,
    logo: {
      alt: logo.title,
      src: logo.file.url,
    },
  }));
};
