import { Box, Container, Grid, Heading, Text } from "@radix-ui/themes";
import watchImage from "../../public/watchImage.png";
import product from "../data/product.json";

const ProductDetails = () => {
  const productDetails = product.details;

  return (
    <Container className=" text-gray-200">
      <Box className="py-16 px-8 relative overflow-hidden bgBrown">
        <div className="bgProductDetailsTitle">Features</div>
        <Grid
          columns={{ initial: "1", md: "1fr 1fr 1fr" }}
          gap="2"
          className="relative overflow-hidden"
        >
          <Box className="text-gray-950 space-y-12 place-content-center relative z-10">
            <Box className="place-items-end">
              <Box className="max-w-64">
                <Heading size="6" weight="light" className="pb-1">
                  {productDetails[0].title}
                </Heading>
                <Text size="2" weight="medium" className="text-gray-800">
                  {productDetails[0].text}
                </Text>
              </Box>
            </Box>
            <Box className="place-items-start">
              <Box className="max-w-64">
                <Heading size="6" weight="light" className="pb-1">
                  {productDetails[1].title}
                </Heading>
                <Text size="2" weight="medium" className="text-gray-800">
                  {productDetails[1].text}
                </Text>
              </Box>
            </Box>
            <Box className="place-items-end">
              <Box className="max-w-72">
                <Heading size="6" weight="light" className="pb-1">
                  {productDetails[2].title}
                </Heading>
                <Text size="2" weight="medium" className="text-gray-800">
                  {productDetails[2].text}
                </Text>
              </Box>
            </Box>
          </Box>
          <Box className="relative z-10">
            <img src={watchImage} alt="image" className="fadeInAnimation" />
          </Box>
          <Box className="text-gray-950 space-y-10 place-content-center relative z-10">
            <Box className="place-items-end">
              <Box className="max-w-64">
                <Heading size="6" weight="light" className="pb-1">
                  {productDetails[3].title}
                </Heading>
                <Text size="2" weight="medium" className="text-gray-800">
                  {productDetails[3].text}
                </Text>
              </Box>
            </Box>
            <Box className="place-items-start">
              <Box className="max-w-64">
                <Heading size="6" weight="light" className="pb-1">
                  {productDetails[4].title}
                </Heading>
                <Text size="2" weight="medium" className="text-gray-800">
                  {productDetails[4].text}
                </Text>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductDetails;
