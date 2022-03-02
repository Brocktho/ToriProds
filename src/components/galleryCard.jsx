const GalleryCard = ({image, id, video, set}) => {
    const myVideo = video;
    return(
        <div className="w-3/4 md:w-1/4 relative group cursor-pointer my-4 mx-4" id={id} onClick={(event) => set(event)}>
            <img lazy="true" className="w-full h-full transition duration-300 group-hover:scale-105 z-20" src={image}/>
        </div>
    )
}

export default GalleryCard;