import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://test-task.entireframework.com/cms/graphql",
  cache: new InMemoryCache(),
});
