import React, { useState } from 'react'


const Home = () => {

  const [login, useLogin] = useState('-right-2/4');
  const [register, useRegister] = useState('-right-2/4');

  const toggleLogin = () => {
    if (login == '-right-2/4') {
      useLogin('right-0');
    } else {
      useLogin('-right-2/4');
    }
  }

  const toogleRegister = () => {
    if (register == '-right-2/4') {
      useRegister('right-0');
    } else {
      useRegister('-right-2/4');
    }
  }

  return (
    <div className='relative overflow-hidden'>
      <header className='w-full h-[15vh] border-b-2 border-gray-200'>
        <div className='w-11/12 h-full m-auto flex items-center justify-between'>
          <a href="">
            <img className='w-3/4 ml-5' src="http://localhost:3000/src/assets/img/Logo.png" alt="" />
          </a>

          <div className='w-1/5 h-full flex flex-col items-center justify-evenly'>
            <button onClick={toggleLogin} className='bg-blue-500 hover:bg-blue-800 rounded-3xl text-white px-5 py-2'>Iniciar Sesion</button>
            <button onClick={toogleRegister}>Registrarse</button>
          </div>
        </div>
      </header>


      <section className={`absolute top-0 ${login} bottom-0 w-2/5 h-full bg-white shadow-2xl`}>
        <button onClick={toggleLogin} className='absolute top-2 right-2 fas fa-times text-3xl'></button>

        <div className='w-full h-[17vh] flex items-center justify-start'>
          <img className='w-2/4  ml-10' src="http://localhost:3000/src/assets/img/Logo.png" alt="" />
        </div>

        <div className='w-full h-auto ml-10'>
          <p className='block font-bold my-1 text-sm'>¡Te damos la bienvenida!</p>
          <p className='block font-bold my-1 text-sm'>Potenciamos tus recursos humanos</p>
        </div>

        <div className='w-full h-auto ml-10 my-5'>
          <label className='mb-1' htmlFor="">Usuario:</label>
          <input className='block w-3/5 text-xl p-2 rounded-3xl bg-gray-200' type="text" name="" id="" />
        </div>

        <div className='w-full h-auto ml-10 my-5'>
          <label className='mb-1' htmlFor="">Contraseña:</label>
          <input className='block w-3/5 text-xl p-2 rounded-3xl bg-gray-200' type="password" name="" id="" />
        </div>

        <div className='w-full h-auto ml-10 my-5'>
          <input className='block w-3/5 text-xl p-2 bg-blue-500 hover:bg-blue-800 text-white rounded-3xl' type="submit" value="Iniciar Sesión" name="" id="" />
          <a href="" className='block text-center w-3/5 my-3 underline text-gray-500'>¿Olvidó la contraseña?</a>
        </div>
      </section>

      <section className={`absolute top-0 ${register} bottom-0 w-2/5 h-full bg-white shadow-2xl overflow-scroll`}>
        <button onClick={toogleRegister} className='absolute top-2 right-2 fas fa-times text-3xl'></button>

        <div className='w-full h-[15vh] flex items-center justify-start'>
          <img className='w-2/4  ml-10' src="http://localhost:3000/src/assets/img/Logo.png" alt="" />
        </div>

        <div className='w-full h-auto ml-10'>
          <p className='block font-bold text-sm'>¡Te damos la bienvenida!</p>
          <p className='block font-bold text-sm'>Potenciamos tus recursos humanos</p>
        </div>
        <div>

          <div className='w-full h-auto ml-10 my-2'>
            <label className='mb-0.5' htmlFor="">Nombre:</label>
            <input className='block w-3/5 text-xs p-2 rounded-3xl bg-gray-200' type="text" name="" id="" />
          </div>

          <div className='w-full h-auto ml-10 my-2'>
            <label className='mb-0.5' htmlFor="">Apellido:</label>
            <input className='block w-3/5 text-xs p-2 rounded-3xl bg-gray-200' type="text" name="" id="" />
          </div>

          <div className='w-full h-auto ml-10 my-2'>
            <label className='mb-0.5' htmlFor="">Numero telefónico:</label>
            <input className='block w-3/5 text-xs p-2 rounded-3xl bg-gray-200' type="number" name="" id="" />
          </div>

          <div className='w-full h-auto ml-10 my-2'>
            <label className='mb-0.5' htmlFor="">Correo electrónico:</label>
            <input className='block w-3/5 text-xs p-2 rounded-3xl bg-gray-200' type="email" name="" id="" />
          </div>

          <div className='w-full h-auto ml-10 my-2'>
            <label className='mb-0.5' htmlFor="">Contraseña:</label>
            <input className='block w-3/5 text-xs p-2 rounded-3xl bg-gray-200' type="password" name="" id="" />
          </div>

          <div className='w-full h-auto ml-10 my-2'>
            <label className='mb-0.5' htmlFor="">Confirme contraseña:</label>
            <input className='block w-3/5 text-xs p-2 rounded-3xl bg-gray-200' type="password" name="" id="" />
          </div>

          <div className='w-full h-auto ml-10 my-2'>
            <input className='block w-3/5 text-xl p-2 bg-blue-500 hover:bg-blue-800 text-white rounded-3xl' type="submit" value="Iniciar Sesión" name="" id="" />
            <a href="" className='block text-center w-3/5 mt-1 underline text-gray-500'>¿Ya tenés una cuenta?</a>
          </div>
        </div>


      </section>


      <section className='w-full h-[85vh]'>
        <img className='w-full h-full' src="http://localhost:3000/src/assets/img/Portada.png" alt="" />
      </section>
    </div>
  )
}

export default Home
