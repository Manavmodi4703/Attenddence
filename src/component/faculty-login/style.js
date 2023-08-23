import { styled } from "styled-components";

const Wrapper = styled.section`

    input[type=search]{
        width : 100%;
        border : none;
        padding : 10px;
    }

    .sections{
        display : flex;
        flex-wrap : wrap;
    }

    .section{
        min-width : 120px;
        min-height : 120px;
        text-align : center;
        line-height : 100px;
        flex : 1;
        border : solid thin #ccc;
        font-size : 1.2rem;
    }

`

export default Wrapper