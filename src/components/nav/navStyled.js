import styled from 'styled-components'


export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    height: 80px;
    position:  relative;
    align-items: center;
    justify-content: space-between;


    button{
        cursor: pointer;
        background: transparent;
        border: 2px solid black;
        font-weight: bold ;
        padding: 20px;
        box-sizing: border-box;
        border-radius: 170px;
        position: absolute;
        right: 5%;
        color: black;
    }
    button:hover{
       
        transition: all 0.3s ease-in-out;
        background: #000000;
        color: rgba(255, 222, 89, 1);
        
    }
    img{
            height: 45%;
            position: absolute;
        left: 5%;
        }






    @media screen and (max-width: 768px) {
        
        img{
            height: 50%;
        }
        button{
            padding: 10px 20px;
            height: 63px;
        }
    }


    @media screen and (max-width:600px){
        img{
            height: 30%;
        }
        button{
            padding: 0 5px;
            width: 160px;
            height: 43px;
            font-size:10px;
         
    } 
    @media screen and (max-width:300px){
        img{
            height: 25%;
        }
        button{
            padding: 0 5px;
            width: 150px;
            height: 33px;
            font-size:10px;
         
    } 
`