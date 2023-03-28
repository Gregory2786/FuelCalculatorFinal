import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import { MaterialIcons } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
 
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(20)}px;
  background-color: ${({theme}) =>theme.colors.primary};
  align-items: center;
  margin-bottom: ${RFValue(2)}px;
`;

export const UserWrapper = styled.View`
  flex-direction: row;
  padding: ${RFValue(15)}px;
  align-items: center;
  justify-content: space-between;
  margin-top: ${RFValue(20)}px;
`;

export const CarInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CarIcon = styled(MaterialIcons)`
  color: ${({theme}) => theme.colors.headerText};
  font-size: ${RFValue(50)}px;
  margin-top: ${RFValue(20)}px;

`;

export const HeaderTextWrapper = styled.View`
  margin-left: ${RFValue(20)}px;
  margin-right: ${RFValue(20)}px;
  width: ${RFValue(200)}px;
  margin-top: ${RFValue(20)}px;
`;

export const Greeting = styled.Text`
  color: ${({theme}) => theme.colors.headerText};;
  font-family: ${({theme}) => theme.fonts.pMedium};
  font-size: ${RFValue(15)}px ;
  line-height: ${RFValue(20)}px;
`;

export const CarPlate = styled.Text`
  color: ${({theme}) => theme.colors.headerText};;
  font-family: ${({theme}) => theme.fonts.pMedium};
  font-size: ${RFValue(15)}px ;
  line-height: ${RFValue(20)}px;
`;

export const LogoutButton = styled.View``;

export const LogoutIcon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.colors.headerText};
  font-size: ${RFValue(30)}px;
  margin-top: ${RFValue(20)}px;
`;

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {paddingLeft: 10}
})``;

export const VehicleWrapper = styled.View`
 padding: ${RFValue(5)}px;
 flex-direction: row;
  margin-left: ${RFValue(5)}px;
`;

export const Vehicle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.iBold};
  font-size: ${RFValue(14)}px;
  `;

export const VehicleModel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.iRegular};
  font-size: ${RFValue(14)}px;
  margin-left: ${RFValue(4)}px;
`;

export const Transactions = styled.View``;

export const Title = styled.Text`
  font-family: ${({theme})=> theme.fonts.iBold};
  font-size: ${RFValue(14)}px;
  padding: ${RFValue(5)}px;
  margin-left: ${RFValue(5)}px;
  margin-top: ${RFValue(5)}px;

`;