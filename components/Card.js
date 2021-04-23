import Image from 'next/image';
import {FaStar} from 'react-icons/fa'
import {BsPeopleFill} from 'react-icons/bs'

const Card = ({result, genres}) => {

    const {title, release_date, genre_ids} = result;

    console.log(result);

    return (
        <div className="mb-14">
            <div className="px-2">
                <p className="font-bold pb-2">{title} <span className="font-light">({release_date ? release_date.slice(0,4) : null})</span></p>
                <div className="flex items-center pb-2 overflow-x-scroll scrollbar-hide">
                    <p className="flex items-center text-sm font-bold">
                        <span>
                            <FaStar className="animate-pulse text-yellow-500 text-2xl mr-1"/>
                        </span>
                        {result.vote_average}
                        <span className="flex items-center ml-4 leading-none line text-xs italic font-light">
                            <BsPeopleFill className="text-base mr-1"/>
                            {result.vote_count} votes
                        </span>
                    </p>
                    <div className="flex mx-5 space-x-3 text-xs">
                        {genre_ids.map(genre_id => genres.map(genre => genre.id === genre_id ? (
                            <div key={genre_id} className="flex items-center justify-center bg-blue-600 text-blue-50 px-3 py-1 rounded-full text-xs cursor-default">
                              <p className="whitespace-nowrap">{genre.name}</p>
                            </div> 
                        ) : null))}
                    </div>
                </div>
            </div>
                <Image
                    // layout="responsive"
                    height={1080}
                    width={1920}
                    src={`https://image.tmdb.org/t/p/original` + result.backdrop_path || result.poster_path}
                />
            <div>
                <p className="text-sm text-justify px-2">{result.overview.slice(0,200)}...</p>
            </div>
        </div>
    )
}

export default Card

