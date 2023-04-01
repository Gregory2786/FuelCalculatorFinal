
import { 
    Container,
    Header,
    FuelType,
    FuelTypeLabel,
    Fuel,
    Amount,
    AmountFuel,
    AmountFuelLabel,
    FuelPrice,
    FuelPriceLabel,
    Price,
    TotalValue,
    TotalValueLabel,
    Value,
    Date,
    Footer
     } from "./styles";

export interface TransactionCardProps{
    type : 'alcohol' | 'gasoline';
    fuelPrice : string;
    amountFuel : string;
    totalValue : string;
    date : string;
}

interface Props{
    data : TransactionCardProps
}
export function TransactionCard({data}: Props){
    return(
        <Container>

                <Header>
                    <FuelType>
                        <FuelTypeLabel>
                            Combustivel:
                        </FuelTypeLabel>

                        <Fuel>
                            {data.type === 'alcohol'? 'Álcool' : 'Gasolina'}
                        </Fuel>
                    </FuelType>
                </Header>
                <AmountFuel>
                    <AmountFuelLabel>
                        Quantidade:
                    </AmountFuelLabel>
                    <Amount>
                        {data.amountFuel}
                    </Amount>    
                </AmountFuel>
                <FuelPrice>
                    <FuelPriceLabel>
                        Preço por litro:
                    </FuelPriceLabel>
                    <Price>
                        {data.fuelPrice}
                    </Price>
                </FuelPrice>
                <Footer>
                    <TotalValue>
                        <TotalValueLabel>
                            Valor total:
                        </TotalValueLabel>
                        <Value>
                            {data.totalValue}
                        </Value>
                    </TotalValue>
                    <Date>{data.date}</Date>
                </Footer>

        </Container>
    )
}