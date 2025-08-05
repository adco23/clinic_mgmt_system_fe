import React from 'react';

const Landing = () => {
  return (
    <div className='min-h-screen bg-base-100 text-base-content'>
      {/* Navbar */}
      <div className='navbar bg-base-100 shadow-md'>
        <div className='container mx-auto flex justify-between items-center p-4'>
          <a href='/' className='btn btn-ghost text-xl normal-case'>
            Clínica Salud Integral
          </a>
          <div className='flex-none'>
            <ul className='menu menu-horizontal px-1'>
              <li>
                <a href='#features'>Servicios</a>
              </li>
              <li>
                <a href='#about'>Nosotros</a>
              </li>
              <li>
                <a href='#contact'>Contacto</a>
              </li>
              <li>
                <a href='/auth' className='btn btn-primary ml-2'>
                  Iniciar Sesión
                </a>
              </li>
              <li>
                <a href='/auth/register' className='btn btn-secondary ml-2'>
                  Registrarse
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div
        className='hero min-h-[70vh] bg-base-200'
        style={{
          backgroundImage:
            'url(/placeholder.svg?height=800&width=1600&query=modern%20health%20clinic%20lobby)',
        }}
      >
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-3xl'>
            <h1 className='mb-5 text-5xl font-bold'>
              Tu Salud, Nuestra Prioridad
            </h1>
            <p className='mb-5 text-lg'>
              Ofrecemos atención médica integral con un equipo de profesionales
              dedicados a tu bienestar. Agenda tu cita hoy mismo.
            </p>
            <a href='/register' className='btn btn-primary btn-lg mr-4'>
              Agenda tu Cita
            </a>
            <a
              href='#features'
              className='btn btn-outline btn-lg text-neutral-content border-neutral-content hover:bg-neutral-content hover:text-base-200'
            >
              Conoce Nuestros Servicios
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id='features' className='py-16 bg-base-100'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-4xl font-bold mb-12'>
            Nuestros Servicios Destacados
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='card bg-base-200 shadow-xl'>
              <figure className='px-10 pt-10'>
                <img
                  src='/placeholder.svg?height=200&width=300'
                  alt='Consulta Médica'
                  className='rounded-xl'
                />
              </figure>
              <div className='card-body items-center text-center'>
                <h3 className='card-title text-2xl'>Consultas Generales</h3>
                <p>
                  Atención médica primaria para toda la familia, diagnósticos y
                  tratamientos.
                </p>
              </div>
            </div>
            <div className='card bg-base-200 shadow-xl'>
              <figure className='px-10 pt-10'>
                <img
                  src='/placeholder.svg?height=200&width=300'
                  alt='Especialidades'
                  className='rounded-xl'
                />
              </figure>
              <div className='card-body items-center text-center'>
                <h3 className='card-title text-2xl'>Especialidades Médicas</h3>
                <p>
                  Acceso a médicos especialistas en diversas áreas para una
                  atención completa.
                </p>
              </div>
            </div>
            <div className='card bg-base-200 shadow-xl'>
              <figure className='px-10 pt-10'>
                <img
                  src='/placeholder.svg?height=200&width=300'
                  alt='Laboratorio'
                  className='rounded-xl'
                />
              </figure>
              <div className='card-body items-center text-center'>
                <h3 className='card-title text-2xl'>Laboratorio Clínico</h3>
                <p>
                  Resultados precisos y rápidos para tus exámenes de
                  laboratorio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id='about' className='py-16 bg-base-300'>
        <div className='container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8'>
          <div className='lg:w-1/2'>
            <img
              src='/placeholder.svg?height=400&width=600'
              alt='Equipo de la Clínica'
              className='rounded-lg shadow-lg w-full'
            />
          </div>
          <div className='lg:w-1/2 text-center lg:text-left'>
            <h2 className='text-4xl font-bold mb-6'>Sobre Nosotros</h2>
            <p className='text-lg mb-4'>
              En Clínica Salud Integral, nos dedicamos a proporcionar atención
              médica de la más alta calidad, centrada en el paciente. Nuestro
              equipo de médicos, enfermeras y personal administrativo está
              comprometido con tu bienestar y comodidad.
            </p>
            <p className='text-lg'>
              Contamos con instalaciones modernas y tecnología de vanguardia
              para asegurar diagnósticos precisos y tratamientos efectivos. Tu
              salud es nuestra misión.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        id='contact'
        className='py-16 bg-primary text-primary-content text-center'
      >
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold mb-6'>
            ¿Listo para cuidar tu salud?
          </h2>
          <p className='text-lg mb-8'>
            No esperes más. Agenda tu cita hoy mismo y da el primer paso hacia
            una vida más saludable.
          </p>
          <a href='/register' className='btn btn-secondary btn-lg'>
            Agenda tu Cita Ahora
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className='footer footer-center p-10 bg-base-200 text-base-content rounded'>
        <nav className='grid grid-flow-col gap-4'>
          <a className='link link-hover' href='#features'>
            Servicios
          </a>
          <a className='link link-hover' href='#about'>
            Nosotros
          </a>
          <a className='link link-hover' href='#contact'>
            Contacto
          </a>
          <a className='link link-hover' href='/login'>
            Iniciar Sesión
          </a>
          <a className='link link-hover' href='/register'>
            Registrarse
          </a>
        </nav>
        <aside>
          <p>
            Copyright © 2023 - Todos los derechos reservados por Clínica Salud
            Integral
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Landing;
