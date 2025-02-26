import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const PrivacyPolicy = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack align="start" spacing={6}>
        <Heading as="h1" size="xl">Privacy Policy</Heading>
        <Text>
          Welcome to MusicVideoEditor.com, a venture of Cinekruz. We value your privacy and are committed to protecting your personal information.
        </Text>
        
        <Heading as="h2" size="lg">1. Information We Collect</Heading>
        <Text>
          We collect personal information such as name, email address, contact details, and any media files you upload for editing purposes.
        </Text>
        
        <Heading as="h2" size="lg">2. How We Use Your Information</Heading>
        <Text>
          We use the information to provide video editing services, communicate with you, and improve our offerings. We do not sell or share your data with third parties except as necessary to deliver our services.
        </Text>
        
        <Heading as="h2" size="lg">3. Data Security</Heading>
        <Text>
          We implement appropriate security measures to safeguard your data. However, no method of transmission over the internet is 100% secure.
        </Text>
        
        <Heading as="h2" size="lg">4. Cookies and Tracking</Heading>
        <Text>
          We may use cookies to enhance user experience. You can control cookie settings through your browser.
        </Text>
        
        <Heading as="h2" size="lg">5. Contact Us</Heading>
        <Text>
          If you have any questions, please contact us at support@musicvideoeditor.com.
        </Text>
      </VStack>
    </Container>
  );
};

export default PrivacyPolicy;
