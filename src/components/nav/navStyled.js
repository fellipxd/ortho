import styled from 'styled-components'


export const Wrapper = styled.div`
    width: 100vw;
    display: flex;
    height: 80px;
    padding: 10px 60px; 
    align-items: center;
    justify-content: space-between;


    button{
        background: transparent;
        padding: 20px;
        box-sizing: border-box;
        border-radius: 170px;
    }
    button:hover{
        background: #000000;
        color: rgba(255, 222, 89, 1);
        
    }
    img{
            height: 45%;
        }

    @media screen and (max-width: 768px) {
        padding: 40px 30px 0 30px;
        img{
            height: 50%;
        }
        button{
            padding: 10px 20px;
            height: 63px;
        }
    }
`