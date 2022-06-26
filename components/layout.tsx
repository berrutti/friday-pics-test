import Footer from "./footer";
import Meta from "./meta";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
