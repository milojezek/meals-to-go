import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const cardStyle = `
  background-color: white;
  padding: 10px;
`;

const InfoCard = styled(Card)`
  ${cardStyle}
`;

const CardCover = styled(Card.Cover)`
  ${cardStyle}
`;

const Title = styled.Text`
  text-align: center;
`;

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
    <InfoCard elevation={5}>
      <CardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </InfoCard>
  );
};
