import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  background-color: #f1f1f1;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const StatisticsTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
`;

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StatisticsListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 50px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const StatisticsLabel = styled.span`
  display: block;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const StatisticsPercentage = styled.span`
  display: block;
  font-size: 18px;
  color: #666666;
`;