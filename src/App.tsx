import * as React from "react";
import { Query} from "react-apollo";
import gql from "graphql-tag";
import {RouteComponentProps} from "react-router";

const Component = React.Component;

class App extends Component<RouteComponentProps<any>>{
    render(){
        return (
                <Query query={gql`{
                    guys {
                        name
                    }
                }`}>
                    {({loading, error, data}) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error :(</p>;
                        return data.collections.map((collection) => (
                            <div key={collection}>
                                <p>{`${collection}: running`}</p>
                            </div>
                        ));
                    }}
                </Query>

        );
    }
}

export default App;