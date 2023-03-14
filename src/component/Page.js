import styled from "styled-components";

export default function Page({ children }) {
  return <PageTag>{children}</PageTag>;
}

const PageTag = styled.div`
  /* робимо фон градієнтом */
  background: linear-gradient(
    0deg,
    rgba(151, 32, 190, 1) 0%,
    rgba(225, 190, 45, 1) 100%
  );

  /* робимо фон на всю ширину */
  width: 100%;
`;
