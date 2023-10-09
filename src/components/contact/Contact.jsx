import "./contact.css";

const Contact = () => {
  return (
    <>
      <section id="form">
        <div className="contenedorForm">
          <h2 className="formTitle" id="contact">
            Contact me 📧
          </h2>

          <div class="form-container">
            <form
              class="form"
              action="https://formsubmit.co/df6ca9cef3e73c5b0e6cab31a0e2b7ba"
              method="POST"
            >
              <div class="form-group">
                <label for="nombre">You're name:</label>
                <input type="text" name="name" />
                <label for="correo">You're email:</label>
                <input type="text" name="email" />
              </div>
              <div class="form-group">
                <label for="textarea">How can I help you?</label>
                <textarea name="comments" id="textarea" rows="10" cols="50">
                  {" "}
                </textarea>
              </div>
              <input type="submit" class="form-submit-btn" value="Submit" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
