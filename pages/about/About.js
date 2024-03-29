/**
 * This is the about page for our app
 * 
 * @author: Peter Peng and Sean Ebenmelu and Bess Xu, Fall 2021
 */
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { aboutStyles } from "./aboutStyles";

export default function About() {
  return (
    <ScrollView>
      <View style={aboutStyles.container}>
        <Text style={aboutStyles.title}>About Us</Text>
        <Text style={aboutStyles.body}>
          This is a team project from cs262 @Calvin Unviersity
        </Text>
        <Text style={aboutStyles.subtitle}>Vision statement</Text>
        <Text>
          Do you feel a tingling sensation in your teeth when you eat your
          favorite ice cream or drink your favorite tea? Do you feel nervous to
          talk because you know your breath smells bad? Brushing can be boring
          at times and we’ve found a way to skip that mood. With Toothflex
          you’ll find brushing just as exciting as your favorite activities. Our
          application turns this old and boring chore into an exciting game.
          Rewards, personalized song playlists, fun videos, memes, jokes, etc.,
          among other forms of entertainment, are all included in this tiny app.
          Not only does it track your toothbrush time but it also provides you
          with a guide on the dos and don’ts of oral care. Instead of a simple
          tracker that takes up your whole screen space, why not watch your
          favorite show or get down with your grooviest song playlist. Along
          with that, post a comment, race against your buddies on who brushes
          daily, and enjoy the community that cheers you on to simply brush your
          teeth. Life’s too short to wait for ice cream to melt or worry about
          others smelling the stench of death. Enjoy a boosted confidence with
          Toothflex, without having to sell an arm and leg for that expensive
          tooth repair.
        </Text>
        <Text style={aboutStyles.subtitle}>Meet the Team</Text>
        <Image
          source={{
            uri: "https://www.grantspassschool.com/wp-content/uploads/2018/10/preschoolkidsbanner2.jpg",
          }}
          style={aboutStyles.picturesize}
        />
        <Text>
          Peter Peng {"\n"}
          Sharon Velpula {"\n"}
          Sean Ebenmelu {"\n"}
          Beinan Xu {"\n"}
          Richmond Yevudza
        </Text>
      </View>
    </ScrollView>
  );
}
