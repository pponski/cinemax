import Card from "./Card"

const Results = ({results, genres}) => {

    return (
        <div className="bg-blue-100">
           {results.map(result => result.title ? <Card key={result.id} genres={genres} result={result}/> : null)}
        </div>
    )
}

export default Results
