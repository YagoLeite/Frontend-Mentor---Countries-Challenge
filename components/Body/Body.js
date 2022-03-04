import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const Body = () => {
  return (
    <Box h="100vh" w="100%">
      <Grid
        h="100%"
        mx="5%"
        gap="8"
        gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
      >
        <GridItem display="flex" justifyContent="center" alignItems="center">
          <Box h="80%" w="80%" _hover={{ w: "90%", h: "90%" }} bg="red">
            oi
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Body;
