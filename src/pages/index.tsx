import * as React from "react"
import { graphql } from "gatsby"
// import { SortablePane, Pane } from 'react-sortable-pane'
import { MicrocmsListConnection } from "../graphqlTypes"

type Props = {
  data: {
    allMicrocmsList: MicrocmsListConnection
  }
}

// list
const IndexPage: React.FC<Props> = ({ data }) => (
  <>
    <h1 className="md:w-auto m-8 text-3xl font-bold">
      Daily Recipes
    </h1>
    <ul className="md:w-auto m-8">
      {data.allMicrocmsList.edges.map(({ node }) => (
        <li
          key={node.id}
          className="card mb-4 flex">
          <div className="image p-4 min-w-1/4">
            image
          </div>
          <div className="body p-4 grow relative">
            <h2 className="title text-2xl font-bold mb-2">
              {node.title}
            </h2>
            <span className="block">
              味どうらく：{String(node.special_ajidoraku)}
            </span>
            <div className="process py-4" dangerouslySetInnerHTML={{ __html: node.process }} />
          </div>
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
          title,
          special_ajidoraku,
          process
        }
      }
    }
  }
`

export default IndexPage
