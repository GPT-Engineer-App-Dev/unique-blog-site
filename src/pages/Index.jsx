import { Container, Text, VStack, Heading, Box, Image, HStack, Link } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Blog</Heading>
        <Image borderRadius="full" boxSize="150px" src="/images/profile.jpg" alt="Profile Image" />
        <Text fontSize="lg" textAlign="center">Hi, I'm [Your Name], a passionate writer and developer. Follow my journey as I share my thoughts on technology, programming, and life.</Text>
        <HStack spacing={4}>
          <Link href="https://twitter.com" isExternal>
            <FaTwitter size="24px" />
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <FaLinkedin size="24px" />
          </Link>
          <Link href="https://github.com" isExternal>
            <FaGithub size="24px" />
          </Link>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;