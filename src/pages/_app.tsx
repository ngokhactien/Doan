import { ApolloProvider } from "@apollo/react-hooks";
import NoSSR from "react-no-ssr";
import RootContext, { RootProvider } from "~@/components/RootProvider";
// import Page from "~@/components/Page";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <Component { ... pageProps }/>
      {/* <NoSSR>
        <RootProvider>
          <RootContext.Consumer>
            {({ hsrClient }) => {
              return (
                <ApolloProvider client={hsrClient}>
                    <Page>
                        <Component {...pageProps} />
                    </Page>
                </ApolloProvider>
              );
            }}
          </RootContext.Consumer>
        </RootProvider>

      </NoSSR> */}
    </>
  );
};

export default App;
