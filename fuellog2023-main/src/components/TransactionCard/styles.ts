import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container  =  styled.View`
    background-color: ${({theme})=>theme.colors.secondary};
    padding: ${RFValue(13)}px;
    margin: ${RFValue(5)}px;
    border-radius: ${RFValue(15)}px;
`;
export const Header = styled.View`

`;

export const FuelType = styled.View`
    flex-direction: row;    
`;

export const FuelTypeLabel = styled.Text`
margin-right: ${RFValue(3)}px;
font-family: ${({theme})=> theme.fonts.iBold};
font-size: ${RFValue(12)}px;
`;

export const Fuel = styled.Text`
font-family: ${({theme})=> theme.fonts.iRegular};
font-size: ${RFValue(12)}px;
`;

export const Amount = styled.Text`
font-family: ${({theme})=> theme.fonts.iRegular};
font-size: ${RFValue(12)}px;
`;

export const AmountFuel = styled.View`
flex-direction: row;
`;

export const AmountFuelLabel = styled.Text`
margin-right: ${RFValue(3)}px;
font-family: ${({theme})=> theme.fonts.iBold};
font-size: ${RFValue(12)}px;
`;

export const FuelPrice = styled.View`
flex-direction: row;
`;

export const FuelPriceLabel = styled.Text`
margin-right: ${RFValue(3)}px;
font-family: ${({theme})=> theme.fonts.iBold};
font-size: ${RFValue(12)}px;
`;

export const Price = styled.Text`
font-family: ${({theme})=> theme.fonts.iRegular};
font-size: ${RFValue(12)}px;
`;

export const TotalValue = styled.View`
flex-direction: row;
`;

export const TotalValueLabel = styled.Text`
margin-right: ${RFValue(3)}px;
font-family: ${({theme})=> theme.fonts.iBold};
font-size: ${RFValue(12)}px;
`;

export const Value = styled.Text`
font-family: ${({theme})=> theme.fonts.iRegular};
font-size: ${RFValue(12)}px;
`;

export const Date = styled.Text`
    font-family: ${({theme}) => theme.fonts.iRegular};
    font-size: ${RFValue(12)}px ;
    color: ${({theme}) => theme.colors.lightText};
`;

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;
