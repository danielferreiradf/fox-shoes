import styled from "styled-components";

export const ProductCard = styled.li`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  padding: 20px;

  img {
    align-self: center;
    max-width: 250px;
  }

  > strong {
    font-size: 16px;
    line-height: 20px;
    color: ${props => props.theme.color5};
    margin-top: 5px;
  }

  > span {
    font-size: 21px;
    font-weight: bold;
    margin: 5px 0 20px;
  }

  button {
    background: ${props => props.theme.color2};
    color: ${props => props.theme.color3};
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    margin-top: auto;

    display: flex;
    align-items: center;
    transition: filter 0.3s;

    &:hover {
      filter: brightness(125%);
    }

    div {
      display: flex;
      align-items: center;
      padding: 12px;
      background: rgba(0, 0, 0, 0.3);

      svg {
        margin-right: 5px;
      }
    }
    span {
      flex: 1;
      text-transform: uppercase;
      text-align: center;
      font-weight: bold;
    }
  }
`;
