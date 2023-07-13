import './Star.scss'
const StarRating = (props) => {
    const { rating } = props;
    const noOfStar = [1, 2, 3, 4, 5];

    // ★ from https://www.i2symbol.com/symbols/stars
    
    return (
        <div className="star-main">
            {noOfStar.map((value) => (
                <span key={value} style={{color: value <= rating / 2 ? 'orange' : 'white'}} >★</span>
            ))}

        </div>
    );
};
export default StarRating;