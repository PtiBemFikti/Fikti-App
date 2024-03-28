import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from '@nextui-org/react';

export default function SignInBox() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className="rounded-[21px] h-11 bg-[#241525] w-28 mx-3 flex justify-center items-center hover:bg-[#401e42] text-white text-md">
        Login
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="">
        <ModalContent className="">
          {(onClose) => (
            <>
              <div className="text-black font-[Poppins]">
                <div className="">
                  <ModalHeader className="text-center">
                    <div className="pt-16">
                      <h1 className="text-3xl font-semibold">Login</h1>
                      <p className=" text-base font-normal text-[#797979]">Mempermudah kebutuhan pendaftaran event Anda!</p>
                    </div>
                  </ModalHeader>
                  <ModalBody>
                    <div className="px-3">
                      <p className="text-sm font-medium">Email</p>
                      <div className="">
                        <input type="text" id="email" value={'kenapabandung@gmail.com'} className="w-full h-11 rounded-[16px] text-[#797979] text-sm" />
                      </div>
                    </div>
                    <div className="px-3">
                      <p className="text-sm font-medium">Password</p>
                      <div className="">
                        <input type="password" id="password" value={''} className="w-full h-11 rounded-[16px]" />
                      </div>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button>
                      <div className="">Login</div>
                    </Button>
                    <Button color="primary">Action</Button>
                  </ModalFooter>
                </div>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
