import Logo from '@/components/Logo';
import { Input } from '@/components/form';
import HookForm from '@/components/form/Form';
import { ResetPasswordSchema } from '../schema/authSchema';
import Link from 'next/link';

export default function PasswordReset() {
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <>
      <div className="overflow-y-scroll  max-w-full h-screen bg-primary-100 w-full py-5 px-4">
        <div className="flex flex-col items-center justify-center">
          <Logo />
          <div className=" mb-5 lg:mb-12">
            <div className="bg-white shadow rounded lg:w-[500px] md:w-full w-full px-4 py-2 md:p-8 mt-8 md:mt-12 ">
              <div className="text-center font-medium ">
                <p className="text-xl md:text-3xl text-black-200">Password Reset</p>
                <p className="text-sm mt-2 text-black-100">Reset your password to continue trading on ComX</p>

                <div className="mt-6 text-left">
                  <HookForm onSubmit={onSubmit} schema={ResetPasswordSchema}>
                    <div className="my-2">
                      <Input
                        label="Enter the Email Address you registered with"
                        placeholder="Your Email"
                        name="email"
                        type="email"
                      />
                    </div>
                    <p className="text-xs text-primary-300/80 text-center">
                      Note that you’ll be sent an OTP to the email address provided
                    </p>
                    <div className="mt-40 mb-5 lg:mb-0 flex items-center justify-between text-sm font-semibold uppercase">
                      <Link href="/sign-in">
                        <a>
                          <p className="text-black-100 "> Back</p>
                        </a>
                      </Link>

                      <button className="text-red-300 uppercase font-bold "> Proceed</button>
                    </div>
                  </HookForm>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
