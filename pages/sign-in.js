import Logo from '@/components/Logo';
import { Button, Checkbox, Input } from '@/components/form';
import HookForm from '@/components/form/Form';
import { SignInSchema } from '../schema/authSchema';
import Link from 'next/link';

export default function SignIn() {
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <>
      <div className="overflow-y-scroll  max-w-full h-screen bg-primary-100 w-full py-5 px-4">
        <div className="flex flex-col items-center justify-center">
          <Logo />
          <div className=" mb-5 lg:mb-12">
            <div className="bg-white shadow rounded lg:w-[500px]  md:w-full w-full px-4 py-2 md:p-8 mt-8 md:mt-12 ">
              <div className="text-center font-normal ">
                <p className="text-xl md:text-3xl  text-black-200">Sign in to ComX</p>
                <p className="text-sm mt-2 text-black-100">Enter your login credentials below.</p>

                <div className="mt-6 text-left">
                  <HookForm onSubmit={onSubmit} schema={SignInSchema}>
                    <div className="my-2">
                      <Input label="Your Email" placeholder="Enter your Email Address" name="email" type="email" />
                    </div>
                    <div className="my-2">
                      <Input label="Your Password" placeholder="Enter your password" name="password" type="password" />
                    </div>
                    <div className="my-6 flex items-center justify-between">
                      <Checkbox name="staySignIn" value={true} label="Stay Signed in" />
                      <Link href="/sign-in">
                        <a>
                          <p className="text-red-300 text-sm"> Forgot Password?</p>
                        </a>
                      </Link>
                    </div>

                    <Button>Sign in</Button>
                  </HookForm>

                  <div className="mt-6">
                    <Link href="/">
                      <a>
                        <Button color="teritary">Back</Button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
