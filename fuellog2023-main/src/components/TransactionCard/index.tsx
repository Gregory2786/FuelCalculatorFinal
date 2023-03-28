
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

export function TransactionCard(){
    return(
        <Container>

                <Header>
                    <FuelType>
                        <FuelTypeLabel>
                            Combustivel:
                        </FuelTypeLabel>

                        <Fuel>
                            Gasolina
                        </Fuel>
                    </FuelType>
                </Header>
                <AmountFuel>
                    <AmountFuelLabel>
                        Quantidade:
                    </AmountFuelLabel>
                    <Amount>
                        20 litros
                    </Amount>    
                </AmountFuel>
                <FuelPrice>
                    <FuelPriceLabel>
                        Preço por litro:
                    </FuelPriceLabel>
                    <Price>
                        R$ 5.50
                    </Price>
                </FuelPrice>
                <Footer>
                    <TotalValue>
                        <TotalValueLabel>
                            Valor total:
                        </TotalValueLabel>
                        <Value>
                            R$ 110,00
                        </Value>
                    </TotalValue>
                    <Date>25/01/2023</Date>
                </Footer>

        </Container>
    )
}