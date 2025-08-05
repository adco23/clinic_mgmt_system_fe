import { Outlet } from 'react-router';
import background from '../assets/auth-bg.jpg';
const AuthLayout = () => {
  return (
    <div className='w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]'>
      <section className='min-h-screen flex items-center justify-center bg-base-100 p-4 min-w-fit md:mx-4'>
        {<Outlet />}
      </section>
      <section className='hidden bg-muted lg:block'>
        <img src={background} className='h-full w-full object-cover' />
      </section>
    </div>
  );
};

export default AuthLayout;
