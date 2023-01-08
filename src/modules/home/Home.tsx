import Button from "../../components/atoms/Button/Button";
import { CardContent, CardSmall } from "../../components/atoms/Card/Card";
import { Title, TitleContainer } from "../../components/atoms/Title/Title";
import { Image } from "../../components/atoms/Image/Image"
import Text from "../../components/atoms/Text/Text";
import { ContainerMain } from "../../components/layout/Container/Container";
import { Grid } from "../../components/layout/Grid/Grid";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const mocks = [
  {
    "id": "6367d76671d6f85cde1302c1",
    "name": "Slipknot",
    "logo": "https://i.etsystatic.com/7955556/r/il/688aa7/3232516453/il_570xN.3232516453_jnl8.jpg",
    "endpoint": "/band/6367d76671d6f85cde1302c1"
  },
  {
    "id": "6367d76671d6f85cde1302c3",
    "name": "Slipknot",
    "logo": "https://i.etsystatic.com/7955556/r/il/688aa7/3232516453/il_570xN.3232516453_jnl8.jpg",
    "endpoint": "/band/6367d76671d6f85cde1302c1"
  },
  {
    "id": "6367d76671d6f85cde1302c4",
    "name": "Slipknot",
    "logo": "https://i.etsystatic.com/7955556/r/il/688aa7/3232516453/il_570xN.3232516453_jnl8.jpg",
    "endpoint": "/band/6367d76671d6f85cde1302c1"
  },
  {
    "id": "6367d76671d6f85cde1302c5",
    "name": "Slipknot",
    "logo": "https://i.etsystatic.com/7955556/r/il/688aa7/3232516453/il_570xN.3232516453_jnl8.jpg",
    "endpoint": "/band/6367d76671d6f85cde1302c1"
  },
  {
    "id": "6367d76671d6f85cde1302c6",
    "name": "Slipknot",
    "logo": "https://i.etsystatic.com/7955556/r/il/688aa7/3232516453/il_570xN.3232516453_jnl8.jpg",
    "endpoint": "/band/6367d76671d6f85cde1302c1"
  },
  {
    "id": "6367d76671d6f85cde1302c7",
    "name": "Slipknot",
    "logo": "https://i.etsystatic.com/7955556/r/il/688aa7/3232516453/il_570xN.3232516453_jnl8.jpg",
    "endpoint": "/band/6367d76671d6f85cde1302c1"
  },
  {
    "id": "6367d76671d6f85cde1302c2",
    "name": "Slipknot",
    "logo": "https://i.etsystatic.com/7955556/r/il/688aa7/3232516453/il_570xN.3232516453_jnl8.jpg",
    "endpoint": "/band/6367d76671d6f85cde1302c1"
  }
]

const Home = () => {
  const isAuth = useSelector((state: RootState) => state.authStore.isAuthenticated)
  return (
    <ContainerMain>
      <TitleContainer>
        <Title>Bands</Title>
        {isAuth && <Button>Add band</Button>}
      </TitleContainer>
      <Grid>
        {mocks.map((band) =>
          <CardSmall key={band.id}>
            <Image src={band.logo} />
            <CardContent>
              <Text>{band.name}</Text>
            </CardContent>
          </CardSmall>
        )}
      </Grid>
    </ContainerMain>
  )
}

export default Home;