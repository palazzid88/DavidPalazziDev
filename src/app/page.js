export default function Home() {
    return (
      <main>
        <section className="about-me">
          <img
            src="images/profile.jfif" // Asegúrate de que la ruta coincida con la ubicación de tu imagen
            alt="Profile Image"
            className="profile-image"
          />
          <div className="description">
            <h1>Sobre mí</h1>
            <p>
              ¡Hola! Soy un desarrollador web apasionado por la tecnología y el
              aprendizaje continuo. Me encanta trabajar en proyectos creativos y
              resolver problemas complejos a través de la programación.
            </p>
          </div>
        </section>
      </main>
    );
  }
  