import {
  ArrowDownIcon,
  Badge,
  Box,
  Button,
  Column,
  FlatList,
  Flex,
  Input,
  KeyboardAvoidingView,
  Modal,
  Row,
  Text,
  useToast,
  ScrollView,
  VStack,
} from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";

import DetailSvg from "../assets/detail/homeDetail.svg";
import { SelectMealType } from "../components/SelectMealType";
import { useRef, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { Keyboard, Platform } from "react-native";
import { Banner } from "../components/Banner";

const API_KEY = "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";
const systemMessage = {
  // MElhorar para pedir que ele traga as medidas dentro de ingredientes sempre
  role: "system",
  content: `Voce é um endpoint que devolve receitas da culinaria brasileira ensinando quem deseja cozinhar, 
      traga a resposta formatada sempre em json com as chaves, ingredients, 
      recipe, instructions onde os ingredientes ficam dentro de ingredients cada ingrediente é um objeto do array, contendo as seguintes chaves
      name e measure, a onde name é o nome do ingrediente e a measure é a medida daquele ingrediente para a receita e
      recipe contem o titulo da receita e instructions as instrucoes de como fazer, onde cada instrução é um item no array, e um calculo dos macros nutrientes baseado em 100 gramas da receita dentro de uma
      chave nutrients que contem as chaves carb, protein, gordura e calories`,
};

export function Home() {
  const toast = useToast();

  const [ingredients, setIngredients] = useState<string[]>([]);
  const [hasError, setHasError] = useState(false);

  const ingredientText = useRef("");
  const inputRef = useRef<TextInput>(null);

  function onAddIngredient() {
    try {
      if (ingredientText.current === "") {
        throw new Error("Invalid argument");
      }

      setIngredients((oldState) => [...oldState, ingredientText.current]);
      ingredientText.current = "";
      inputRef.current?.clear();
      setHasError(false);
    } catch (err) {
      toast.show({
        description: "Preencha o campo com um ingrediente",
      });

      setHasError(true);
      return;
    }
  }

  const isAvailable = ingredients.length > 0;

  async function handleChat() {
    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        systemMessage,
        {
          role: "user",
          content: JSON.stringify({
            intent: "get_recipe",
            ingredients,
            language: "portuguese",
          }),
        },
      ],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data.choices[0].message.content);
      });
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <VStack padding={"20px"} flex={1} mt="80px">
        <Column flex={1}>
          <Column flex={1}>
            <Banner />

            <Row justifyContent={"space-between"} alignItems={"center"}>
              <Input
                isInvalid={hasError}
                ref={inputRef}
                variant="outline"
                onChangeText={(text) => (ingredientText.current = text)}
                width={"83%"}
                height={"50px"}
                rounded={"lg"}
                placeholder="Adicione um ingrediente"
                onSubmitEditing={onAddIngredient}
                _focus={{
                  borderColor: "primary.50",
                  bgColor: "white",
                }}
              />

              <Button
                size="sm"
                background={"primary[50]"}
                rounded="md"
                width="40px"
                height={"40px"}
                onPress={onAddIngredient}
              >
                <Ionicons name="add" size={18} color="white" />
              </Button>
            </Row>

            <Row mt={4} flexWrap={"wrap"}>
              <FlatList
                horizontal
                data={ingredients}
                renderItem={({ item }) => (
                  <Badge mb="1" mr="1" bg="primary.100" variant={"solid"}>
                    <Text color="primary.50" fontSize={"12px"}>
                      {item}
                    </Text>
                  </Badge>
                )}
              ></FlatList>
            </Row>

            <DetailSvg
              width={"200%"}
              height={800}
              fill={"rgba(128, 167, 172, 0.8)"}
              style={{ position: "absolute", top: 250, right: -100 }}
            />
          </Column>

          <Button
            isDisabled={!isAvailable}
            _disabled={{
              background: "gray.100",
            }}
            bg="white"
            height={"50px"}
            _text={{ color: "primary.50" }}
            rounded={"lg"}
            mb={"20px"}
            onPress={handleChat}
            _pressed={{
              bg: "primary.100",
              color: "white",
            }}
          >
            Pesquisar
          </Button>
        </Column>
      </VStack>
    </KeyboardAvoidingView>
  );
}
