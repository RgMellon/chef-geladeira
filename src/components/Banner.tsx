import { Box, Column, Row, Text, Image } from "native-base";
import PotFoodSVG from "../assets/icons/pot-food.svg";
import ChefImage from "../assets/icons/chef.png";

export function Banner() {
  return (
    <Box
      mt={"-60px"}
      padding="20px"
      borderWidth={2}
      borderColor={"#EBEBEB"}
      width={"100%"}
      h={"100px"}
      mb="6"
      rounded={"2xl"}
    >
      <Row justifyContent={"center"} alignItems={"center"}>
        <Column w="80%">
          <Text fontFamily={"heading"} fontSize={"16px"}>
            Adicione seus ingredientes{" "}
          </Text>

          <Text fontFamily={"mono"} fontSize={"12px"}>
            Digite o nome do seu ingrediente no campo abaixo
          </Text>
        </Column>

        <Box
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius={"full"}
          width={"60px"}
          height={"60px"}
          backgroundColor="tertiary.50"
        >
          <Image
            resizeMode="cover"
            source={ChefImage}
            width={"60px"}
            h={"60px"}
            mr="5px"
          />
        </Box>
      </Row>
    </Box>
  );
}
