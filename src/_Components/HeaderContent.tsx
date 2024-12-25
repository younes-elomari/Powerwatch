import { Box, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { useState } from "react";
import watchImage from "../../public/watchImage.png";
import product from "../data/product.json";

const HeaderContent = () => {
  const [buttonHover, setHover] = useState(false);

  return (
    <Box>
      <Grid
        columns={{ initial: "1", md: "1.7fr 1.3fr 0.5fr" }}
        gap="4"
        align="center"
      >
        <Box className="space-y-4">
          <Grid
            align="center"
            columns={{ initial: "60px 1fr" }}
            gap="2"
            className="text-gray-900"
          >
            <Heading weight="bold" size="5">
              ${product.price}
            </Heading>
            <Flex align="center" gap="3">
              <h1 className="text-[28px] md:text-[34px] font-light">
                {product.name}
              </h1>
              <div className="appearFromLeft bg-gray-950 rounded-2xl px-3 py-1 text-gray-100">
                <Text size="1" weight="medium">
                  {product.discount}%OFF
                </Text>
              </div>
            </Flex>
          </Grid>
          <Grid align="center" columns={{ initial: "60px 1fr" }} gap="2">
            <Box></Box>
            <Flex align="center" gap="4">
              {product.props.map((prop) => (
                <Text
                  key={prop}
                  size="1"
                  className="text-gray-800"
                  weight="medium"
                >
                  {prop}
                </Text>
              ))}
            </Flex>
          </Grid>
          <Grid align="start" columns={{ initial: "60px 1fr" }} gap="2">
            <Text size="1" className="text-gray-900" weight="medium">
              {product.brand}
            </Text>
            <Text size="2" className="text-gray-900" weight="medium">
              {product.description}
            </Text>
          </Grid>
          <Grid align="start" columns={{ initial: "60px 1fr" }} gap="2">
            <Box></Box>
            <Box>
              <button
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
                className="primaryButton"
              >
                By Now
              </button>
            </Box>
          </Grid>
        </Box>
        <Box className={buttonHover ? "scale " : "resetScale "}>
          <img src={watchImage} alt="watch img" className="fadeInAnimation" />
        </Box>
        <Box>
          <h5 className="HeaderMainHeading">78</h5>
        </Box>
      </Grid>
    </Box>
  );
};

export default HeaderContent;
