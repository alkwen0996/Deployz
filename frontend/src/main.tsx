import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider as MThemeProvider } from "@mui/material/styles";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { mtheme, theme } from "@/styles/theme";
import router from "./router.tsx";
import { normalize } from "styled-normalize";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/apollo/client.ts";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html{
    /* font-size: 62.5%; // percent of the font size of your browser // 1rem = 10px */
    /* background: linear-gradient(136.16deg, #3E2133 12.91%, rgba(32, 10, 43, 0.69) 87.68%); */
    /* overflow-y: hidden; */

    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 6px;
  }
`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <MThemeProvider theme={mtheme}>
      <ApolloProvider client={client}>
        <RecoilRoot>
          <RouterProvider router={router} />
        </RecoilRoot>
      </ApolloProvider>
    </MThemeProvider>
  </ThemeProvider>
);