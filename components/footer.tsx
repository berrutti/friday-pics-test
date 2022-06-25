import Container from "./container";

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear().toString();
  };

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <h2>© {getYear()} Friday Pics</h2>
      </Container>
    </footer>
  );
};

export default Footer;
