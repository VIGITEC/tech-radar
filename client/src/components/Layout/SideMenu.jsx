import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const SideMenu = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (currentPath === "/radar" || currentPath === "/options") {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }, [currentPath])

    let optionsList = ['No hay opciones disponibles']

    switch (currentPath) {
        case "/radar":
            optionsList = [
                "Filtrar",
                "Ordenar"
            ]
            break
        case "/options":
            optionsList = [
                "General",
                "Apariencia",
                "Otra opción",
                "Otra opción"
            ]
            break
    }

    return (
        <div className={`bg-gradient-to-t from-[#3B82F6] to-[#8B5CF6] mt-12 border-r-4 border-gray-800 text-white w-[15%] h-[calc(100vh-70px)] p-3 fixed flex justify-center left-0 top-16 z-[1] overflow-y-auto transition-all duration-300 opacity-0 -translate-x-full
        ${isVisible ?
                'translate-x-0 opacity-100'
                :
                '-translate-x-full'}`}>
            <ul className='list-none p-0 mt-8'>
                {optionsList.map((option, index) =>
                    <li
                        className='h-14 p-3 text-3xl font-bold text-center cursor-pointer mb-5 transition-[border] duration-100 border-none hover:rounded-[25%] hover:border-b-4 hover:border-solid hover:border-cyan-300'
                        key={index}
                    >
                        {option}
                    </li>
                )}
            </ul>
        </div>
    );
}

export default SideMenu;