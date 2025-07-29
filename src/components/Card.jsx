import "./Card.css"

export default function Card({children}){


    return (
        <div className="cardContainer">
            {children}
        </div>
    )
}