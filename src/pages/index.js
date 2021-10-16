import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { Avatar, Card, Col, Layout as ALayout, Row } from 'antd';
import Image from 'next/image';
import axios from 'axios';
import Hero from '../components/Hero/Hero';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import NextLink from '../components/NextLink/NextLink';
import { homePageEvents, homePagePartners } from '../constants/Home';

export default function Home({ instagramFeedData }) {
  const router = useRouter();
  const { t } = useTranslation('common');
  const { Meta } = Card;

  return (
    <ALayout>
      <Hero
        contentId="heroContentHome"
        titleId="heroTitleHome"
        buttonTextId="heroActionButtonTextHome"
        image="https://via.placeholder.com/1430x500"
      />
      <section className="events">
        <SectionTitle titleId="eventsSectionTitleHome" type="h2" />
        <Row gutter={[16, 24]} justify="center">
          {homePageEvents.map(event => (
            <Col sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} key={event.titleKey}>
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
        <Row gutter={[16, 24]} justify="center" align="middle">
          {homePagePartners.map(partner => (
            <Col sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} key={partner.id}>
              <Image src={partner.imageLink} width={464} height={150} />
            </Col>
          ))}
        </Row>
      </section>
      {instagramFeedData?.data?.length > 0 && (
        <section className="instagram">
          <SectionTitle titleId="instagramSectionTitleHome" type="h2" />
          <Row gutter={[16, 24]} justify="center">
            {instagramFeedData.data.slice(0, 8).map(post => (
              <Col sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 6 }} key={post.id}>
                <NextLink href={post.permalink}>
                  <Card
                    bordered
                    cover={
                      // eslint-disable-next-line react/jsx-wrap-multilines
                      <img
                        src={post.media_url}
                        alt={post.caption.slice(0, 20)}
                        style={{ aspectRatio: '1/1' }}
                        loading="lazy"
                      />
                    }
                  >
                    <Meta
                      avatar={
                        // eslint-disable-next-line max-len
                        <Avatar src="/images/logo.jpg" />
                      }
                      title={`@${post.username}`}
                    />
                    <div style={{ maxHeight: '250px', minHeight: '250px', textOverflow: 'ellipsis', overflow: 'auto' }}>
                      {`${post.caption.slice(0, 400)}...`}
                    </div>
                  </Card>
                </NextLink>
              </Col>
            ))}
          </Row>
        </section>
      )}
    </ALayout>
  );
}

export const getServerSideProps = async ({ locale }) => {
  const instagramFeed = await axios.get(
    // eslint-disable-next-line max-len
    `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,permalink,thumbnail_url,timestamp,username&access_token=${process.env.INSTAGRAM_TOKEN}`,
  );

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'menu', 'hero', 'pages'])),
      instagramFeedData: instagramFeed.data || null,
    },
  };
};
