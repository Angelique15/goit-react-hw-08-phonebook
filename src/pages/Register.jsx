import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/auth/authSlice';
import { Box, Heading, Input, Button } from '@chakra-ui/react'; // Import Chakra UI components
import { getIsLoggedIn } from '../redux/auth/authSelectors';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn); // Assuming you have a selector named getIsLoggedIn

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
    // You can add additional logic here, like redirecting after successful registration.
  };

  return (
    <Box
      maxW="600px"
      mx="auto"
      p="20px"
      border="2px solid #ccc"
      borderRadius="4px"
      boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
    >
      <Heading
        as="h1"
        textAlign="center"
        mb="20px"
        color="#8B7355"
        fontFamily="serif"
        letterSpacing="2px"
      >
        Register
      </Heading>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <Input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <Button
          type="submit"
          mt="10px"
          colorScheme="teal"
          width="10em"
          cursor="pointer"
          isLoading={isLoggedIn} // Use the loading state from your reducer
        >
          Register
        </Button>
      </form>
    </Box>
  );
};

export default RegisterForm;




