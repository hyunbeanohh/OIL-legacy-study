import React from 'react'
import styled from 'styled-components'

const HeaderStyle = styled.div`
    padding:10px 0px;
    font-size:20px;
    background-color:#3d414c;
    text-align:center;
    color:#fff;
`

const BackHeader = styled.div`
float:left
margin-top:20px

`
const Header = () => (
    <HeaderStyle>
        WEBTOON
    </HeaderStyle>
)

export default Header
