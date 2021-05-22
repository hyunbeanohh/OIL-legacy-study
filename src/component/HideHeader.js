import React,{useState,useEffect,useRef} from 'react'


const Header = () => {
    const [hide, sethide] = useState(false)
    const [pageY, setpageY] = useState(0)
    const documentRef = useRef(document)

    const handleScroll = () => {
        const {pageYOffset} = window
        const deltaY = pageYOffset - pageY
        const hide = pageYOffset !== 0 && deltaY >= 0
        sethide(hide)
        setpageY(pageYOffset)
    }
    useEffect(() => {
        documentRef.current.addEventListener('scroll',handleScroll)
        return()=>documentRef.current.removeEventListener('scroll',handleScroll)
    }, [pageY])

    return(
        <div className= {hide && 'hide'}></div>
    )
}
export default Header
