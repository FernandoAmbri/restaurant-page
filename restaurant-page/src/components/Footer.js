import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const icons = [<FaFacebook />, <FaInstagram />, <FaYoutube />, <FaTwitter />];

function Footer() {
  return (
    <>
      <footer className="footer">
        <section className="social-icons">
          <p>Siguenos en nuestras redes sociales</p>
          <div className="icons">
            {icons.map((icon, i) => (
              <div key={"icon" + i} className="icon-background">
                <a href="/">{icon}</a>
              </div>
            ))}
          </div>
        </section>
        <hr />
        <p>© 2022 Pizza Logo</p>
      </footer>
    </>
  );
}

export default Footer;
