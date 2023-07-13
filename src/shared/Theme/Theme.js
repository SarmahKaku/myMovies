import { useEffect } from 'react'
import './Theme.scss'

const Theme = () => {
    const getTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    useEffect(()=>{
        if(getTheme){
            document.getElementsByTagName('html')[0].classList.add('dark')
        }else{
            document.getElementsByTagName('html')[0].classList.add('light')
        }
        console.log('getTheme',getTheme);
    });

    function handleTheme(){
        //document.getElementsByTagName('html')[0].classList.toggle('dark')
        ['light','dark'].map( v => document.getElementsByTagName('html')[0].classList.toggle(v) )
    } 

    return (
        <div className='toggle-switch'>
            <label>
                <input type='checkbox' name="theme" onChange={handleTheme} defaultValue="dark" />
                <span className='slider'></span>
            </label>
        </div>
    )
}

export default Theme;