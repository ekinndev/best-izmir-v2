import { useTranslation } from 'next-i18next';
import styles from './courschedule.module.scss';
import { Row, Col, Divider, Affix, Button, Menu, Dropdown } from 'antd';
import Image from 'next/image';
import saatKulesiImg from '../../assets/best-courses-in-autumn/izmir-saat-kulesi-img.webp';
import { AiOutlineDownload } from 'react-icons/ai';
import { DownOutlined } from '@ant-design/icons';

const SurvivalGuide = () => {
  const { t } = useTranslation('ac');
  const { SubMenu } = Menu;
  const menu = (
    <Menu>
      <Menu.Item>
        <a href="#intorduction">Introduction</a>
      </Menu.Item>
      <Menu.Item>
        <a href="#aboutTurkey">About Turkey</a>
      </Menu.Item>
      <Menu.Item>
        <a href="#aboutIzmir">About Izmir</a>
      </Menu.Item>
      <Menu.Item>
        <a href="#howToReach">How To Reach Izmir</a>
      </Menu.Item>

      <Menu.Item>
        <a href="#dict">Learn Some Vocabulary!</a>
      </Menu.Item>
      <Menu.Item>
        <a href="#necPhone">Emergency and Other Phone Numbers</a>
      </Menu.Item>
      <Menu.Item>
        <a href="#whatToBring">What To Bring</a>
      </Menu.Item>
      <Menu.Item>
        <a href="#covid">Covid Measures</a>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <div className={styles.survGuideButtons}>
        <div>
          <Affix offsetTop={10} onChange={affixed => console.log(affixed)}>
            <Dropdown overlay={menu} placement="bottomCenter" arrow>
              <Button className={styles.button} type="primary" icon={<DownOutlined />}>
                Select Section
              </Button>
            </Dropdown>
          </Affix>
        </div>
        <div>
          <Button className={styles.button} href="/survival-guide.pdf" type="primary" icon={<AiOutlineDownload />}>
            Download the Surival Guide!
          </Button>
        </div>
      </div>
      <div className={styles.container}>
        <h1>SELAM, HI!</h1>

        <div className={styles.introduction} id="intorduction">
          <div className={styles.saatKulesi}>
            <Image src={saatKulesiImg} alt="saatKulesiImg" />
          </div>
          <h2>Introduction</h2>
          <h3>
            A warm welcome to you, the last renewable energy bender, from <strong>BEST Izmir!</strong>
          </h3>
          <div className={styles.introductionText}>
            <Row>
              <Col span={12}>
                <p>
                  In this Survival Guide, you can find all the information you’ll need to know while getting ready for
                  this course.
                </p>
                <p>
                  Study this carefully! You’ll be needing it if you plan on returning home in one piece. We will keep
                  this sweet and short, since we know that no one likes to read these things.
                </p>
              </Col>
              <Col span={12}>
                <p>
                  <strong>Dates: </strong>2nd to 11th September
                </p>
                <p>
                  <strong>Accommodation: </strong>You will be hosted at the dorms of the Ege University in the campus or
                  organiser’s houses or hostel.
                </p>
                <p>
                  <strong>Meals:</strong> You will be hosted at the dorms of the Ege University in the campus or
                  organiser’s houses or hostel.
                </p>
                <p>
                  <strong>Travel and Visa:</strong> You must tell us about your trip details as soon as possible, so we
                  can help you in case of any delays or other types of issues. Additionally, if you require a visa to
                  get to Turkey, let us know as soon as possible, so we can send you an official invitation letter which
                  you can use in your visa application.
                </p>
              </Col>
            </Row>
          </div>
          <Divider />
          <div className={styles.aboutTurkey} id="aboutTurkey">
            <h2>About Turkey</h2>
            <p>
              Turkey is a large peninsula that bridges the continents of Europe and Asia. Surrounded on three sides by
              the Black Sea, the Mediterranean Sea, and the Aegean Sea.
            </p>
            <Row>
              <Col md={24} lg={12}>
                <ul>
                  <li>
                    <strong>Conventional</strong> Long Form: Republic of Turkey
                  </li>
                  <li>
                    <strong>Capital:</strong> Ankara
                  </li>
                  <li>
                    <strong>Independence:</strong> 29 October 1923
                  </li>
                  <li>
                    <strong>Internal Phone Code</strong>: +90
                  </li>
                  <li>
                    <strong>Total Area:</strong> 783.562 km²
                  </li>
                  <li>
                    <strong>Climate:</strong> Temperate; hot, dry summers with mild, wet winters; harsher in interior.
                    The average temperature is 23 °C in summer and -2 °C in winter.
                  </li>
                </ul>
              </Col>
              <Col md={24} lg={12}>
                <ul>
                  <li>
                    <strong>Conventional Short Form:</strong> Turkey
                  </li>
                  <li>
                    <strong>Official Language:</strong> Turkish
                  </li>
                  <li>
                    <strong>Population:</strong> 84,680,273
                  </li>
                  <li>
                    <strong>Time Zone:</strong> GMT +03:00
                  </li>
                  <li>
                    <strong>Comparative Area:</strong> Two times (Germany + Belgium)
                  </li>
                  <li>
                    <strong>Terrain:</strong> Mostly mountains; narrow coastal plain; high central plateau (Anatolia).
                  </li>
                </ul>
              </Col>
            </Row>
            <h3>Electricity</h3>
            <p>
              In Turkey, the power plugs and sockets are of type F. The standard voltage is 220 V and the standard
              frequency is 50 Hz.
            </p>
          </div>
          <Divider />
          <div id="aboutIzmir">
            <h2>Izmir in a Nutshell</h2>
            <p>
              Izmir (a.k.a. Pearl of the Aegean) is the third-biggest city in Turkey, with a population of around 4.53
              million, the second-biggest port after Istanbul, and a good transport hub. Once the ancient city of Smyrna
              it is now a modern, developed, and busy commercial center, set around a huge bay and surrounded by
              mountains. The broad boulevards, glass-fronted buildings and modern shopping centres are dotted with
              traditional red-tiled roofs, the 18th century market, and old mosques and churches, although the city has
              an atmosphere more of Mediterranean Europe than traditional Turkey.
            </p>
            <p>
              Izmir has a good selection of culture and entertainment, from the Archaeological and Ethnographic Museums,
              to the Izmir State Opera and Ballet and Izmir State Symphony Orchestra, to the many bars and clubs. The
              cosmopolitan and lively city gets even busier during the International Izmir Festival (mid-June to
              mid-July) with music and dance, with performances also in nearby Cesme and Ephesus.
            </p>
          </div>
          <Divider />
          <div id="weather">
            <h2>Weather (in September)</h2>
            <p>
              The average minimum temperature (usually the minimum temperature is noted during the night) in Izmir in
              September is 18 °C (64.4 °F). The average maximum daytime temperature lies around 28 °C (82.4 °F).
            </p>
            <p>
              So what to wear in September? Dresses, tops, t-shirts, skirts and shorts made of cotton or linen are good
              options for staying cool on a hot day. With a water temperature of around 22 °C (71.6 °F), this is a great
              month to swim, so bring your swimwear!
            </p>
          </div>
          <Divider />

          <div className={styles.howToReachIzmir} id="howToReach">
            <h2>How To Reach?</h2>
            <div>
              <h3>
                Our meeting point is going to be at the{' '}
                <a href="https://www.google.com/maps/place/Bornova+Metro+%C4%B0stasyonu/@38.4592327,27.2124749,17.77z/data=!4m5!3m4!1s0x14b97d2efd46abd3:0xb4c0b64f79fe77fc!8m2!3d38.458459!4d27.2130672">
                  Bornova Metro.
                </a>
              </h3>
              <p>
                Most public transportation in Izmir works with “IZMIRIMKART” which you load money, one pass is 6.50 TL
                (€0.41) with it. We suggest you get one (25.00 TL, €1.60 cost) and load it with some money upon your
                arrival. However, to buy Izmirimkart, you need to find an open box office, which may not be available if
                your arrival time isn’t between standard working hours (9 a.m-5 p.m). We suggest you time your arrival
                between these times, which will make your travel to our meeting point much easier.
              </p>
              <p>
                If you can’t find an open box office to buy Izmirimkart, you should buy “Bilet 35” from the automates to
                travel with. 3 pass ticket is priced 25.00 TL (€1.60), which should be enough.
              </p>
              <p>
                When you arrive at Bornova Metro, there is going to be someone from us to take you to our accommodation
                place. Call one of the organisers, which you can find the phone numbers at the contact page
              </p>
              <Row>
                <Col md={24} lg={12}>
                  <h3>by Plane</h3>
                  <p>
                    Izmir Adnan Menderes Airport, 16 km south of the city center, has regular flights from many European
                    cities. When you land, connect the airport Wi-Fi and inform us of your arrival via WhatsApp or
                    Facebook. After landing, you have 3 options to arrive to our meeting point (Bornova Metro).
                  </p>
                  <ol>
                    <li>Bus:</li>
                    <p>
                      Airport buses operates between city center and airport in both ways. When you come to in front of
                      the exit of the airport, you will see the bus station on your left side. Wait for the bus, which
                      is numbered as “204”. Buy your ticket from driver. It costs about 17 TL (€1 for using 2 times).
                      Just have fun during your 40 minutes trip till the LAST STOP
                    </p>
                    <li>Metro:</li>
                    <p>
                      When you land, follow the signs to go into IZBAN subway to “Aliağa” way. You get off at
                      HALKAPINAR, where you get off and connect to “Metro Izmir”. You are going the “Evka3” way. Your
                      stop is “Bornova”, where you meet us.
                    </p>
                    <li>Taxi:</li>
                    <p>
                      If you can’t find the bus, or just too lazy to wait for it, you can take one of the yellow Taxi’s
                      right where you get off the airport. Tell the driver you’re going to “Bornova Metro” and it will
                      cost about 300 TL (€19).
                    </p>
                  </ol>
                </Col>
                <Col md={24} lg={12}>
                  <h3>by Bus</h3>
                  <p>
                    When you arrive at the bus terminal of Izmir, you have 3 choices to come to our meeting point.
                    (Bornova Metro).
                  </p>
                  <ol>
                    <li>Bus:</li>
                    <p>
                      You will see the bus stop on the right side of the entrance bus terminal. You must wait till you
                      see bus number “204”. Buy your ticket from the driver. It costs about 17 TL (€1 for using 2
                      times). Confirm the bus is going to “Bornova Metro” by asking the driver. Because in the same bus
                      stop, 1- terminal to “Bornova Metro”, 2- from bus terminal to Airport. So pay attention! Yours is
                      the first one.
                    </p>
                    <li>Taxi:</li>
                    <p>
                      You are not so far away from Taxi’s that are located at the entrance of Bus terminal. They are
                      yellow. When you find a Taxi, you must tell you’re going to “Bornova Metro” to the driver. It
                      costs about 60 TL (€4).
                    </p>
                    <li>Dolmus:</li>
                    <p>
                      It is a kind of mini-bus. When you come to the entrance of the terminal, you will see where Taxi,
                      dolmus station and bus station in front of there. Dolmus in Turkey is green. Go there, and you
                      must find the Dolmus whose name is “Alparslan”. Just sit and give 7,5 TL (€0.50) per person to the
                      driver. Tell “Bornova Metro” then enjoy your 5 minute trip.
                    </p>
                  </ol>
                </Col>
              </Row>
            </div>
          </div>
          <Divider />
          <div id="foodToTry">
            <h2>Some of the Food You Must Try When You Come</h2>
            <Row>
              <Col md={24} lg={12}>
                <ol>
                  <li>Bomba:</li>
                  <p>
                    Which has recently increased in popularity thanks to social media, is another delicious flavour
                    originated from Izmir. Bringing chocolate and dough together in a perfect harmony, this dessert is a
                    favourite among chocolate addicts. Bomb may look like a cookie but is much more than a cookie and,
                    of course, its most delicious version can only be found in Izmir
                  </p>
                  <li>Kumru:</li>
                  <p>
                    Literally translated as “collared dove”, is a sandwich and takes its name from the shape of the
                    bread used to prepare it. It contains sausages, salami, kashar cheese, tomatoes, peppers, tulum
                    cheese, mayonnaise and ketchup. Kumru buns are prepared fresh every day at bakeries and can also be
                    eaten without any ingredients.
                  </p>
                </ol>
              </Col>
              <Col md={24} lg={12}>
                <ol start={3}>
                  <li>Boyoz:</li>
                  <p>
                    As the most famous delicacy of Izmir, boyoz is a kind of pastry generally eaten at breakfast. Boyoz
                    is usually eaten with boiled eggs. If you wish to experience a typical Izmir breakfast during your
                    visit, you can enjoy a breakfast more wonderful than you expected with boyoz, eggs and tea.
                  </p>
                  <li>Lokma:</li>
                  <p>
                    The king of desserts with syrup, also originates from Izmir. This dessert is made of dough,
                    deep-fried and soaked in plenty of syrup. You can find a shop which sells Izmir lokma at every
                    corner of Turkey; however, this dessert should be tried in its hometown.
                  </p>
                </ol>
              </Col>
            </Row>
          </div>
          <Divider />
          {/* <div className={styles.sightseeinginIzmir} id="sighseeing">
            <h2>Sightseeing</h2>
            <Row>
              <Col md={24} lg={12}>
                <h3>Agora</h3>
              </Col>
              <Col md={24} lg={12}>
                <h3>Beaches</h3>
              </Col>
            </Row>
            <Row>
              <Col md={24} lg={12}>
                <h3>Bergama</h3>
              </Col>
              <Col md={24} lg={12}>
                <h3>Clock Tower</h3>
              </Col>
            </Row>
            <Row>
              <Col md={24} lg={12}>
                <h3>Ephesus</h3>
              </Col>
              <Col md={24} lg={12}>
                <h3>Elevator</h3>
              </Col>
            </Row>
            <Row>
              <Col md={24} lg={12}>
                <h3>Marinas</h3>
              </Col>
              <Col md={24} lg={12}>
                <h3>Virgin Mary’s House</h3>
              </Col>
            </Row>
            <h3>
              If you are interested to see more <a href="https://www.izmir.bel.tr/en/museums/522/3195">HERE YOU GO! </a>
            </h3>
          </div>
          <Divider /> */}
          <div id="#egeUni">
            <h2>Ege University</h2>
            <p>
              Ege University (Turkish: Ege Üniversitesi) is a public university in Izmir, Turkey. It was founded in 1955
              with the faculties of Medicine and Agriculture. It is the first university to start courses in Izmir and
              the fourth-oldest university in Turkey. Ege University commonly ranks close to the top among research
              universities in Turkey.
            </p>
          </div>
          <Divider />

          <div className={styles.minimizedDict} id="dict">
            <h2>It’s Time to Learn Some Vocabulary!</h2>
            <p>
              Not all the Turkish people speak English, but most younger generations can speak and understand well. Just
              in case, you can find some useful phrases and words below.
            </p>
            <Row>
              {window.innerWidth > 768 && (
                <>
                  <Col className={`${styles.dictCell} cellToHide`} md={12} lg={6}>
                    <h3>English</h3>
                  </Col>
                  <Col className={`${styles.dictCell} cellToHide`} md={12} lg={6}>
                    <h3>Turkish</h3>
                  </Col>
                </>
              )}

              <Col className={styles.dictCell} md={12} lg={6}>
                <h3>English</h3>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <h3>Turkish</h3>
              </Col>
            </Row>
            <Row>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Hello</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Merhaba</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Goodbye</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Güle güle</p>
              </Col>
            </Row>
            <Row>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Hi</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Selam</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>See you later</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Görüşürüz</p>
              </Col>
            </Row>
            <Row>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Yes/No</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Evet/Hayır</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>My name is…</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Adım…</p>
              </Col>
            </Row>
            <Row>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Thank you</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Teşekkür ederim</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>How are you?</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Nasılsın?</p>
              </Col>
            </Row>
            <Row>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>I’m sorry</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Özür dilerim</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>I am fine, you?</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>İyiyim, sen?</p>
              </Col>
            </Row>
            <Row>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Please</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Lütfen</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Enjoy your meal</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Afiyet olsun</p>
              </Col>
            </Row>
            <Row>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Good morning</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Günaydın</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>What is your name?</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Adın ne?</p>
              </Col>
            </Row>
            <Row>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Good evening</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>İyi akşamlar</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>One beer/vodka</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Bir bira/votka</p>
              </Col>
            </Row>
            <Row>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Good night</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>İyi geceler</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>I am a strawberry, eat me!</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Ben bir çileğim, ye beni!</p>
              </Col>
            </Row>
            <Row>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>How much is this?</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Bu ne kadar?</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>What time is it?</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Saat kaç?</p>
              </Col>
            </Row>
            <Row>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Congratulations!</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Tebrikler!</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Where is the toilet</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Tuvalet nerede?</p>
              </Col>
            </Row>
            <Row>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Are you an angel?</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Sen bir melek misin?</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Water/Tea</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Su/Çay</p>
              </Col>
            </Row>
            <Row>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Can you speak Turkish?</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Türkçe konuşabiliyor musun?</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>I can’t speak Turkish</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Türkçe konuşamıyorum</p>
              </Col>
            </Row>
            <Row>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Cheers!</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Şerefe!</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Excuse me!</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Pardon/Afedersin!</p>
              </Col>
            </Row>
            <Row>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Your eyes are so beautiful!</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Gözlerin çok güzel!</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Help!</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Yardım!</p>
              </Col>
            </Row>
            <Row>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Your place or mine?</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Sana mı gidelim bana mı?</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>I’m drunk</p>
              </Col>
              <Col className={styles.dictCell} md={12} lg={6}>
                <p>Sarhoşum</p>
              </Col>
            </Row>
          </div>
          <Divider />

          <div className={styles.turkishCurrency} id="currency">
            <h2>Turkish Currency and Some Prices</h2>
            <Row>
              <Col md={24} lg={12}>
                <p>
                  <strong> 1€ ~ 16₺ </strong>
                </p>
                <p>
                  If you need, you can change money in banks and in exchange offices. Banks open from Monday to Friday:
                  9 a.m. to 5 p.m., with one hour of break during noon. Saturday and Sunday are closed. Banks exchange
                  money, at lower prices. You can also find Exchange Agencies everywhere and most of them open 7
                  days/week from 8 a.m. to 7 p.m
                </p>
                <p>
                  By the way, the better choice will be to take EURO or US Dollars with you, so everywhere you can
                  change them easily, sometimes at lower prices. You can also exchange money at the airport upon arrival
                  at the PTT or bank window, located just before the exit of the airport, but it is useful to arrive
                  with at least a small amount of Lira in case the Exchange window is closed at the time of arrival.
                  Approximately, everywhere you can use your credit card; the most important credit cards are accepted:
                  VISA, MasterCard and American Express.
                </p>
              </Col>
              <Col md={24} lg={12}>
                <ul>
                  <li>
                    <strong>Water (0.5 liter): </strong>€0.25 - 3₺
                  </li>
                  <li>
                    <strong>Beer: </strong>€2-5 - 30-75₺
                  </li>
                  <li>
                    <strong>Wine (a bottle):</strong> €4-15 - 65- 250₺
                  </li>
                  <li>
                    <strong>McDonalds Big Mac Menu: </strong>€4 - 60₺
                  </li>
                  <li>
                    <strong>Bus Ticket: </strong>€1.5 - 25 ₺
                  </li>
                  <li>
                    <strong>Cigarettes: </strong>€2 - 30₺
                  </li>
                  <li>
                    <strong>Vodka (70cl): </strong>€21 - 300₺
                  </li>
                  <li>
                    <strong>Fruit Juice (1L): </strong>€1 - 12₺
                  </li>
                  <li>
                    <strong>Hygienic Pads (packet with 10): </strong>€3 - 45₺
                  </li>
                  <li>
                    <strong>A pack of Durex (10 condoms): </strong>€5 - 75₺
                  </li>
                  <li>
                    <strong>Lunch: </strong>€3 - 7 - 40-100₺
                  </li>
                </ul>
              </Col>
            </Row>
          </div>

          <Divider />
          <div className={styles.necPhoneNum} id="necPhone">
            <h2>Emergency and Other Phone Numbers</h2>
            <Row>
              <Col span={12}>
                <strong>
                  <ul>
                    <li>Ambulance: 112</li>
                    <li>Police: 112</li>
                    <li>Fire Dept.: 112</li>
                    <li>Military police: 112</li>
                  </ul>
                </strong>
                <p>
                  <strong>Embassies</strong>
                </p>
                <ul>
                  <li>Albania: 0312 441 61 03</li>
                  <li>Austria: 0312 419 04 31</li>
                  <li>Azerbaijan: 0312 441 26 20</li>
                  <li>Belgium: 0312 446 82 47</li>
                  <li>Bosnia Herzegovina: 0312 446 40 90</li>
                  <li>Bulgaria: 0312 467 20 71</li>
                  <li>Belarus: 0312 446 30 42</li>
                  <li>Czech Republic: 0312 446 12 44</li>
                  <li>Croatia: 0312 446 94 60</li>
                  <li>Denmark: 0312 468 77 60</li>
                  <li>Estonia: 0312 446 30 27</li>
                  <li>France: 0312 455 45 45</li>
                  <li>Finland: 0312 426 19 30</li>
                  <li>Germany: 0312 426 54 65</li>
                  <li>Georgia: 0312 442 65 08</li>
                </ul>
              </Col>
              <Col span={12}>
                <ul>
                  <li>Greece: 0312 436 88 60</li>
                  <li>Hungary: 0312 442 22 73</li>
                  <li>Ireland: 0312 446 61 72</li>
                  <li>Italy: 0312 426 54 60</li>
                  <li>Latvia: 0216 302 50 42</li>
                  <li>Lithuania: 0312 447 07 66</li>
                  <li>Macedonia: 0312 446 92 04</li>
                  <li>Moldova: 0312 446 55 27</li>
                  <li>Monaco: 0212 2633989</li>
                  <li>Netherlands: 0312 446 04 70</li>
                  <li>Norway: 0312 405 8010</li>
                  <li>Poland: 0312 46756 19</li>
                  <li>Portugal: 0312 446 18 90</li>
                  <li>Romania: 0312 466 37 06</li>
                  <li>Russian Federation: 0312 439 21 22 / 439 35 18</li>
                  <li>Serbia: 0312 426 02 36 / 426 03 54</li>
                  <li>Slovakia: 0312 467 50 75</li>
                  <li>Slovenia: 0312 405 60 07- 08</li>
                  <li>Spain: 0312 438 03 92</li>
                  <li>Sweden: 0312 468 02 54</li>
                  <li>Switzerland: 0312 467 55 55</li>
                  <li>Ukraine: 0312 441 54 99</li>
                </ul>
              </Col>
            </Row>
          </div>
          <Divider />
          <div className={styles.covidMeasures} id="covid">
            <h2>Covid Measures</h2>
            <ul>
              <li>
                The Turkish Ministry of Health announced on March 2, 2022 that masks are no longer required outdoors and
                indoors if air circulation and social distancing are adequate.
              </li>
              <li>
                The HES code requirement has been lifted in all institutions and entities. PCR tests will not be
                requested from those who have no symptoms. Education in schools will continue uninterrupted when two or
                more positive cases are seen in a class, isolation of the Covid positive student/s will be sufficient.
              </li>
              <li>
                U.S. citizens planning to travel overseas or currently overseas and planning to return to the United
                States should contact their airline for specific information about testing requirements for travellers.
                Airlines may adopt and modify their own specific policies to implement the CDC’s testing rule.
              </li>
            </ul>
            <h2>During the course, masks are required in classrooms!</h2>
          </div>
          <Divider />
          <div id="whatToBring">
            <h2>What To Bring</h2>
            <ul>
              <li>Insurance card, ID, Passport, Student card and Visa (if required)</li>
              <li>Some money (Euros) for extra food, alcohol, shopping and to pay the fee of the event.</li>
              <li>
                Your country flag, traditional clothes, foods, drinks (This is important; bring extra ingredients which
                aren’t available in supermarkets if you need to cook your traditional food, also bring enough of your
                traditional alcohol for other participants and organisers of course!)
              </li>
              <li>
                Have this Survival Guide at hand (preferably download the digital format to your phone, which you can
                use offline) • If you are bringing a photo camera, don’t forget to bring the cable to connect with a
                computer (we want all the photos!)
              </li>
              <li>Comfortable shoes</li>
              <li>Swimsuit and flip-flops</li>
              <li>Personal hygiene stuff (e.g. toothbrush, soap, towel...)</li>
              <li>Personal medicine supplies (if necessary)</li>
              <li>Raincoat/Umbrella ella ella…</li>
              <li>Sun Cream SPF 40+</li>
              <li>Some formal clothes for official opening and closing</li>
              <li>
                Medical masks (we will try to provide some, just in case, bring your own mask which will be enough for
                your stay in Izmir!) • Optional alcohol is extremely expensive in Turkey, if this isn’t the case where
                you live, we would appreciate a few bottles of cheap alcohol for partying (Vodka etc.)!
              </li>
              <li>
                Lastly, some social activities might need you to bring extra things, but this information will be shared
                before you pack
              </li>
            </ul>
            <p>
              <strong>A Little Warning!</strong>
            </p>
            <p>
              Illegal Drugs are strictly forbidden in Turkey. Please bring your prescribed drug if you have problems
              with your digestive or excretion system because you can find Turkish cuisine more oily and spicy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurvivalGuide;
