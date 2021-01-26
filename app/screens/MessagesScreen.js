import React, { useState } from "react";
import { FlatList } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ItemSeparator from "../components/ItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const MessagesScreen = () => {
  const initialMessages = [
    {
      id: 1,
      title: "Title #1",
      description: "Description #1",
      image: require("../assets/default_user.jpeg"),
    },
    {
      id: 2,
      title: "Title #2",
      description: "Description #2",
      image: require("../assets/default_user.jpeg"),
    },
  ];
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing] = useState(false);

  const deleteHandler = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  const refreshHandler = () => {
    setMessages([
      {
        id: 1,
        title: "Title #1",
        description: "Description #1",
        image: require("../assets/default_user.jpeg"),
      },
    ]);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log(`Message ${item.title} selected`)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => deleteHandler(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ItemSeparator}
        refreshing={refreshing}
        onRefresh={refreshHandler}
      />
    </Screen>
  );
};
export default MessagesScreen;

// const style = StyleSheet.create({});
