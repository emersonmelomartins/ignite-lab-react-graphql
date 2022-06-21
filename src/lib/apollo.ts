import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o549pt0nis01z21unk5uwh/master",
  cache: new InMemoryCache(),
});
