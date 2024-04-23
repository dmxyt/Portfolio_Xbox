import ChaveiroCard from '/ChaveiroCard.png'

export default function CardImg(){
    return(
        <>
           <div className="Card cardBox">
                <img src={ChaveiroCard} alt="" className="img-fluid"/>
           </div>

        </>
    )
}