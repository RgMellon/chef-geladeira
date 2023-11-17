import { FlatList } from "native-base";

import BowlFood from "../assets/icons/bowl-food.svg";
import Freeze from "../assets/icons/freeze.svg";
import Food from "../assets/icons/food.svg";

import Animated from "react-native-reanimated";
import React, { useRef, useState } from "react";
import { Dimensions } from "react-native";
import { CarrouselItem } from "../components/CarrouselItem";

const SRC_WIDTH = Dimensions.get("window").width;

export type StepProps = {
  title: string;
  subtitle: string;
  buttonTitle: string;
  bgColor: string;
  img: React.ReactNode;
};

export type ItemProps = {
  item: StepProps[];
};

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList<StepProps>);

export function Welcome() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const DATA = [
    {
      title: "Bem-vindo",
      subtitle:
        "Bora Cozinhar juntos ? Te damos ideias de refeições para o seu dia dia",
      buttonTitle: "como funciona?",
      img: <BowlFood width={"300"} height={"300"} />,
      bgColor: "#80A7AC",
    },
    {
      title: "Fácil",
      subtitle: "Cadastre os itens que tem em sua geladeira",
      buttonTitle: "Certo, mais alguma coisa?",

      img: <Freeze width={"300"} height={"300"} />,
      bgColor: "#F89F9F",
    },
    {
      title: "Quase lá",
      subtitle: "Agora é só escolher o tipo de refeição e... prontinho",
      buttonTitle: "Entendi, Iniciar",
      img: <Food width={"300"} height={"300"} />,
      bgColor: "#99AC80",
    },
  ] as StepProps[];

  const handleNextItem = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < DATA.length) {
      flatListRef?.current!.scrollToIndex({ index: nextIndex });
      setCurrentIndex(nextIndex);
    }
  };

  return (
    <AnimatedFlatList
      horizontal
      data={DATA}
      scrollEventThrottle={16}
      decelerationRate="fast"
      bounces={false}
      keyExtractor={(item) => item.title}
      ref={flatListRef}
      snapToAlignment={"center"}
      snapToInterval={SRC_WIDTH}
      showsHorizontalScrollIndicator={false}
      disableIntervalMomentum={true}
      disableScrollViewPanResponder={true}
      scrollEnabled={false}
      renderItem={({ item }) => (
        <CarrouselItem onClickButton={handleNextItem} item={item} />
      )}
    />
  );
}
