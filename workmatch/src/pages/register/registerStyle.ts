import styled from "styled-components";
import backgroundImage from "../../assets/register.png";

const RegisterStyle = styled.div`
  background-image: url(${backgroundImage});
  width: 100vw;
  height: 100%;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  object-fit: contain;
 

  img {
    width: 60px;
    height: 60px;
    align-self: center;
    margin-top: 25px;
  }

  section {
    width: 90%;
    padding: 20px;
    align-self: center;
    border-radius: 3px;
    margin-bottom: 100px;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;

      h3 {
        color: var(--color-6);
        font-weight: 800;
        font-size: 25px;
        margin-bottom: 3px;
      }

      a {
        align-self: center;
        text-decoration: none;
        color: var(--color-6);
      }
    }
  }

  @media (min-width: 700px){
    
    img {
        width: 100px;
        height: 100px;
        margin-bottom: 30px;
        }

    section {
        width: 400px;
        align-self: baseline;
        margin-left: 10%;
        background-color: var(--color-2);

        div{
            flex-direction: row;
            justify-content: space-between;
        }
  }
}

`;

export default RegisterStyle;
