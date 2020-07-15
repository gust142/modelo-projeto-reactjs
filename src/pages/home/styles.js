import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
    min-height: 100vh;
    background: rgb(52,135,24);
    background: linear-gradient(180deg, rgba(52,135,24,1) 0%, rgba(28,224,110,1) 34%, rgba(44,134,18,1) 100%);
    background-size: 100% 100%;
    overflow: hidden;
    

    @media(min-width: 900px) {
        background: rgb(52,135,24);
        background: linear-gradient(180deg, rgba(52,135,24,1) 0%, rgba(28,224,110,1) 34%, rgba(44,134,18,1) 100%);
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