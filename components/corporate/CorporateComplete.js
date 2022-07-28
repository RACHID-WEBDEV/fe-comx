import Logo from '@/components/Logo';
import RegSuccessImage from '@/public/assets/images/success.svg';
import Image from 'next/image';

export default function RegisterComplete() {
  return (
    <>
      <div className="flex items-center justify-center my-8">
        <Image src={RegSuccessImage} alt="resgistered successfully" />
      </div>

      <div className="text-center font-medium ">
        <p className="text-xl md:text-3xl text-black-200">Registration Complete</p>
        <p className="text-sm mt-2 text-black-100">
          Dear [fName]. Your registration is now complete. You may proceed to your dashboard and start trading
          commodities.
        </p>
      </div>
    </>
  );
}
