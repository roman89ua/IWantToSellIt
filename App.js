import React /*, { useState }*/ from "react";
import LoginScreen from "./app/screens/LoginScreen";

// import Screen from "./app/components/Screen";
//
// import AppPicker from "./app/components/AppPicker";
// import AppTextInput from "./app/components/AppTextInput";

// const categories = [
//   { label: "Clothing", value: 1 },
//   { label: "Furniture", value: 2 },
//   { label: "Technician", value: 3 },
// ];

export default function App() {
  // const [category, setCategory] = useState();
  return (
    // <Screen>
    //   <AppPicker
    //     selectedItem={category}
    //     onSelectItem={(item) => setCategory(item)}
    //     items={categories}
    //     iconName="apps"
    //     placeholder="Category"
    //   />
    //   <AppTextInput iconName="email" placeholder="Email">
    //     {category}
    //   </AppTextInput>
    // </Screen>
    <LoginScreen />
  );
}
