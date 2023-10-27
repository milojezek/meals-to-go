import React from "react";
import { StatusBar, StyleSheet, View, SafeAreaView } from "react-native";
import Searchbar from "../../../components/Search";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";
import styled from "styled-components/native";

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  flex-direction: "column";
`;

const SearchArea = styled.View`
  background-color: white;
  padding: 15px;
  margin-top: ${StatusBar.currentHeight}px;
`;

const ListView = styled.View`
  flex: 1;
  padding: 15px;
`;

export const RestaurantsScreen = () => (
  <StyledSafeAreaView>
    <SearchArea>
      <Searchbar />
    </SearchArea>
    <ListView>
      <RestaurantInfoCard />
    </ListView>
  </StyledSafeAreaView>
);
