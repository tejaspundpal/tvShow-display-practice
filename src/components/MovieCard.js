import { Link } from "react-router-dom";

const MovieCard = ({ show }) => {
    if (!show) {
        return null;
    }

    const { id, name, rating, type, genres, image } = show;
    const imageUrl = image && image.original;
    const fallbackImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png';

    return (
        <>
            <div className="card m-4 shadow" style={{ maxWidth: '400px', width: '400px' }}>
                <div className="row g-0">
                    <div className="col-md-4" style={{ height: '200px', overflow: 'hidden' }}>
                        <img
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            src={imageUrl || fallbackImageUrl}
                            className="img-fluid rounded-start"
                            alt={name}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body lh-1">
                            <h5 className="card-title">{name}</h5>
                            <p>
                                <span className='fw-medium'>Genres : </span>
                                {genres.join(",")}
                            </p>
                            <p className="card-text">
                                <small>
                                    <span className='fw-medium'>Type : </span>
                                    {type}
                                </small>
                            </p>
                            {rating.average
                                ? <p className="fw-semibold">{rating.average} &#11088;</p>
                                : <p className="text-body-tertiary"><small>Rating not available</small></p>
                            }                            
                            <Link to={"/show/" + id}><button type="button" className="btn btn-primary btn-sm">Read More...</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MovieCard;
