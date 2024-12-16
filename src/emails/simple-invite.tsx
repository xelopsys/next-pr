import { Container, Html, Preview } from '@react-email/components';
import { Body } from './components/body';
import { Button } from './components/button';
import { Head } from './components/head';
import { Tailwind } from './components/tailwind';
import { Text } from './components/text';
import { LeftAligned as Header } from './components/header';
import { LeftAligned as Footer } from './components/footer';

export default function SimpleInvite({ url }: { url: string }) {
  return (
    <Html>
      <Tailwind>
        <Head />
        <Preview>Untitled UI</Preview>
        <Body>
          <Container
            align='center'
            className='w-full max-w-160 bg-primary md:p-8'>
            <Header />
            <Container
              align='left'
              className='max-w-full px-6 py-8'>
              <Text className='mb-6 text-tertiary tt-md'>
                Hi,
                <br />
                <br />
                It is your login link for the project{' '}
                <span className='tt-md-semi'>Untitled</span>.
              </Text>
              <Button
                href={url}
                className='mb-6'>
                <Text className='tt-md-semi'>Accept the invite</Text>
              </Button>
              <Text className='text-tertiary tt-md'>
                Thanks,
                <br />
                The team
              </Text>
            </Container>
            <Footer />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
