import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Img,
} from '@react-email/components';

import { EmailTemplate } from '../../utils/template';
import {
  main,
  container,
  box,
  button,
  paragraph,
  hr,
  anchor,
  footer,
} from './props';

export class SignUpConfirmEmailTemplate extends EmailTemplate {
  template = () => (
    <Html>
      <Head />
      <Preview>You're now ready to make live transactions with Stripe!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Img
              src="/logo-text.png"
              height={40}
              style={{
                display: 'inline-block',
                width: '100%',
                objectFit: 'contain',
                marginBottom: 50,
              }}
            />

            <Hr />

            <Text style={paragraph}>
              Thanks for submitting your account information. You're now ready
              to make live transactions with Stripe!
            </Text>
            <Text style={paragraph}>
              You can view your payments and a variety of other information
              about your account right from your dashboard.
            </Text>
            <Button
              style={button}
              pX={10}
              pY={10}
              href="https://dashboard.stripe.com/login"
            >
              View your Stripe Dashboard
            </Button>
            <Hr style={hr} />
            <Text style={paragraph}>
              If you haven't finished your integration, you might find our{' '}
              <Link style={anchor} href="https://stripe.com/docs">
                docs
              </Link>{' '}
              handy.
            </Text>
            <Text style={paragraph}>
              Once you're ready to start accepting payments, you'll just need to
              use your live{' '}
              <Link
                style={anchor}
                href="https://dashboard.stripe.com/login?redirect=%2Fapikeys"
              >
                API keys
              </Link>{' '}
              instead of your test API keys. Your account can simultaneously be
              used for both test and live requests, so you can continue testing
              while accepting live payments. Check out our{' '}
              <Link style={anchor} href="https://stripe.com/docs/dashboard">
                tutorial about account basics
              </Link>
              .
            </Text>
            <Text style={paragraph}>
              Finally, we've put together a{' '}
              <Link
                style={anchor}
                href="https://stripe.com/docs/checklist/website"
              >
                quick checklist
              </Link>{' '}
              to ensure your website conforms to card network standards.
            </Text>

            <Text style={paragraph}>
              We'll be here to help you with any step along the way. You can
              find answers to most questions and get in touch with us on our{' '}
              <Link style={anchor} href="https://support.stripe.com/">
                support site
              </Link>
              .
            </Text>

            <Text style={paragraph}>— The Stripe team</Text>

            <Hr style={hr} />

            <Text style={footer}>
              Stripe, 354 Oyster Point Blvd, South San Francisco, CA 94080
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
