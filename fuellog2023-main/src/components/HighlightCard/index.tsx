import{
    Container,
    Header,
    Title,
    Consumption,
    ConsumptionLabel,
    ConsumptionValue,
    Coast,
    CoastLabel,
    CoastValue,
    Footer,
    LastUpdate,

} from './styles';

interface Props{
    title: string;
    consumption: string;
    coast: string;
    lastUpdate: string;
    type: 'alcohol'| 'gasoline' | 'total';


}
export function HighlightCard({
    title,
    consumption,
    coast,
    type,
    lastUpdate
}: Props){

    return(
        <Container type={type}>
            <Header>
                <Title>{title}</Title>
            </Header>

            <Consumption>
                <ConsumptionLabel>Consumo medio: </ConsumptionLabel>
                <ConsumptionValue>{consumption}</ConsumptionValue>
            </Consumption>

            <Coast>
                <CoastLabel>Custo medio: </CoastLabel>
                <CoastValue>{coast}</CoastValue>
            </Coast>

            <Footer>
                <LastUpdate>{lastUpdate}</LastUpdate>
            </Footer>
        </Container>
    )
}