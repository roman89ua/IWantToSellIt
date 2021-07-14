import React from "react";
import {} from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: "tomato",
    icon: "floor-lamp",
  },
  { label: "Cars", value: 2, backgroundColor: "orange", icon: "car" },
  {
    label: "Digital devices",
    value: 2,
    backgroundColor: "dodgerblue",
    icon: "tablet-cellphone",
  },
  {
    label: "Games",
    value: 2,
    backgroundColor: "#5b9aa0",
    icon: "gamepad-variant-outline",
  },
  {
    label: "Clothing",
    value: 2,
    backgroundColor: "#f9d5e5",
    icon: "shoe-heel",
  },
  {
    label: "Sport goods",
    value: 2,
    backgroundColor: "#b8a9c9",
    icon: "basketball",
  },
  {
    label: "Books",
    value: 2,
    backgroundColor: "#622569",
    icon: "book-open-page-variant",
  },
  { label: "Jewelry", value: 2, backgroundColor: "#eeac99", icon: "ring" },
  {
    label: "Other",
    value: 3,
    backgroundColor: "blue",
    icon: "window-maximize",
  },
];

const ListingsEditScreen = () => {
  return (
    <Screen>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          maxLength={255}
          multyline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
};

export default ListingsEditScreen;
