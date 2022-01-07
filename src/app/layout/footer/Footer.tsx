import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => (
    <footer className="bg-gradient-to-b from-gray-800 to-black text-white h-20 w-full px-2 pb-2 flex flex-col md:flex-row items-end justify-between font-bold text-sm md:space-x-2">
        <div className="flex space-x-2">
            <a href="https://github.com/sebastianvelo/calculadora-ganancias"><img className="w-8 h-8 filter invert" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github Repo" /></a>
        </div>
        <div className="flex flex-col md:flex-row space-x-2">
            <p>Calculadora de Impuesto a las Ganancias 2022 | </p>
            <a target="_blank" href="https://www.linkedin.com/in/sebastian-velo/">Hecho con ♥ por Sebastián Velo</a>
        </div>
    </footer>
);

export default Footer;