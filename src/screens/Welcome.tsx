import { FlatList, Image } from "native-base";

import ChefImage from "../assets/icons/chef.png";
import ChefHowWork from "../assets/icons/howWorks.png";
import ChefFork from "../assets/icons/chefFork.png";

import Animated from "react-native-reanimated";
import React, { useRef, useState } from "react";
import { Dimensions } from "react-native";
import { CarrouselItem } from "../components/CarrouselItem";
import { useWelcome } from "../hooks/useWelcome";

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
  const { handleShowWelcomeScreen } = useWelcome();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const DATA = [
    {
      title: "Bem-vindo",
      subtitle:
        "Bora Cozinhar juntos ? Te damos ideias de refeições para o seu dia dia",
      buttonTitle: "como funciona?",
      img: (
        <Image
          resizeMode="cover"
          source={ChefImage}
          width={"400px"}
          h={"400px"}
          alt="image of freezer"
        />
      ),
      bgColor: "#80A7AC",
    },
    {
      title: "Fácil",
      subtitle:
        "Adicione os itens que voce tem em sua geladeira, e eu te ajudo",
      buttonTitle: "Certo, bora começar!!",

      img: (
        <Image
          resizeMode="cover"
          source={ChefHowWork}
          width={"400px"}
          h={"400px"}
          alt="image of freezer"
        />
      ),
      bgColor: "#F89F9F",
    },
    {
      title: "Quase lá",
      subtitle:
        "Eu também te ajudo a dar uma base em calorias que o prato tem, sou completo heim =)",
      buttonTitle: "Agora vamos iniciar",
      img: (
        <Image
          resizeMode="cover"
          source={ChefFork}
          width={"400px"}
          h={"400px"}
          alt="image of freezer"
        />
      ),
      bgColor: "#99AC80",
    },
  ] as StepProps[];

  const handleNextItem = () => {
    const nextIndex = currentIndex + 1;

    if (currentIndex === 2) {
      handleShowWelcomeScreen();
      return;
    }

    if (nextIndex < DATA.length) {
      flatListRef?.current?.scrollToIndex({ index: nextIndex });
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
      scrollEnabled={true}
      renderItem={({ item }) => (
        <CarrouselItem onClickButton={handleNextItem} item={item} />
      )}
    />
  );
}
