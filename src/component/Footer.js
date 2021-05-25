import React from 'react'
import styled from 'styled-components'

const FooterStyle = styled.div`
padding:20px 0; 
bottom : 0px; 
position:fixed; 
width:100%; 
border-top:1px solid #d9d9d9;
font-size:11px;
font-size:12px;
background-color:#f1f1f1;
text-align:center;
color:#888
`
const Footer = () => (
    <FooterStyle>
        @ 키다리 스튜디오
    </FooterStyle>
)

export default Footer
