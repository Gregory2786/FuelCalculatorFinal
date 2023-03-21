import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import { MaterialIcons } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(30)}px;
  background-color: ${({theme}) =>theme.colors.primary};
  align-items: center;
  margin-bottom: ${RFValue(2)}px;
`;

export const UserWrapper = styled.View`
  flex-direction: row;
  padding: ${RFValue(15)}px;
  align-items: center;
  justify-content: space-between;
  margin-top: ${RFValue(30)}px;
`;

export const CarInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CarIcon = styled(MaterialIcons)`
  color: ${({theme}) => theme.colors.headerText};
  font-size: ${RFValue(50)}px;

`;

export const HeaderTextWrapper = styled.View`
  margin-left: ${RFValue(20)}px;
  margin-right: ${RFValue(20)}px;
  width: ${RFValue(200)}px;
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
`;

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {paddingLeft: 16}
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFValue(135)}
`;
