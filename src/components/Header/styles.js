import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 10px;
  margin-bottom: 10px;
  border-bottom: 5px solid #fff;
  border-radius: 5px;

  img {
    width: 250px;
    color: #fff;
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.5s;

  &:hover {
    transform: translateY(-3px);
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
