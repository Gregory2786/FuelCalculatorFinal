import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';


import { 
  Container,
  Header,
  UserWrapper,
  CarInfo,
  CarIcon,
  HeaderTextWrapper,
  Greeting,
  CarPlate,
  LogoutButton,
  LogoutIcon,
  HighlightCards,
  VehicleWrapper,
  Vehicle,
  VehicleModel,
  Transactions,
  Title
} from './styles';

export function Home() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <CarInfo>
            <CarIcon name='directions-car'>

            </CarIcon>
            <HeaderTextWrapper>
              <Greeting>
                Olá, fulano!
              </Greeting>
              <CarPlate>
                Placa: BRA2E19
              </CarPlate>
            </HeaderTextWrapper>
          </CarInfo>
          <LogoutButton>
            <LogoutIcon name='logout'>
            </LogoutIcon>
          </LogoutButton>
        </UserWrapper>
      </Header>
      <VehicleWrapper>
        <Vehicle>
          Veiculo: 
          </Vehicle>
        <VehicleModel>
          Marea Turbo
          </VehicleModel>
      </VehicleWrapper>
     
     
      <HighlightCards>
        <HighlightCard
          title='Álcool'
          consumption='6,00 Km/l'
          coast='R$ 4,59'
          lastUpdate='Última atualização 12/02/2023'
          type='alcohol'/>
          
        <HighlightCard
          title='Gasolina'
          consumption='10 Km/l'
          coast='R$ 5,59'
          lastUpdate='Última atualização 12/02/2023'
          type='gasoline'/>
        <HighlightCard
          title='Geral'
          consumption='8,00 Km/l'
          coast='R$ 5,09'
          lastUpdate='Última atualização 12/02/2023'
          type='total'/>
      </HighlightCards>
      
      
      <Transactions>
        <Title>Abastecimentos realizados</Title>
      </Transactions>
      
        <TransactionCard></TransactionCard>
      
    </Container>
  );
}

