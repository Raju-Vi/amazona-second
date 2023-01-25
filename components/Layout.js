import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Toolbar,
  Link,
  Typography,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import useStyels from "../utils/styles";
import NextLink from "next/link";
import theme from "../utils/theme";

const Layout = ({ children }) => {
  const classes = useStyels();
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" color="secondary" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.logo}>amazona</Typography>
              </Link>
            </NextLink>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>All right reserved. Next Amazona</Typography>
        </footer>
      </ThemeProvider>
    </>
  );
};

export default Layout;
