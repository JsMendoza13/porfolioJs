import React, { useEffect, useState } from "react";
import "./contact.css";
import { RiEmotionUnhappyFill } from "react-icons/ri";

const Contact = () => {
  const [showUnhappyIcon, setShowUnhappyIcon] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);

  const expresion = {
    nombre: /^[a-zA-ZA-ÿ\s]{1,40}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };

  useEffect(() => {
    const formulario = document.getElementById("form__id");
    const inputs = document.querySelectorAll("#form__id input");

    const validarFormulario = (e) => {
      if (e.target && e.target.classList) {
        switch (e.target.name) {
          case "nombre":
            if (expresion.nombre.test(e.target.value)) {
              document
                .getElementById("group__nombre")
                .classList.remove("form-group-incorrecto");
              document
                .querySelector("#group__nombre .form__input-error")
                .classList.remove("form__input-error-activo");
              setCanSubmit(true);
              setShowUnhappyIcon(false);
            } else {
              document
                .getElementById("group__nombre")
                .classList.add("form-group-incorrecto");
              document
                .querySelector("#group__nombre .form__input-error")
                .classList.add("form__input-error-activo");
              setCanSubmit(false);
              setShowUnhappyIcon(true);
            }
            break;
          case "email":
            if (expresion.correo.test(e.target.value)) {
              document
                .getElementById("group__email")
                .classList.remove("form-group-incorrecto");
              document
                .querySelector("#group__email .form__input-error")
                .classList.remove("form__input-error-activo");
              setCanSubmit(true);
              setShowUnhappyIcon(false);
            } else {
              document
                .getElementById("group__email")
                .classList.add("form-group-incorrecto");
              document
                .querySelector("#group__email .form__input-error")
                .classList.add("form__input-error-activo");
              setCanSubmit(false);
              setShowUnhappyIcon(true);
            }
            break;
        }
      }
    };

    if (formulario) {
      inputs.forEach((input) => {
        input.addEventListener("keyup", validarFormulario);
        input.addEventListener("blur", validarFormulario);
      });

      formulario.addEventListener("Submit", handleFormSubmit);
    }
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (canSubmit) {
      setShowModal(true);
    }
  };

  return (
    <>
      <section id="form">
        <div className="contenedorForm">
          <h2 className="formTitle" id="contact">
            Contact me 📧
          </h2>

          <div className="form-container">
            <form
              action=""
              //https://formsubmit.co/df6ca9cef3e73c5b0e6cab31a0e2b7ba
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
                  Your name is incorrect, please correct it.
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
                <p className="form__input-error">
                  It seems that your email is not well written, please check it.
                </p>
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
                  disabled={!canSubmit}
                />
                <p
                  className="form__mensaje__success"
                  id="form__mensaje__success"
                >
                  Se envió información!
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
