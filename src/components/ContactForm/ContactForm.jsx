import "./ContactForm.css";

const ContactForm = () => {
  return (
    <section className="contact-page-section">
      <div className="contact-info-text-container">
        <p className="contact-info-text">
          ¡HOLA! PARA TRABAJOS,
          <br />
          ENCARGOS O CUALQUIER
          <br />
          COSA NO DUDES EN ESCRIBIRME.
        </p>
        <span className="contact-info-subtext">Contacto veambe@gmail.com</span>

        <span className="contact-info-subtext">Instagram @veambe</span>
      </div>
      <img
        className="contact-image"
        src="/images/contacto.avif"
        width={400}
        height={800}
      />
      <div className="contact-form-container">
        <h1 className="contact-page-title">Ponte en contacto conmigo</h1>
        <h4 className="contact-page-subtitle">
          Escríbeme y te contestaré lo antes posible
        </h4>
        <form className="contact-form">
          <label className="label-container" htmlFor="email">
            {" "}
            Email{" "}
          </label>
          <input className="form-input" id="email" type="email" />

          <label className="label-container" htmlFor="name">
            {" "}
            Nombre{" "}
          </label>
          <input className="form-input" id="name" type="text" />
          <label className="label-container" htmlFor="message">
            {" "}
            Mensaje{" "}
          </label>
          <textarea className="form-textarea" id="message" type="text" />
          <div className="button-container">
            <button className="contact-form-button" type="send">Enviar</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
