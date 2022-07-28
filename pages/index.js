import Logo from '@/components/Logo';
import { Button, Alert } from '@/components/form';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="overflow-y-scroll  max-w-full h-screen bg-primary-100 w-full py-5 px-4">
        <div className="flex flex-col items-center justify-center">
          <Logo />
          <div className=" mb-5 lg:mb-12">
            <div className="bg-white shadow rounded lg:w-[500px]  md:w-full w-full px-4 py-2 md:p-8 mt-8 md:mt-12 ">
              <div className="text-center font-normal ">
                <p className="text-xl md:text-3xl  text-black-200">Sign in to ComX</p>
                <p className="text-sm mt-2 text-black-100">Welcome to ComX</p>
                <Alert message="Phone number has already been used" />

                <div className="mt-6">
                  <Link href="/sign-in">
                    <a>
                      <Button>Sign in</Button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white shadow rounded lg:w-[500px]  md:w-full w-full px-4 py-2 md:p-8 mt-8 md:mt-12 ">
              <div className="text-center font-normal ">
                <p className="text-xl md:text-3xl  text-black-200">Create an Account</p>
                <p className="text-sm mt-2 text-black-100">Join the Family</p>

                <div className="mt-6">
                  <Link href="/register">
                    <a>
                      <Button color="secondary">Register</Button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
