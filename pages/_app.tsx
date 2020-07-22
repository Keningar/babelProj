import { useMemo, useEffect } from 'react';
import { AppPropsLayout, GetLayout } from '@utils_p/types';
import { ApolloProvider } from '@apollo/react-hooks';
import { useApollo } from '@utils_p/apollo';
import grey from '@material-ui/core/colors/grey';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    custom: {
      shelf: {
        primary: React.CSSProperties['color'];
        secondary: React.CSSProperties['color'];
      };
    };
  }

  interface ThemeOptions {
    custom: {
      shelf: {
        primary: React.CSSProperties['color'];
        secondary: React.CSSProperties['color'];
      };
    };
  }
}

const type: 'light' | 'dark' = 'dark';

function MyApp({ Component, pageProps }: AppPropsLayout) {
  const getLayout: GetLayout =
    Component.getLayout || ((Component, props) => <Component {...props} />);
  const apolloClient = useApollo(pageProps.initialApolloState);

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type,
        },
        custom: {
          shelf: {
            primary: type === 'light' ? grey[400] : '#7D7D7D',
            secondary: type === 'light' ? grey[300] : grey['A700'],
          },
        },
      }),
    [type]
  );

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ApolloProvider client={apolloClient}>
        {getLayout(Component, pageProps)}
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default MyApp;
