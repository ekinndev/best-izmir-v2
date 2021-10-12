import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { Card, Col, Layout as ALayout, Row } from 'antd';
import Image from 'next/image';
import Hero from '../components/Hero/Hero';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import NextLink from '../components/NextLink/NextLink';
import { homePageEvents, homePagePartners } from '../constants/Home';

export default function Home() {
  const router = useRouter();
  const { t } = useTranslation('common');

  return (
    <ALayout>
      <Hero contentId="heroContentHome" titleId="heroTitleHome" buttonTextId="heroActionButtonTextHome" />
      <section className="events">
        <SectionTitle titleId="eventsSectionTitleHome" type="h2" />
        <Row gutter={[16, 24]}>
          {homePageEvents.map(event => (
            <Col sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} key={event.titleKey}>
              <NextLink href={event.link}>
                <Card
                  title={t(event.titleKey)}
                  bordered
                  cover={<Image src={event.imageLink} width={464} height={150} />}
                >
                  {t(event.titleKey)}
                </Card>
              </NextLink>
            </Col>
          ))}
        </Row>
      </section>
      <section className="partners">
        <SectionTitle titleId="partnersSectionTitleHome" type="h2" />
        <Row gutter={[16, 24]}>
          {homePagePartners.map(partner => (
            <Col sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
              <Image src={partner.imageLink} width={464} height={150} />
            </Col>
          ))}
        </Row>
      </section>
    </ALayout>
  );
}

export const getServerSideProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale, ['common', 'menu', 'hero'])) },
});
