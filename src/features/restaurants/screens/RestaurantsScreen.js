import React from "react";
import { StatusBar } from "react-native";
import Searchbar from "../../../components/Search";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";
import styled from "styled-components/native";

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  flex-direction: "column";
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
// margin-top has to be used this way, otherwise the app throws an error on iOS

const SearchContainer = styled.View`
  background-color: white;
  padding: 15px;
`;

const ListView = styled.View`
  flex: 1;
  padding: 15px;
`;

export const RestaurantsScreen = () => (
  <StyledSafeAreaView>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <ListView>
      <RestaurantInfoCard />
    </ListView>
  </StyledSafeAreaView>
);
