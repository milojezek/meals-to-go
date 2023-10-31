import React from "react";
import { StatusBar } from "react-native";
import Searchbar from "../../../components/Search";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";
import styled from "styled-components/native";

/**
 * SafeAreaView works on iOS only!
 * On Android we need to know the height of status bar.
 * StatusBar.currentHeight works for Android only.
 * margin-top has to be used this way, otherwise the app throws an error on iOS
 */
const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  flex-direction: "column";
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space.get("medium")};
`;

const ListView = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space.get("medium")};
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
