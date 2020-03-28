import * as React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { RouteComponentProps } from 'react-router'
const Component = React.Component

class App extends Component<RouteComponentProps<any>> {
  render() {
    return (
      <Query
        query={gql`
          {
            guys {
              name
            }
          }
        `}
      >
        {({ loading, data, error = undefined }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error :(</p>
          {
            console.log('data: ', data)
          }
          return data.guys.map(person => (
            <div key={person.name}>
              <p>{`Person: ${person.name} `}</p>
            </div>
          ))
        }}
      </Query>
    )
  }
}

export default App
