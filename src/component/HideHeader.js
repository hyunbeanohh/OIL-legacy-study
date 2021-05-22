import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components';
import btn_viewer_home from '../Btnimg/btn-viewer-home.svg'
import btn_viewer_back from '../Btnimg/btn-nav-back-b-850.svg'
import btn_nav_have_on from '../Btnimg/btn-nav-have-on.svg'
import btn_nav_have_nor from '../Btnimg/btn-nav-have-nor.svg'

const HeaderArea = styled.div`
    position: relative;
    background-color : black;
    width: 100%;
    height: 80px;
`;

const HeaderWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 80px;
    transition: .4s ease;
    &.hide {
        transform: translateY(-80px);
    }
`;

const HideHeader = () => {
    const [hide, setHide] = useState(false);
    const [pageY, setPageY] = useState(0);
    const documentRef = useRef(document);

    const handleScroll = () => {
        const { pageYOffset } = window;
        const deltaY = pageYOffset - pageY;
        const hide = pageYOffset !== 0 && deltaY >= 0;
        setHide(hide);
        setPageY(pageYOffset);
    }

    useEffect(() => {
        documentRef.current.addEventListener('scroll', handleScroll);
        return () => documentRef.current.removeEventListener('scroll', handleScroll);
    }, [pageY]);

    return (
        <HeaderArea>
            <HeaderWrap className={hide && 'hide'}>
                예제 코드
            </HeaderWrap>
        </HeaderArea>
    )
}

export default HideHeader