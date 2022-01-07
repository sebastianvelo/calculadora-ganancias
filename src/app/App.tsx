import { FunctionComponent } from "react";
import Footer from "./layout/footer/Footer";
import Main from "./layout/main/Main";

const App: FunctionComponent = () => (
    <div className="flex flex-col w-full">
        <Main />
        <Footer />
    </div>
);

export default App;
