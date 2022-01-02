import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => (
    <footer className="bg-gradient-to-b from-gray-800 to-black text-white h-12 w-full px-2 flex items-center justify-end font-bold text-sm border-t border-secondary-dark space-x-2">
        <p>Calculadora de Impuesto a las Ganancias 2022 | </p>
        <a className="text-secondary-light" target="_blank" href="https://www.linkedin.com/in/sebastian-velo/">Hecho con ♥ por Sebastián Velo</a>
    </footer>
)

export default Footer;