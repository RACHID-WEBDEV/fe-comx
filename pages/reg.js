import Logo from '@/components/Logo';
import RegSuccessImage from '@/public/assets/images/success.svg';
import Image from 'next/image';

export default function PasswordReset() {
  return (
    <>
      <div className="overflow-y-scroll  max-w-full h-screen bg-primary-100 w-full py-5 px-4">
        <div className="flex flex-col items-center justify-center">
          <Logo />
          <div className=" mb-5 lg:mb-12">
            <div className="bg-white shadow rounded lg:w-[500px] md:w-full w-full px-4 py-2 md:p-8 mt-8 md:mt-12 ">
              <div className="flex items-center justify-center my-8">
                <Image src={RegSuccessImage} alt="resgistered successfully" />
              </div>

              <div className="text-center font-medium ">
                <p className="text-xl md:text-3xl text-black-200">Registration Complete</p>
                <p className="text-sm mt-2 text-black-100">
                  Dear [fName]. Your registration is now complete. You may proceed to your dashboard and start trading
                  commodities.
                </p>
                <button className="text-red-300 uppercase font-semibold mt-7 mb-2 "> Go to dashboard</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
