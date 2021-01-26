import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";

import PropTypes from "prop-types";
import MainText from "../MainText";
import colors from "../../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";

const ListItem = ({
  title,
  subTitle,
  image,
  ImageComponent,
  onPress,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {ImageComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.textArea}>
            <MainText style={styles.title}>{title}</MainText>
            {subTitle && (
              <MainText style={styles.subTitle}>{subTitle}</MainText>
            )}
          </View>
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
};
