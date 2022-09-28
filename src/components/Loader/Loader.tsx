import styled from "@emotion/styled";
import { CircularProgress } from "@mui/material";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100%;
`

export default function Loader () {
  return (
  <Wrapper>
    <CircularProgress />
  </Wrapper>
)}
