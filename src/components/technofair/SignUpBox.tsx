'use client';

import React, { FormEvent } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from '@nextui-org/react';
import { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

export default function SignUpBox() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        nama: formData.get('nama'),
        npm: formData.get('npm'),
        kelas: formData.get('kelas'),
        email: formData.get('email'),
        password: formData.get('password'),
      }),
    });
    console.log({ response });
  };

  return (
    <>
      <Button onPress={onOpen} className="bg-[#DDDFE4] text-md text-[#241525] ml-3">
        Sign Up
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="">
        <ModalContent className="">
          {(onClose) => (
            <>
              <form onSubmit={handleSubmit}>
                <div className="text-black font-[Poppins]">
                  <div className="">
                    <ModalHeader className="text-center">
                      <div className="pt-10">
                        <h1 className="text-3xl font-semibold">Create an account</h1>
                        <p className=" text-base font-normal text-[#797979]">Mempermudah kebutuhan pendaftaran event anda!</p>
                      </div>
                    </ModalHeader>
                    <ModalBody className="text-[#797979] text-sm">
                      <div className="px-3">
                        <p className="text-sm font-medium">Nama</p>
                        <div className="">
                          <input type="text" id="nama" name="nama" placeholder="ex: Mio Mirza" className="w-full h-11 rounded-[16px]" />
                        </div>
                      </div>
                      <div className="px-3 flex gap-2">
                        <div className="">
                          <p className="text-sm font-medium">NPM</p>
                          <div className="">
                            <input type="text" id="npm" name="npm" placeholder="ex: 10125722" className="w-full h-11 rounded-[16px]" />
                          </div>
                        </div>
                        <div className="">
                          <p className="text-sm font-medium">Kelas</p>
                          <div className="">
                            <input type="text" id="kelas" name="kelas" placeholder="ex: 2KA45" className="w-full h-11 rounded-[16px]" />
                          </div>
                        </div>
                      </div>
                      <div className="px-3">
                        <p className="text-sm font-medium">Email</p>
                        <div className="">
                          <input type="email" id="email" name="email" placeholder="kenapabandung@gmail.com" className="w-full h-11 rounded-[16px]" />
                        </div>
                      </div>
                      <div className="px-3">
                        <p className="text-sm font-medium">Password</p>
                        <div className="relative">
                          <div className="">
                            <input type={open === false ? 'password' : 'text'} id="password" name="password" placeholder="password" className="w-full h-11 rounded-[16px]" />
                          </div>
                          <div className="text-2xl absolute top-3 right-0 mr-3">{open === false ? <AiFillEye onClick={toggle} /> : <AiFillEyeInvisible onClick={toggle} />}</div>
                        </div>
                      </div>
                    </ModalBody>
                    <ModalFooter className="flex justify-center items-center mb-4">
                      <div className="flex flex-col px-3 w-full gap-2 rounded-[16px]">
                        <Button type="submit" className="bg-[#241525] text-[#f7f9fa] hover:bg-[#401e42]">
                          Create Account
                        </Button>
                        <Button className="text-[#262626] bg-[#f0ecf0]">Login</Button>
                      </div>
                    </ModalFooter>
                  </div>
                </div>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
