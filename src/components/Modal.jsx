import React, {useState} from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    overflow: auto;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    width: 50%;
    margin: 12% auto;
`;

export const Modal = ({children}) =>{
    const [show, setShow] = useState(false);

    return (
        <>
        <button onClick={()=> setShow(true)}>Open Modal</button>
        {show && (
            <ModalBackground onClick={()=>setShow(false)}>
                <ModalContent onClick={(e)=>e.stopPropagation()} >
                    <button onClick={()=> setShow(false)}>Close Modal</button>
                    {children}
                </ModalContent>
            </ModalBackground>
        )}
        </>
    )
}