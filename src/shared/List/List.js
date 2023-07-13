import './List.scss';

const List = (props)=>{
    return (
        <div className='list-main'>
            <h3>{props.title}</h3>
            <ul>
                {
                    props.data.map((lang)=>(
                       <li key={lang.english_name}>{lang.english_name}</li>
                    ))
                }
                
            </ul>
        </div>
    )
}

export default List;