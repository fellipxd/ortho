import styled from "styled-components";


export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    height: calc(100vh - 80px);
    position: relative;
    
   
`
export const ImgWrapper = styled.div`
    height:33vh;
    width: 100%;
    margin:0 auto;
    position: absolute; 
    bottom: 0;
    

    
    

    .big_img{
        height: 100%;
        width: 90%;
       
    }
    .small_img{
        display: none;
       
    }
    @media screen and (max-width:760px){
        position: absolute;
        bottom: 0;
        img{
        height: 100%;
        width: 100%;
       
    }
    .big_img{
        display: none;
       
    }
    .small_img{
        position: absolute;
        bottom: -10%;
        height: 100%;
        width: 100%;
        display: flex;
       
    }
    } 
    @media screen and (max-width:920px){
        height: 40vh;
        .big_img{
        height: 100%;
        width: 100%;
       
    }
    } 
`

export const Desc = styled.div`
    font-family: 'gilroy', sans-serif;
    height: 55vh;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
   
  
    
    .clear{
        font-weight: 700;
        font-size: 6.2rem;
        max-width: 1135px;
        
    }
    .fade{
        font-weight: 700;
        font-size: 6.2rem;
        max-width: 1135px;
        color:  rgba(0, 0, 0, 0.5) !important;
    }
    .line{
        margin-left: 20px;
        color:  rgba(255, 222, 89, 1) !important;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: black;
        font-weight: 700;
        pointerEvents: none;
        
    }
    .block{
        margin-left: 20px;
        color:  black !important;
        opacity: 1;
        font-weight: 700;
        pointerEvents: none;
        
    }

    .goodby{
        margin-top: 40px;
        font-family: "inter", sans-serif;
        max-width: 660px;
        font-size: 20px;
        text-align: center;
    }

    button{
        background: black;
        border-radius: 110px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 10px;
        width: 410px;
        font-size: 15px;
        height: 56.52px;
        margin-top: 20px;
        color:rgba(255, 222, 89, 1);
    }

    @media screen and (max-width:760px){
        .clear{
        font-size: 3.2rem;
        
    }
    .fade{
        font-size: 3.2rem;
    }

    .line{
        -webkit-text-stroke-width: 1.3px;      
    }

    .goodby{
        margin-top: 40px;
        font-family: "inter", sans-serif;
        max-width: 385px;
        font-size: 20px;
        text-align: center;
    }
    button{
        max-width: 300px;
    }
    }

   
`