import { FunctionComponent } from "react";

interface NavigationProps {

}

const Navigation: FunctionComponent<NavigationProps> = () => (
    <nav className="bg-gradient-to-b from-gray-800 to-black text-white px-2 py-4 flex flex-col md:flex-row justify-between">
        <h1 className="md:text-2xl font-black md:text-center">Calculadora de ganancias 2023</h1>
        <p className="pt-2 px-2">Actualizada al 1 de enero de 2023</p>
    </nav>
)

export default Navigation;