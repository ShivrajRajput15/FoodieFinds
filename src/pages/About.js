import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My FoodieFinds</Typography>
        <p>

          "Welcome to Foodie Finds, where culinary exploration meets satisfaction! Embark on a gastronomic journey with our diverse menu featuring an array of flavors and delicacies crafted to tantalize your taste buds. From traditional favorites to innovative creations, each dish is prepared with passion and precision to ensure a memorable dining experience. Whether you're craving classic comfort food or seeking culinary adventures, Foodie Finds is your ultimate destination for delicious discoveries. Join us and indulge in a culinary adventure that celebrates the art of food and the joy of dining!"
        </p>
        <br />
        <p>

          "Step into Foodie Finds, where every dish is a celebration of flavor, culture, and tradition. Our passion for food is evident in every aspect of our menu, from the carefully selected ingredients to the meticulous preparation techniques. Whether you're craving the comforting embrace of familiar flavors or eager to embark on a culinary adventure, Foodie Finds promises to satisfy your cravings and ignite your taste buds. Join us for an unforgettable dining experience that transcends mere sustenance and transforms into a journey of culinary discovery. At Foodie Finds, we invite you to savor the magic of food and create unforgettable memories with each delicious bite."
        </p>
      </Box>
    </Layout>
  );
};

export default About;
