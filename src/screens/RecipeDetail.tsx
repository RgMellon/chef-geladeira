import {
  Box,
  ScrollView,
  Text,
  Row,
  Progress,
  Column,
  CheckIcon,
  InfoOutlineIcon,
} from "native-base";

import DetailSvg from "../assets/detail/homeDetail.svg";

export function RecipeDetail() {
  return (
    <ScrollView flex="1" mt="40px" p="20px" position={"relative"}>
      <Text fontFamily={"heading"} fontSize={"26px"}>
        Torta de Batata com bacon
      </Text>
      {/* TODO separar em novo component de nutricao */}
      <Box mt="20px">
        <Text fontFamily={"body"} fontSize={"16px"}>
          Informações Nutricionais
        </Text>

        <Box
          mt="20px"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          p="10px"
        >
          <Row alignItems={"center"}>
            {/* <InfoOutlineIcon size="4" /> */}
            <Text fontFamily={"mono"} fontSize={"12px"} fontWeight={"bold"}>
              A cada<Text fontFamily={"body"}> 100 </Text>gramas
            </Text>
          </Row>

          <Column my="3">
            <Row justifyContent={"space-between"} mb="4px">
              <Text fontFamily={"mono"} fontSize={"13px"}>
                Carbs
              </Text>

              <Text fontFamily={"body"} fontSize={"14px"}>
                51g
              </Text>
            </Row>

            <Progress
              size={"xs"}
              bg="coolGray.100"
              _filledTrack={{
                bg: "tertiary.100",
              }}
              value={75}
            />
          </Column>

          <Column my="3">
            <Row justifyContent={"space-between"} mb="4px">
              <Text fontFamily={"mono"} fontSize={"14px"}>
                Prot
              </Text>

              <Text fontFamily={"body"} fontSize={"13px"}>
                20g
              </Text>
            </Row>

            <Progress
              size={"xs"}
              bg="coolGray.100"
              _filledTrack={{
                bg: "danger.200",
              }}
              value={20}
            />
          </Column>

          <Column my="3">
            <Row justifyContent={"space-between"} mb="4px">
              <Text fontFamily={"mono"} fontSize={"14px"}>
                Gordura
              </Text>

              <Text fontFamily={"body"} fontSize={"13px"}>
                80g
              </Text>
            </Row>

            <Progress
              size={"xs"}
              bg="coolGray.100"
              _filledTrack={{
                bg: "warning.200",
              }}
              value={75}
            />
          </Column>
        </Box>
      </Box>

      {/* TODO separar em novo component nutricao*/}

      <Box mt="20px">
        <Text fontFamily={"body"} fontSize={"16px"}>
          Ingredientes
        </Text>

        <Box
          mt="20px"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          p="10px"
          bg="white"
        >
          <Text fontFamily={"mono"} fontSize={"11px"}>
            • Batata
          </Text>

          <Text fontFamily={"mono"} fontSize={"11px"}>
            • Alho
          </Text>

          <Text fontFamily={"mono"} fontSize={"11px"}>
            • Cebola
          </Text>

          <Text fontFamily={"mono"} fontSize={"11px"}>
            • Azeite
          </Text>
        </Box>
      </Box>

      <Box mt="20px">
        <Text fontFamily={"body"} fontSize={"16px"}>
          Como fazer
        </Text>

        <Box
          mt="20px"
          rounded="lg"
          borderColor="coolGray.200"
          borderWidth="1"
          p="10px"
          bg="white"
        >
          <Row alignItems={"center"}>
            <Text fontFamily={"heading"} color={"danger.200"} fontSize={"36px"}>
              1
            </Text>

            <Text ml="10px" fontFamily={"mono"} fontSize={"11px"} flex="1">
              lorem ipaosid aosido asidoias aosid sa asodiaosid oasidoasdi
              adosm, asjdk .lksad asd aspdoaps aspdo
            </Text>
          </Row>
        </Box>

        <Box
          mt="20px"
          rounded="lg"
          borderColor="coolGray.200"
          borderWidth="1"
          p="10px"
          bg="white"
        >
          <Row alignItems={"center"}>
            <Text fontFamily={"heading"} color={"danger.200"} fontSize={"36px"}>
              2
            </Text>

            <Text ml="10px" fontFamily={"mono"} fontSize={"11px"} flex="1">
              lorem ipaosid aosido asidoias aosid sa asodiaosid oasidoasdi
              adosm, asjdk .lksad asd aspdoaps aspdo
            </Text>
          </Row>
        </Box>

        <Box
          mt="20px"
          rounded="lg"
          borderColor="coolGray.200"
          borderWidth="1"
          p="10px"
          bg="white"
        >
          <Row alignItems={"center"}>
            <Text fontFamily={"heading"} color={"danger.200"} fontSize={"36px"}>
              3
            </Text>

            <Text ml="10px" fontFamily={"mono"} fontSize={"11px"} flex="1">
              lorem ipaosid aosido asidoias aosid sa asodiaosid oasidoasdi
              adosm, asjdk .lksad asd aspdoaps aspdo
            </Text>
          </Row>
        </Box>
      </Box>
    </ScrollView>
  );
}
