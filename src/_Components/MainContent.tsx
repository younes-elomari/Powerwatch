import { Box, Container, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import mainImage from "../../public/mainImage.jpg";
import product from "../data/product.json";

const MainContent = () => {
  return (
    <Container>
      <Grid columns={{ initial: "1", md: "1fr 1.5fr" }}>
        <Grid rows={"2"}>
          <Box className="place-content-center overflow-hidden relative bg-gray-600 py-14 px-3 text-center blackBg">
            <Box className="bgCollectionTitle">
              <Text>Collection</Text>
            </Box>
            <Box className="relative">
              <Text
                size="7"
                weight="light"
                className="text-gray-300 relative z-10 appearFromLeft"
              >
                Collection <span className="text-gray-100">2024</span>
              </Text>
            </Box>
          </Box>
          <Box className="place-content-center py-4 px-6 whiteSmokeBg">
            <Flex align="center" gap="2">
              <Box className="space-y-3">
                <Heading size="6" weight="light">
                  {product.name}
                </Heading>
                <Box>
                  <Text size="2" className="text-gray-900" weight="medium">
                    {product.description}
                  </Text>
                </Box>
              </Box>
              <Box>
                <h5 className="HeaderMainHeadingSmall">78</h5>
              </Box>
            </Flex>
          </Box>
        </Grid>
        <Box className="darkBrownBg">
          <img
            src={mainImage}
            alt="main bg"
            className="object-cover w-full h-full fadeInAnimation"
          />
        </Box>
      </Grid>
    </Container>
  );
};

export default MainContent;
