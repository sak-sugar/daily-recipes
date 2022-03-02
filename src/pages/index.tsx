import * as React from "react"
import { graphql } from "gatsby"
import { MicrocmsListConnection } from "../graphqlTypes"
import "../assets/style/global.css"
// import { Layout } from "../components/layout"

type Props = {
  data: {
    allMicrocmsList: MicrocmsListConnection
  }
}

// markup
const IndexPage: React.FC<Props> = ({ data }) => (
  <>
    <h1 className="w-full md:w-auto m-8 text-3xl font-bold">
      Daily Recipes
    </h1>
    <ul className="w-full md:w-auto m-8">
      {data.allMicrocmsList.edges.map(({ node }) => (
        <li
          key={node.id}
          className="card mb-4 flex">
          <span className="block px-4">
            {node.title}
          </span>
          <span className="block px-4">
            味どうらく：{String(node.special_ajidoraku)}
          </span>
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
