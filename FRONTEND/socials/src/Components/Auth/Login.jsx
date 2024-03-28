import React from "react"
import { useState } from "react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl, FormLabel, Input
} from '@chakra-ui/react'
// import { useNavigate } from "react-router-dom";



function LoginForm() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [user, setUser] = useState({});
    // const navigate = useNavigate();
    console.log(typeof onOpen);
    // onOpen();

    const handleChange = (e) => {
        let { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }


    const handleSubmit = () => {
        // console.log(user)
        let payload = JSON.stringify(user)
        fetch("http://localhost:8080/login", {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'POST',
            body: payload
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.token) {
                    localStorage.setItem("user", JSON.stringify(res))
                    localStorage.setItem("token", JSON.stringify(res.token))
                    localStorage.setItem("userid", JSON.stringify(res._id))


                    // navigate("/home")
                } else {
                    console.log(res.message);
                }
            })
            // .then((res) => navigate("/home"))
            .then((e) => console.log(e))
    }

    // useEffect(()=>{
    //     if()
    //     onOpen()
    // },[])


    return (
        <>

            <Button onClick={onOpen}>Login</Button>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent bgGradient="linear(to-bl, #110236, #fff)" >
                    <ModalHeader ml={100}  >Login to your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl mt={4}>
                            <FormLabel>*email</FormLabel>
                            <Input variant="outline" placeholder='Enter your email' type="email" name="email"
                                onChange={handleChange} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>*password</FormLabel>
                            <Input sx={{ backgroundColor: "none" }} placeholder='enter password' type="password" name="password"
                                onChange={handleChange} />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={onClose}>Cancel</Button> &nbsp;&nbsp;&nbsp;
                        <Button colorScheme='green' mr={3} type="submit" onClick={handleSubmit}>
                            Login
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}


export default LoginForm;
