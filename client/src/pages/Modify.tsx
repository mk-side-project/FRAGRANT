import * as React from 'react';
import styled from 'styled-components';
import Nav from '../component/Nav';



function Modify() {

    const Wrap = styled.section`
        background-color: darkgoldenrod;
    `;
  
    return (
        <>
<Nav></Nav>
        <Wrap>정보수정</Wrap>
</>
    )
}

export default Modify;