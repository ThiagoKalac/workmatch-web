import styled from "styled-components";

export const ContainerModal = styled.div`
  width: 100%;

  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 1;
`;

export const DivModal = styled.div`
  width: 80%;
  height: min-content;
  max-width: 456px;
  background-color: var(--color-1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 20px;
  height: min-content;
  flex-direction: column;
  align-self: center;
  border-radius: 5px;

  @media (min-width: 900px) {
    width: 50%;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
  width: 90%;
  align-items: center;

  img {
    width: 150px;
    border-radius: 8px;
  }

  label {
    font-size: var(--font-size-5);
    color: white;
    align-self: baseline;
    margin-left: 3%;
  }

  input {
    width: 90%;
    padding: 8px;
    color: var(--color-6);
    background-color: var(--color-bg-input);
    border: 2.5px solid var(--color-6);
    border-radius: 8px;
  }

  input::placeholder {
    color: aliceblue;
    opacity: 0.7;
  }

  #SelectStyle {
    width: 95%;
    max-width: 394px;
    padding: 5px;
    color: var(--color-1);
    background-color: var(--color-bg-input);
    border: 2.5px solid var(--color-6);
    border-radius: 8px;
  }
`;

export const TitleModal = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 15px;
  padding: 5px;
  height: min-content;
  color: var(--color-6);

  button {
    background-color: var(--color-1);
    color: var(--color-6);
  }
`;

export const DivInputCheckbox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ButtonCreate = styled.button`
  background-color: var(--color-4);
  color: var(--color-6);

  width: 100%;
  height: 40px;

  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;

  font: var(--text-button);

  margin-top: 30px;
  margin-bottom: 20px;
`;