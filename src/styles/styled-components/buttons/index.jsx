import { Button } from "react-bootstrap";
import styled from "styled-components";

const MainButton = styled(Button)`
  background-color: #edd923;
  color: #000;
  min-width: 100px;
  border: 1px solid #000;
  margin: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

  &:hover {
    color: #edd923;
    background-color: #000;
    border: 1px solid #000;
    transform: translate(1px, 2px);
  }
`;

export { MainButton };
