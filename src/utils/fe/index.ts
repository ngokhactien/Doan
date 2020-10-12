
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import { concat, split } from "apollo-link";
import { onError } from "apollo-link-error";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import axios from "axios";
import getConfig from "next/config";
import { keyUserLocalStorage } from "~@/constants";



export const CONFIG = getConfig().publicRuntimeConfig;
export const createHsrClient = (user?: any) => {
    const GRAPHQL_HTTP_ENDPOINT = `http://${CONFIG.HASURA_ENDPOINT}`;
    const GRAPHQL_WS_ENDPOINT = `wss://${CONFIG.HASURA_ENDPOINT}`;
    let headers = {};
    if (user) {
        headers = {
            Authorization: "Bearer" + user.token
        };
    }

    const errorLink = onError(({ graphQLErrors }) => {
        if (graphQLErrors) {
            graphQLErrors.forEach(({ message }) => {
                window.localStorage.removeItem(keyUserLocalStorage);
                window.location.href = "/login";
            });
        }
    });
    const wsLink =
        typeof window !== "undefined"
            ? new WebSocketLink({
                uri: GRAPHQL_WS_ENDPOINT,
                options: {
                    reconnect: true,
                    connectionParams: {
                        headers
                    }
                }
            })
            : null;

    const httpLink = new HttpLink({
        uri: GRAPHQL_HTTP_ENDPOINT,
        headers,
        credentials: "same-origin"
    });
    return new ApolloClient({
        link: concat(
            errorLink,
            split(
                ({ query }) => {
                    const definition = getMainDefinition(query);
                    return (
                        definition.kind === "OperationDefinition" &&
                        definition.operation === "subscription"
                    );
                },
                wsLink,
                httpLink
            )
        ),
        cache: new InMemoryCache({
            addTypename: false
        })
    });
};
