import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from '@nextui-org/react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function SignInBox() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const { push } = useRouter();

  const handleLogin = async (e: any) => {
    e.preventdefault();
    try {
      const res = await signIn('credentials', {
        redirect: false,
        email: e.currentTarget.email.value,
        password: e.currentTarget.password.value,
        callbackUrl: '/dashboard',
      });
      if (!res?.error) {
        push('/dashboard');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Button onPress={onOpen} className="rounded-[21px] h-11 bg-[#241525] w-28 mx-3 flex justify-center items-center hover:bg-[#401e42] text-white text-md">
        Login
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="">
        <ModalContent className="">
          {(onClose) => (
            <div>
              <div className="text-black font-[Poppins]">
                <div className="">
                  <ModalHeader className="text-center">
                    <div className="pt-10">
                      <h1 className="text-3xl font-semibold">Login</h1>
                      <p className=" text-base font-normal text-[#797979]">Mempermudah kebutuhan pendaftaran event Anda!</p>
                    </div>
                  </ModalHeader>
                  <ModalBody className="text-[#797979] text-sm">
                    <div className="px-3">
                      <p className="text-sm font-medium">Email</p>
                      <div className="">
                        <input type="email" id="email" aria-label="email" placeholder="kenapabandung@gmail.com" className="w-full h-11 rounded-[16px]" />
                      </div>
                    </div>
                    <div className="px-3">
                      <p className="text-sm font-medium">Password</p>
                      <div className="relative">
                        <div className="">
                          <input type={open === false ? 'password' : 'text'} id="password" aria-label="password" placeholder="password" className="w-full h-11 rounded-[16px]" />
                        </div>
                        <div className="text-2xl absolute top-3 right-0 mr-3">{open === false ? <AiFillEye onClick={toggle} /> : <AiFillEyeInvisible onClick={toggle} />}</div>
                      </div>
                    </div>
                  </ModalBody>
                  <ModalFooter className="flex justify-center items-center mb-4">
                    <div className="flex flex-col px-3 w-full gap-2 rounded-[16px]">
                      <Button className="bg-[#241525] text-[#f7f9fa] hover:bg-[#401e42]" onSubmit={(e: any) => handleLogin(e)}>Login</Button>
                      <Button className="text-[#262626] bg-[#f0ecf0]">Create an Account</Button>
                    </div>
                  </ModalFooter>
                </div>
              </div>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}