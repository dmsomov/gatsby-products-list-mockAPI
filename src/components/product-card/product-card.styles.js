import styled, { css } from "styled-components";
import { Link as BaseLink } from "gatsby";

const commonTextCSS = css`
  width: 100%;
  min-width: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  width: 16rem;
  border: 1px solid grey;
  border-radius: 4px;
  text-align: center;
`;

export const Title = styled.div`
  ${commonTextCSS}
`;

export const Price = styled.div`
  ${commonTextCSS}
`;

export const Image = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: contain;
`;

export const Link = styled(BaseLink)`
  ${commonTextCSS}
`;
