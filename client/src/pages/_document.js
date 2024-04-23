// import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Head, Html, Main, NextScript } from "next/document";

// import { mode } from "@chakra-ui/theme-tools";
// import { extendTheme } from "@chakra-ui/theme-utils";

// const styles = {
// 	global: (props) => ({
// 		body: {
// 			color: mode("gray.800", "whiteAlpha: 900")(props),
// 			bg: mode("gray.100", "#101010")(props),
// 		},
// 	}),
// };

// const config = {
// 	initialColorMode: "light",
// 	useSystemColorMode: true,
// };

// const colors = {
// 	gray: {
// 		light: "#616161",
// 		dark: "#1e1e1e",
// 	},
// };

// const theme = extendTheme({ config, styles, colors });

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* <ChakraProvider theme={theme}>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
       
          <Main />
          <NextScript />
     

        {/* </ChakraProvider> */}
      </body>
    </Html>
  );
}
