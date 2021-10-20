import { useStaticQuery, graphql } from "gatsby"

export const useHomeQuery = () => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return data
}
