// Libraries
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";

// Constants
import { ScreenLoader } from "core/loader/Screen";
import Main from "pages/index";

const App = () => {
    const client = new QueryClient();

    return (
        <BrowserRouter>
            <QueryClientProvider client= { client }>
                <Routes>
                    <Route path= "*" element= {
                        <Suspense fallback= { <ScreenLoader /> }>
                            <Main />
                        </Suspense>
                    } />
                </Routes>
            </QueryClientProvider>
        </BrowserRouter>
    );
}

export default App;