import { FunctionComponent } from "react";
import Footer from "./layout/footer/Footer";
import Main from "./layout/main/Main";
import Navigation from "./layout/navigation/Navigation";

const App: FunctionComponent = () => (
    <div className="flex flex-col w-full">
        <Navigation />
        <Main />
        <Footer />
    </div>
);

export default App;
