import './Avatar.scss'
const Avatar = (props) => {
    const {name,character,known_for_department,profile_path} = props.data;
    return (
        
            <div className="avatar-header">
                <div className="avatar-wrapper">
                    {profile_path && <img src={`https://image.tmdb.org/t/p/w500${profile_path}`}  alt="movie poster"/> }
                </div>
                <div className="nametitle text-center">
                    <h3>{name}</h3>
                    <h5>{known_for_department}</h5>
                    <h5>{character}</h5>
                </div>
            </div>
    )
}

export default Avatar;