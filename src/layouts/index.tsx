import * as React from "react";
import {BrowserRouter as Router, RouteComponentProps} from "react-router-dom";
import {ApolloProvider} from "react-apollo";
import ApolloClient from "apollo-boost";
import MainLayout from './MainLayout';

const client = new ApolloClient({
    uri: "http://localhost:9999"
});

export const GlobalLayout = () => (
    <Router>
        <ApolloProvider client={client}>
            <MainLayout />
        </ApolloProvider>
    </Router>
);
