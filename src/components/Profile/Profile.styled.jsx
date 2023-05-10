import styled from '@emotion/styled';

export const ProfileBox = styled.div`
  border-radius: 0px 0px 4px 4px;
  background-color: #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
`;
  
export const ProfileDescription = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  
  
`;

export const ProfileText = styled.p`
  margin-bottom: 10px;

  font-size: 16px;
  line-height: 1.2;
  text-align: center;
  letter-spacing: 0.03em;
  font-weight: bold;
`;

export const ProfileList = styled.ul`
    list-style: none;
    padding: 15px 15px;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ProfileListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileListText = styled.span`
    display: flex;
    align-items: center;
    justify-content: space-between;`

