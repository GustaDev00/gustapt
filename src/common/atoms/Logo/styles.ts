import styled from "styled-components";

export const LogoContainer = styled.div`
  font-size: ${({ theme }) => theme.size.size3rem};
  color: ${({ theme }) => theme.color.violetBlue};
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.size.size2rem};
  }
`;
