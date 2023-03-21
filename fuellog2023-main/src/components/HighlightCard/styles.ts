import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface TypeProps{
    type: 'alcohol'| 'gasoline' | 'total';
}
export const Container  =  styled.View<TypeProps>`
    background-color: ${({theme, type}) => type === 'total' ?
    theme.colors.GeneralCard : theme.colors.secondary};
    width: ${RFValue(330)}px;
    height: ${RFValue(140)}px;
    border-radius: ${RFValue(15)}px;
    padding: ${RFValue(14)}px ${RFValue(15)}px;
    margin-right: ${RFValue(15)}px;
`;

export const Header  = styled.View`
   margin-bottom: ${RFValue(15)}px;
`;
    
export const Title  = styled.Text`
    font-family: ${({theme}) => theme.fonts.pMedium};
    font-size: ${RFValue(15)}px ;
    text-align: center;
`;

export const Consumption = styled.View`
    flex-direction: row;
    justify-content: center;
`;

export const ConsumptionLabel = styled.Text`
    font-family: ${({theme}) => theme.fonts.iBold};
    font-size: ${RFValue(12)}px ;
    margin-left: ${RFValue(5)}px;
`;

export const ConsumptionValue = styled.Text`
    font-family: ${({theme}) => theme.fonts.iRegular};
    font-size: ${RFValue(12)}px ;
`;

export const Coast  = styled.View`
    flex-direction: row;
    justify-content: center;
`;

export const CoastLabel  = styled.Text`
    font-family: ${({theme}) => theme.fonts.iBold};
    font-size: ${RFValue(12)}px ;
`;

export const CoastValue  = styled.Text`
    font-family: ${({theme}) => theme.fonts.iRegular};
    font-size: ${RFValue(12)}px ;
    margin-bottom: ${RFValue(10)}px ;
`;

export const Footer  = styled.View`

`;

export const LastUpdate  = styled.Text`
    font-family: ${({theme}) => theme.fonts.iRegular};
    font-size: ${RFValue(10)}px ;
    text-align: center;
    color: ${({theme}) => theme.colors.lightText};
`;
