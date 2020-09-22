import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
    min-height: 100vh;
    
    background-size: 100% 100%;
    overflow: hidden;
    

    @media(min-width: 900px) {
       
        background-size: 100% 100%;
        overflow: hidden;
    }

    #logos{
        align-items:center;
        text-align:center;
        margin-top:1%;
        img{width:20%;height:20%}
    }
    #botao{
      margin:10px ;  
      background-color:white;
      color:black;
      font-weight:bold;
      width:20%;
      
    }
    #title{
        text-align:center;
    }
   

`