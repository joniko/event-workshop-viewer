import React from "react";
import WavyBackground from "@/components/WavyBackground";

export default function AboutPage() {
  return (
    <main className="container flex flex-col px-4 py-8 mx-auto max-w-4xl">
      <WavyBackground />
      <h1 className="text-2xl font-bold text-indigo-800 mt-8 mb-4">
        Acerca de Cumbre Generaciones 2024
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-indigo-800 mb-4">
            ¿Qué es Cumbre Generaciones?
          </h2>
          <p className="text-indigo-900 mb-4">
            Cumbre Generaciones 2024 es un evento único que reúne a personas de
            todas las edades para celebrar nuestra fe, compartir experiencias y
            crecer juntos espiritualmente. Este año, nos enfocamos en el tema de
            "Uniendo Generaciones en Fe", buscando tender puentes entre
            diferentes grupos de edad y fomentar un sentido de comunidad más
            fuerte.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-indigo-800 mb-4">
            Nuestra Misión
          </h2>
          <p className="text-indigo-900 mb-4">
            Nuestra misión es crear un espacio donde todas las generaciones
            puedan encontrar inspiración, educación y conexión. Buscamos equipar
            a los participantes con herramientas prácticas para vivir su fe en
            el mundo moderno, al tiempo que honramos las tradiciones y sabiduría
            de generaciones pasadas.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-indigo-800 mb-4">
            Lo que puedes esperar
          </h2>
          <ul className="list-disc list-inside text-indigo-900">
            <li>Sesiones inspiradoras con oradores reconocidos</li>
            <li>Talleres prácticos para todas las edades</li>
            <li>Momentos de adoración y alabanza</li>
            <li>Oportunidades para networking y construcción de comunidad</li>
            <li>Actividades especiales para niños y jóvenes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-indigo-800 mb-4">
            Información del Evento
          </h2>
          <p className="text-indigo-900">
            <strong>Fecha:</strong> 15-17 de Agosto, 2024
            <br />
            <strong>Lugar:</strong> Centro de Convenciones Imaginario, Ciudad
            Ejemplo
            <br />
            <strong>Participantes esperados:</strong> Más de 5,000 personas de
            todas las edades
          </p>
        </section>
      </div>
    </main>
  );
}
