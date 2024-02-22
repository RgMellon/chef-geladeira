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
import { useEffect, useRef, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { Platform } from "react-native";
import { Banner } from "../components/Banner";
import { useRecipe } from "../hooks/useRecipe";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const toast = useToast();
  const { navigate } = useNavigation();
  const { createRecipe, loadRecipe } = useRecipe();

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

  async function handleSearchRecipe() {
    try {
      createRecipe(ingredients);
      navigate("recipeDetail");
    } catch (err) {
      alert("Erro");
    }
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
            // isLoading={load}
            isLoadingText="Fazendo a receita..."
            isDisabled={!isAvailable}
            _disabled={{
              background: "gray.100",
            }}
            bg="white"
            height={"50px"}
            _text={{ color: "primary.50" }}
            rounded={"lg"}
            mb={"20px"}
            onPress={handleSearchRecipe}
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
