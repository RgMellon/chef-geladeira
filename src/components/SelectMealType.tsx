import { CheckIcon, ChevronDownIcon, Select } from "native-base";

type SelectMealProps = {
  onSelect: (meal: string) => void;
  selectedMeal: string;
};

export function SelectMealType({ onSelect, selectedMeal }: SelectMealProps) {
  return (
    <Select
      selectedValue={selectedMeal}
      placeholder="Selecione o tipo de refeição"
      accessibilityLabel="Selecione uma refeição"
      _selectedItem={{
        bg: "tertiary.100",
        rounded: "lg",
        tintColor: "amber.100",
        endIcon: <CheckIcon size="4" />,
      }}
      dropdownIcon={<ChevronDownIcon size="4" mr={2} />}
      mt={1}
      mb={4}
      height={"50px"}
      rounded={"lg"}
      color={"gray.100"}
      onValueChange={onSelect}
    >
      <Select.Item
        fontSize={"12px"}
        color="gray.100"
        label="Café da manhã"
        value="cafe da manha"
      />
      <Select.Item
        fontSize={"12px"}
        color="gray.100"
        label="Almoço"
        value="almoco"
      />
      <Select.Item
        fontSize={"12px"}
        color="gray.100"
        label="Café da tarde"
        value="cafe da tarde"
      />
      <Select.Item
        fontSize={"12px"}
        color="gray.100"
        label="Jantar"
        value="Jantar"
      />
      <Select.Item
        fontSize={"12px"}
        color="gray.100"
        label="Lanche"
        value="lanche"
      />
    </Select>
  );
}
