import React, { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import PropTypes from "prop-types";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MainText from "../MainText";
import Screen from "../Screen";
import PickerItem from "../PickerItem";

const AppPicker = ({
  iconName,
  items,
  numberOfColumns = 1,
  onSelectItem,
  placeholder,
  PickerItemComponent = PickerItem,
  selectedItem,
  width = "100%",
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const onPressPickerItemHandler = (item) => {
    onSelectItem(item);
    setModalVisible(!modalVisible);
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
        <View style={[styles.container, { width }]}>
          {iconName && (
            <MaterialCommunityIcons
              name={iconName}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}
          <MainText style={styles.text}>
            {selectedItem ? (
              <MainText style={styles.text}>{selectedItem.label}</MainText>
            ) : (
              <MainText style={styles.placeholder}>{placeholder}</MainText>
            )}
          </MainText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.medium}
            style={styles.icon}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                onPress={() => onPressPickerItemHandler(item)}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: colors.medium,
    flex: 1,
  },
  text: { flex: 1 },
});

export default AppPicker;

AppPicker.propTypes = {
  iconName: PropTypes.string,
  items: PropTypes.array,
  numberOfColumns: PropTypes.number,
  onSelectItem: PropTypes.func,
  PickerItemComponent: PropTypes.func,
  placeholder: PropTypes.string,
  selectedItem: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
