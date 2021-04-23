import {useRouter} from 'next/router'
import Link from 'next/link'
import {data} from '../utils/data';

const Nav = ({setSectionTitle}) => {

    const router = useRouter();

    const changeTitle = (key) => {
        setSectionTitle(key)
        if(key==='fetchTopRated'){
            setSectionTitle('fetchTop Rated')
        }
    }

    return (
        <div className="bg-gradient-to-r from-blue-600 to-blue-800  lg:px-4">
            <nav className="h-full max-w-5xl mx-auto flex flex-col items-center lg:flex-row">
                <Link href="/">
                    <a onClick={()=> setSectionTitle('Trending')} className="py-3 flex items-center justify-center text-3xl font-extrabold text-blue-50 w-screen text-center lg:justify-start">cinemax</a>
                </Link>
                <ul className="bg-blue-50 lg:bg-transparent w-full flex items-center justify-center list-none text-sm lg:text-blue-50">
                    {Object.entries(data).slice(0,4).map(([key, {title}]) => {
                        
                        const handleClick = () => {
                            router.push(`/?genre=${key}`)
                            changeTitle(key);
                        }
                        return ( 
                            <li 
                                key={key}
                                onClick={handleClick}
                                className="animate-pulse  h-full py-3 lg:py-5 lg:w-40  px-6 flex items-center justify-center hover:text-blue-700 lg:hover:text-blue-50 lg:hover:bg-blue-800 lg:duration-300 cursor-pointer">{title}
                            </li>
                    )})}
                </ul>
            </nav>
        </div>
    )
}

export default Nav
