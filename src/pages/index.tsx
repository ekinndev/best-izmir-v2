import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Avatar, Card, Col, Layout as ALayout, Row } from 'antd';
import Image from 'next/image';
import axios from 'axios';
import Hero from '../components/Hero/Hero';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import NextLink from '../components/NextLink/NextLink';
import { homePageEvents, homePagePartners } from '../constants/Home';
import HomePageHeroImage from '../assets/pages/homepage.webp';
import { GetServerSideProps } from 'next';

interface InstaPosts {
  data: Datum[];
  paging: Paging;
}

interface Datum {
  id: string;
  caption: string;
  media_url: string;
  media_type: MediaType;
  permalink: string;
  timestamp: string;
  username: Username;
}

enum MediaType {
  CarouselAlbum = 'CAROUSEL_ALBUM',
  Image = 'IMAGE',
}

enum Username {
  BestIzmir = 'best.izmir',
}

interface Paging {
  cursors: Cursors;
  next: string;
}

interface Cursors {
  before: string;
  after: string;
}

interface HomeProps {
  instagramFeedData: InstaPosts;
}

export default function Home({ instagramFeedData }: HomeProps) {
  const { t } = useTranslation('common');
  const { Meta } = Card;

  return (
    <ALayout>
      <Hero
        contentId="heroContentHome"
        titleId="heroTitleHome"
        buttonTextId="heroActionButtonTextHome"
        image={HomePageHeroImage}
        link="/contact"
        showLogo
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
                  cover={<Image src={event.imageLink} width={464} height={150} alt={t(event.titleKey)} />}
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
        <Row justify="center" align="middle" gutter={[16, 24]}>
          {homePagePartners.map(partner => (
            <Col sm={{ span: 6 }} md={{ span: 4 }} lg={{ span: 4 }} key={partner.id}>
              <a href={partner.externalLink} target="_blank" rel="noopener noreferrer">
                <Image src={partner.imageLink} width={partner.width} height={partner.height} />
              </a>
            </Col>
          ))}
        </Row>
      </section>
      {instagramFeedData?.data?.length > 0 && (
        <section className="instagram">
          <SectionTitle titleId="instagramSectionTitleHome" type="h2" />
          <Row gutter={[16, 24]} justify="center">
            {instagramFeedData.data
              .filter(data => data.media_type === 'IMAGE')
              .slice(0, 8)
              .map(post => (
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
                          <Avatar src="/images/logo.webp" />
                        }
                        title={`@${post.username}`}
                      />
                      <div
                        style={{ maxHeight: '250px', minHeight: '250px', textOverflow: 'ellipsis', overflow: 'auto' }}
                      >
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

export const getServerSideProps: GetServerSideProps = async ({ locale = 'en' }) => {
  try {
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
  } catch (e) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common', 'menu', 'hero', 'pages'])),
        instagramFeedData: null,
      },
    };
  }
};
