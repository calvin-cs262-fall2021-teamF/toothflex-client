/**
 * Stylings for the about page
 * 
 * @author: Peter Peng and Sean Ebenmelu and Bess Xu, Fall 2021
 */
import { StyleSheet } from "react-native";

export const aboutStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },
  title: {
    color: "#36C8EC",
    fontSize: 50,
    alignItems: "center",
  },
  subtitle: {
    fontSize: 20,
    color: "#2DB2D3",
    alignItems: "center",
  },
  body: {
    alignItems: "center",
    fontSize: 20,
  },
  picturesize: {
    width: 342,
    height: 150,
  },
});
