import { useState } from "react";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Main } from "./layout/Main";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}

export default App;
