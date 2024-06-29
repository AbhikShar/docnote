"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";


const theme = createTheme({
    palette: {
        text: {
            primary: "#FFFFFF",
        },
      
        secondary: {
            main: "#3f69ff",
            contrastText: "#fff",
        },
    },
    typography: {
        fontFamily: "Poppins",
    },
});


export default function ThemeRegistry({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}