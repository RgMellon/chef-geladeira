import { Box, Button, Flex, Text } from "native-base";
import Animated, { SlideInRight, SlideOutLeft } from "react-native-reanimated";
import { StepProps } from "../screens/Welcome";
import { Dimensions } from "react-native";
import DetailSvg from "../assets/detail/homeDetail.svg";

const SRC_WIDTH = Dimensions.get("window").width;

type CarrouselItem = {
  onClickButton: () => void;
  item: StepProps;
};

export function CarrouselItem({ item, onClickButton }: CarrouselItem) {
  return (
    <Flex
      position={"relative"}
      flex="1"
      alignItems={"center"}
      width={SRC_WIDTH}
    >
      <Box marginTop="60px" padding={"20px"}>
        <Text fontFamily={"heading"} fontSize={"36px"}>
          {item.title}
        </Text>
      </Box>

      <Text
        textAlign={"center"}
        fontFamily={"body"}
        color={"gray.100"}
        fontSize={"16px"}
      >
        {item.subtitle}
      </Text>

      <Animated.View
        style={{ zIndex: 1, marginTop: 50 }}
        entering={SlideInRight.duration(300).delay(200)}
      >
        {item.img}
      </Animated.View>

      <DetailSvg
        width={"100%"}
        height={600}
        fill={item.bgColor}
        style={{ position: "absolute", top: 400 }}
      />
      <Button
        zIndex={2}
        marginTop={10}
        background={"white"}
        onPress={onClickButton}
        borderRadius={8}
        _text={{
          color: "black",
        }}
      >
        {item.buttonTitle}
      </Button>
    </Flex>
  );
}
