import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => (
    <footer className="bg-gradient-to-b from-gray-800 to-black text-white h-auto w-full px-2 py-2 flex flex-col md:flex-row md:items-end justify-between font-bold text-sm md:space-x-2 space-y-2 md:space-y-0">
        <div className="flex space-x-2">
            <a target="_blank" href="https://github.com/sebastianvelo/calculadora-ganancias"><img className="w-8 h-8 filter invert" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github Repo" /></a>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4 text-xs divide-y-2 space-y-2 md:space-y-0 md:divide-y-0 md:divide-x-2 divide-primary">
            <p className="pt-2">Calculadora de Impuesto a las Ganancias 2023 </p>
            <a className="pt-2 md:px-2" target="_blank" href="https://www.linkedin.com/in/sebastian-velo/">Hecho con ♥ por Sebastián Velo</a>
        </div>
    </footer>
);

export default Footer;