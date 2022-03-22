import styled from "styled-components";


export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    height: calc(100vh - 80px);
    position: relative;



    @media screen and (max-width:290px){
        margin-top: 20px;
    }  
`





export const ImgWrapper = styled.div`
    height:30vh;
    width: 100%;
    margin:0 auto;
    position: absolute; 
    bottom: -8%;

    .big_img{
        height: 100%;
        width: 55%;
        z-index: 1;
       
    }

    .small_img{
        display: none;
    }

    @media screen and (height:600px){
        height:30vh;
    }
    
    @media screen and (max-width:920px){
        height: 40vh;
        .big_img{
        height: 100%;
        width: 100%;
       
    }
    } 

    @media screen and (max-width:950px){
        .big_img{
        height: 100%;
        width: 115vw;
        position: absolute;
        left:-10% ;   
    }}
       
    @media screen and (max-width:400px){
        height:30vh; 
    }
`






export const Desc = styled.div`
    font-family: 'gilroy', sans-serif;
    height: 60vh;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    z-index: 2; 
    
    .clear{
        font-weight: 700;
        font-size: 6em;
        max-width: 80%;
        margin: 0 auto;  
        transition: all 0.3s ease-in-out; 
    }

    .fade{
        font-weight: 700;
        font-size: 6em;
        max-width: 80%;
        margin: 0 auto;
        color:  rgba(0, 0, 0, 0.5) !important;
        transition: all 0.3s ease-in-out; 
    }

    .line{
        margin-left: 20px;
        color:  rgba(255, 222, 89, 1) !important;
        -webkit-text-stroke-width: 3px;
        -webkit-text-stroke-color: black;
        font-weight: 700;
        height: 100px;
        transition: all 0.3s ease-in-out;    
    }

    .block{
        height: 100px;
        margin-left: 20px;
        color:  black !important;
        opacity: 1;
        font-weight: 700;
        transition: all 0.3s ease-in-out;     
    }

    .goodby{
        margin: 30px 0;
        font-family: "inter", sans-serif;
        max-width: 660px;
        font-size: 20px;
        text-align: center;
    }

    button{
        font-size: 20px;
        font-style: normal;
        font-weight: bold;
        line-height: 26px;
        letter-spacing: 0.07em;
        cursor: pointer;
        border: none;
        background: black;
        border-radius: 110px;
        padding: 10px;
        width: 459px;
        height: 72.52px;
        font-size: 15px;
        color:rgba(255, 222, 89, 1);
    }

    @media screen and (height:600px){
        .clear{
        font-size: 3rem;
        
        max-width: 80%;
        
    }
    .fade{
        font-size: 5rem;
    }
    }

    @media screen and (max-width:540px){
        padding: 5px ;
        .clear{
        font-size: 2.6rem;
        
        max-width: 80%;
        
    
    .fade{
        
        font-size: 2.6rem;
        
        max-width: 80%;
    }
    .goodby{
        margin-top: 10px;
        font-family: "inter", sans-serif;
        max-width: 385px;
        font-size: 15px;
        text-align: center;
    }
    }

    @media screen and (max-width:760px){
        padding: 5px ;
        .clear{
        font-size: 3.6rem;
        
        max-width: 80%;
        
    }
    .fade{
        
        font-size: 3.6rem;
        
        max-width: 80%;
    }
    .line{
        -webkit-text-stroke-width: 1.3px;      
    }

    .goodby{
        margin-top: 10px;
        font-family: "inter", sans-serif;
        max-width: 385px;
        font-size: 15px;
        text-align: center;
    }
    button{
        height: 63px;
        font-size: 13px;
        max-width: 300px;
    }
    }
   

    @media screen and (max-width:290px){
        button{
            height: 35px;
            width: 200px;
            font-size: 11px;
            padding: 0;
        };
        .goodby{
        font-size: 16px;

    }
    
    .clear{
        font-size: 2.5rem;
        
    }
    .fade{
        font-size: 2.5rem;
    }
    }
`