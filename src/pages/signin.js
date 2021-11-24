import { getProviders, signIn, getSession } from 'next-auth/client';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Col, Layout as ALayout, Row, Button } from 'antd';

export default function SignIn({ providers }) {
  return (
    <ALayout style={{ height: '100vh' }}>
      <Row justify="center" align="middle" style={{ height: '100% ' }}>
        <Col>
          {Object.values(providers).map(provider => (
            <div key={provider.name}>
              <Button type="button" onClick={() => signIn(provider.id)}>{`Sign in with ${provider.name}`}</Button>
            </div>
          ))}
        </Col>
      </Row>
    </ALayout>
  );
}

export async function getServerSideProps({ locale, ...ctx }) {
  const providers = await getProviders();
  const session = await getSession(ctx);

  if (session) {
    return {
      redirect: {
        destination: '/profile',
        permanent: false,
      },
    };
  }

  return {
    props: { providers, ...(await serverSideTranslations(locale, ['common', 'menu', 'profile', 'pages'])) },
  };
}
