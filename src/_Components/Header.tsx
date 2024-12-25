import NavBar from "./NavBar";
import HeaderContent from "./HeaderContent";
import { Container } from "@radix-ui/themes";

const Header = () => {
  return (
    <section className="headerBg px-3 pt-8">
      <Container>
        <div className="whiteSmokeBg py-6 px-8 m-auto space-y-5">
          <NavBar />
          <HeaderContent />
        </div>
      </Container>
    </section>
  );
};

export default Header;
