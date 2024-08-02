// Libraries
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

// Assets
import 'assets/font/font.css';
import 'assets/css/scrollbar.css';

// Constants
import { mode } from "core/theme/mode.theme"; // Theme
import { GlobalPrvdr } from "core/context/Global"; // Core
import App from "./App";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <ThemeProvider theme= { mode }>
        <CssBaseline />
        <GlobalPrvdr><App /></GlobalPrvdr>
    </ThemeProvider>
);