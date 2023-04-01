import { FlatList } from 'react-native';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';


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
  Title,
  TransactionList
} from './styles';

export interface DataListProps extends TransactionCardProps{
  id : string;
  

}

export function Home() {
  const transactionData: DataListProps[] = [
    { 
      id: '1',
      type : 'alcohol' ,
      fuelPrice : 'R$ 4,50',
      amountFuel : '20 litros',
      totalValue : 'R$ 90,00',
      date :'25/02/2023'

    },
    {
      id: '2',
      type : 'gasoline' ,
      fuelPrice : 'R$ 5,60',
      amountFuel : '25 litros',
      totalValue : 'R$ 140,00',
      date :'01/02/2023'
    },
    {
      id: '3',
      type : 'gasoline' ,
      fuelPrice : 'R$ 5,45',
      amountFuel : '20 litros',
      totalValue : 'R$ 109,00',
      date :'10/01/2023'
      },
    ];
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
      
      
        <TransactionList
          data={transactionData}
          keyExtractor={(item)=>item.id}
          renderItem={({item}) => <TransactionCard data= {item}/>}
        />
      </Transactions>
        
    </Container>
  );
}

