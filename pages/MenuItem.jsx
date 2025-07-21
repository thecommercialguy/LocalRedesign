

export default function MenuItem(props) {

    // console.log(props.item.imageUrl)
    return (
        <li key={props.item.title} className={"menu-list-item"}>
            <article className={"menu-item"}>
                <i>{props.item.price}</i>
                <div className="menu-item-image-container">
                    <img src={props.item.imageUrl} alt="" />
                    <div className={props.item.title === 'Wings' ? "overlay plus" : "overlay"}></div>
                </div>
                <div className="menu-item-contents">
                    <h2>{props.item.title}</h2>
                    <p>{props.item.description}</p>
                </div>
            </article>
        </li>
    )
}