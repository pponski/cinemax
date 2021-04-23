import Card from "./Card"

const Results = ({results, genres}) => {

    return (
        <div className="bg-blue-100 px-5 xl:px-0 sm:grid sm:gap-x-5 md:grid-cols-2 xl:grid-cols-3">
           {results.map(result => result.title ? <Card key={result.id} genres={genres} result={result}/> : null)}
        </div>
    )
}

export default Results
