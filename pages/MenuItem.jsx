import { useState } from "react"


const loadingStyle = {
    backgroundColor: 'black'
}
export default function MenuItem(props) {
    const [isLoaded, setIsLoaded] = useState(false)
    // console.log(props.item.imageUrl)
    return (
        <li key={props.item.title} className={"menu-list-item"}>
            <article className={"menu-item"}>
                <div className="menu-item-image-container">
                    {/* <div className="skeleton-loader"></div> */}
                    {!isLoaded && <div className="skelton-loader"></div>}
                    <img 
                        src={props.item.imageUrl} 
                        alt={`Photo of ${props.item.title}`} 
                        onLoad={()=>{setIsLoaded(true)}}
                        style={{ display: isLoaded ? 'block' : 'none' }}
                    />
                    <div className={props.item.title === 'Wings' ? "overlay plus" : "overlay"}></div>
                </div>
                <div className="menu-item-contents">
                    <div className="title-price-container">
                    <h2>{props.item.title}</h2>
                    <i className="price">{props.item.price}</i>
                    </div>
                    <p>{props.item.description}</p>
                </div>
            </article>
        </li>
    )
}