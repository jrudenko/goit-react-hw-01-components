import styled from '@emotion/styled'

export const Table = styled.table`
  margin: 20px auto 0 auto;
  width: 400px;
  border-collapse: collapse;
  border-spacing: 0;
  border-radius: 10px;
  background-color: #d5e3d1;
  box-shadow: 2px 3px 14px 2px rgba(0, 0, 0, 0.41);
  overflow: hidden;
  &:hover {
      box-shadow: 0px 3px 2px rgba(10, 38, 1), 0px 4px 4px rgba(208, 214, 206),
      0px 4px 8px rgba(152, 163, 147);
`;

export const TableHead = styled.tr`
  height: 40px;
  background-color:#1f7837;
  text-align: center;
  text-transform: uppercase;
  color: white;
  th {
    width: calc(100% / 3);
    :not(:last-child) {
      border-right: 1px solid #079aab;
    }
  }
`;

export const TableItem = styled.tr`
  height: 40px;
  text-align: center;
  text-transform: capitalize;
  &:nth-of-type(even) {
    background-color: #36c25b;
  }
  td {
    :not(:last-child) {
      border-right: 1px solid #079aab;
    }
  }
`;