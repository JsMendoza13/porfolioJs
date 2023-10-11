import React, { useEffect, useState } from "react";
import "./contact.css";
import { RiEmotionUnhappyFill } from "react-icons/ri";

const Contact = () => {
  const [showUnhappyIcon, setShowUnhappyIcon] = useState(false);

  useEffect(() => {
    const formulario = document.getElementById("form");
    const inputs = document.querySelectorAll("#form__id input");

    const expresion = {
      nombre: /^[a-zA-ZA-ÿ\s]{1,40}$/,
      correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    };

    const validarFormulario = (e) => {
      if (e.target && e.target.classList) {
        switch (e.target.name) {
          case "nombre":
            if (expresion.nombre.test(e.target.value)) {
              document
                .getElementById("group__nombre")
                .classList.remove("form-group-incorrecto");
              setShowUnhappyIcon(false);
            } else {
              document
                .getElementById("group__nombre")
                .classList.add("form-group-incorrecto");
              setShowUnhappyIcon(true);
            }
            break;
          case "email":
            break;
        }
      }
    };

    if (formulario) {
      inputs.forEach((input) => {
        input.addEventListener("keyup", validarFormulario);
        input.addEventListener("blur", validarFormulario);
      });

      formulario.addEventListener("submit", (e) => {
        e.preventDefault();
      });
    }
  }, []);
  return (
    <>
      <section id="form">
        <div className="contenedorForm">
          <h2 className="formTitle" id="contact">
            Contact me 📧
          </h2>

          <div className="form-container">
            <form
              action="https://formsubmit.co/df6ca9cef3e73c5b0e6cab31a0e2b7ba"
              method="POST"
              className="form"
              id="form__id"
            >
              <div className="form-group" id="group__nombre">
                <label htmlFor="nombre" className="lbl_form">
                  You're name:
                </label>
                <div className="form__input__div">
                  <input
                    type="text"
                    name="nombre"
                    className="form__input"
                    id="nombre"
                  />
                  <div className="form__validation_icon">
                    {showUnhappyIcon && <RiEmotionUnhappyFill />}
                  </div>
                </div>
                <p className="form__input-error">
                  Tu nombre no puede ser menos de 3 digitos.
                </p>
              </div>

              <div className="form-group" id="group__email">
                <label htmlFor="correo" className="lbl_form">
                  You're email:
                </label>
                <div className="form__input__div">
                  <input
                    type="text"
                    name="email"
                    className="form__input"
                    id="correo"
                  />
                  <div className="form__validation_icon">
                    {showUnhappyIcon && <RiEmotionUnhappyFill />}
                  </div>
                </div>
                <p className="form__input-error">Tu email no es correcto.</p>
              </div>

              <div className="form-group" id="textArea__group">
                <label htmlFor="textarea" className="textArea">
                  How can I help you?
                </label>

                <textarea
                  name="comments"
                  id="textarea"
                  rows="10"
                  cols="50"
                  defaultValue=" "
                />
              </div>
              <div className="formulario__grupo formulario__grupo-btn-enviar">
                <input
                  type="submit"
                  className="form-submit-btn"
                  value="Submit"
                />
                <p
                  className="form__mensaje__success"
                  id="form__mensaje__success"
                >
                  Se envio informacion!
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
