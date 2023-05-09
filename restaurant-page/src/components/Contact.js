import React from "react";
import { FaCompass, FaClock, FaPhone, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <>
      <div className="main-contact">
        <section>
          <div className="image-waitress-background">
            <h1>Contacto</h1>
          </div>
        </section>
        <section className="form-contact">
          <div className="container-form">
            <div id="restaurant-info">
              <div>
                <FaCompass className="fa-compass" />
                <address>
                  Av. Morelia 6845, Lino Vargas, 32663, Cd Juárez, Chih.
                </address>
              </div>
              <div>
                <FaClock className="fa-clock" />
                <p>
                  Abierto desde <time>10:00</time> a.m. hasta <time>9:00</time>{" "}
                  p.m. todos los días!
                </p>
              </div>
              <div>
                <FaPhone className="fa-phone" />
                <p>(656)-123-0213</p>
              </div>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-title">
                <FaEnvelope className="fa-envelope" />
                <h3>Tu opinión importa</h3>
              </div>
              <div>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  placeholder="Nombre completo"
                  required
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Correo electrónico"
                  required
                />
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  required
                  placeholder="Escribe tus comentarios..."
                ></textarea>
              </div>
              <button type="submit">Enviar</button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
