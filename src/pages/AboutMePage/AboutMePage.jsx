import "./AboutMePage.css"

const AboutMePage = () => {
  return (
    <section className="about-me-page-container">
      <div className="about-me-images-container">
        <img
          className="hero"
          src="/images/heroVeambe.png"
          alt="logo veambe"
        />

        <p className="about-me-text">
          Creativa, dinámica y enérgica desde 1992. Siempre con un papel y algo
          con lo que poder dibujar para expresarme y crear cosas nuevas. Estudié
          Comunicación Audiovisual en la Universidad de Valencia, en esos años
          empezó la idea de Veambe. Creaba diseños de películas pintándolo en
          camisetas y tote bags. Más adelante me mudé a Barcelona a
          especializarme en dirección de arte para cine, al mismo tiempo que
          realizaba proyectos y trabajos de supervivencia. Durante varios años
          continué trabajando en diferentes sectores y desarrollando la idea de
          Veambe. Finalmente fue en 2020 que me planteé estudiar algo específico
          de ilustración para seguir aprendiendo, desarrollando todas mis
          aptitudes creativas y diversas técnicas artesanales. Así que me apunté
          a la Escola Massana.
        </p>
      </div>
      <div className="about-me-images-container">
        <img src="/images/sobreMiVeambe.avif" width={700} />
        <p className="about-me-text">
          Durante dos años he ido variando por diversas temáticas, técnicas,
          inspiraciones y experiencias que me han dado las herramientas
          adecuadas para no parar de crear y hacer de Veambe una forma de vida
          donde pueda mezclar lo mejor de la comunicación y de la ilustración.
          Así que tras este viaje de conocimientos, vivencias y aprendizajes
          tengo una recopilación de trabajos que podéis observar en el
          portfolio, y sobre todo tengo ganas de poder seguir investigando,
          expresándome y creando para nuevos proyectos que están por llegar. Así
          que no dudes en escribirme si tienes alguna propuesta.{" "}
        </p>
      </div>
    </section>
  );
};

export default AboutMePage;
