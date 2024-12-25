import { Box, Container, Grid, Heading, Text } from "@radix-ui/themes";
import footerImg from "../../public/footerImage.jpg";
import product from "../data/product.json";

const Footer = () => {
  return (
    <Container>
      <Grid columns={{ initial: "1", md: "2" }}>
        <Box className="relative blackBg">
          <Heading
            size="6"
            weight="light"
            className="absolute bottom-4 right-4 text-gray-300 z-10"
          >
            {product.name}{" "}
            <span className="text-gray-200">${product.price}</span>
          </Heading>
          <img
            src={footerImg}
            alt="main bg"
            className="object-cover w-full h-full fadeInAnimation"
          />
        </Box>
        <Box className="flex flex-col items-row snap-center content-center object-center justify-center whiteSmokeBg py-24">
          <Box className="place-self-center px-10">
            <Heading
              size="7"
              weight="light"
              className="text-gray-950 font-bold text-lg pb-4"
            >
              {product.brand}
            </Heading>
            <Text size="2" className="text-gray-900" weight="medium">
              {product.description}
            </Text>
          </Box>
        </Box>
      </Grid>
    </Container>
  );
};

export default Footer;
