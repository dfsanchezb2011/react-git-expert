export const GifItem = ({ title, urlImg, id }) => {

    return (
        <div className="card">
            <img src={urlImg} alt={title} />
            <p>{title}</p>
        </div>
    )
}