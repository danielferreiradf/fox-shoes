import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: ${props => props.theme.color1};
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: filter 0.3s;

      &:hover {
        filter: brightness(125%);
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;
  thead th {
    color: ${props => props.theme.color2};
    text-align: left;
    padding: 12px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: ${props => props.theme.color2};
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
