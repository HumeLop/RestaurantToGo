import React from "react";
import { SafeAreaView, View, StatusBar, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
`;
const SearchContainer = styled(View)`
  padding: 16px
  background-color: #22A359;
`;
const RestaurantListContainer = styled(View)`
  flex: 1
  padding: 16px
  background-color: #10A3E1;
`;

export const RestaurantScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <FlatList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight,
//   },
//   search: {
//     padding: 16,
//     backgroundColor: "#22A359",
//   },
//   list: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#10A3E1",
//   },
// });
