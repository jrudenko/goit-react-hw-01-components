import getRandomHexColor from 'utils/RandomHexColor';
import styled from '@emotion/styled'

export const Container = styled.section`
  margin: 20px auto 0 auto;
  width: 400px;
  background-color: #d5e3d1;
  border-radius: 10px;
  box-shadow: 2px 3px 14px 2px rgba(0, 0, 0, 0.41);
  overflow: hidden;
    &:hover {
      box-shadow: 0px 3px 2px rgba(10, 38, 1), 0px 4px 4px rgba(208, 214, 206),
      0px 4px 8px rgba(152, 163, 147);
`;

export const Title = styled.h2`
  padding: 30px 0;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const StatItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 0;
  width: 100%;
  background-color: ${getRandomHexColor};
`;

export const Label = styled.span``;

export const Percentage = styled.span`
  font-size: 16px;
`;