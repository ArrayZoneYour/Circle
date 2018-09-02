import ApolloClient from "apollo-boost";
import {BrowserRouter as Router} from "react-router-dom";
import {ApolloProvider} from "react-apollo";
import * as React from "react";
import MainLayout from './MainLayout';

const client = new ApolloClient({
    uri: "http://localhost:4000"
});

const GlobalLayout = () => (
    <Router>
        <ApolloProvider client={client}>
            <MainLayout />
        </ApolloProvider>
    </Router>
);

export default GlobalLayout;