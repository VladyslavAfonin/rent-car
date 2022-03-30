import styled from "styled-components";
import heroBg from "../images/hero-bg.jpg"

const StyledHero = styled.header`
    min-height: 60vh;
    background: url(${(props) => props.img ? props.img : heroBg }) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default StyledHero;