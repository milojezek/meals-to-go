import React from "react";
import { Card } from "react-native-paper";
import { Text, StyleSheet } from "react-native";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon,
    photos = [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    address = "192 Some Random Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 10,
  },
  cover: {
    padding: 10,
    backgroundColor: "white",
  },
  title: {
    textAlign: "center",
  },
});
