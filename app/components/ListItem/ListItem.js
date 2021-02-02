import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import MainText from "../MainText";
import colors from "../../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";

const ListItem = ({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
  IconComponent,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.textArea}>
            <MainText style={styles.title} numberOfLines={1}>
              {title}
            </MainText>
            {subTitle && (
              <MainText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </MainText>
            )}
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={25}
            color={colors.medium}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: colors.medium,
  },
  textArea: {
    flex: 1,
    marginLeft: 15,
    justifyContent: "center",
  },
  title: {
    fontWeight: "500",
  },
});

ListItem.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  image: PropTypes.number,
  onPress: PropTypes.func,
  renderRightActions: PropTypes.func,
  IconComponent: PropTypes.object,
};
