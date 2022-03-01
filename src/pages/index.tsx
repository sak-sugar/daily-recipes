import * as React from "react"
import { graphql, PageProps  } from "gatsby"
import { MicrocmsListConnection } from "../graphqlTypes"
// import { Layout } from "../components/layout"

type Props = {
  data: {
    allMicrocmsList: MicrocmsListConnection
  }
}

// markup
const IndexPage: React.FC<Props> = ({ data }) => (
  <>
    <ul>
    {data.allMicrocmsList.edges.map(({ node }) => (
      <li>
        <React.Fragment key={node.id}>
        {node.title}
        </React.Fragment>
      </li>
    ))}
    </ul>
  </>
)

export const query = graphql`
  {
    allMicrocmsList {
      edges {
        node {
          id,
          title
        }
      }
    }
  }
`

export default IndexPage
