import Head from "next/head";
import { useState } from "react";
import { lightTheme, darkTheme, GlobalStyles } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import FixedNavs from "../components/fixed/FixedNavs";

export default function Home() {
  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />

      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FixedNavs themeToggler={themeToggler} />
    </ThemeProvider>
  );
}
