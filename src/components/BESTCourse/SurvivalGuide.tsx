import { useTranslation } from 'next-i18next';
import styles from './courschedule.module.scss';
import { Row, Col, Divider, Affix, Button, Menu, Dropdown } from 'antd';
import Image from 'next/image';
import saatKulesiImg from '../../assets/best-courses-in-autumn/izmir-saat-kulesi-img.webp';
import turkishFlag from '../../assets/best-courses-in-autumn/turkey-falg.webp';
import boyozImg from '../../assets/best-courses-in-autumn/boyoz.webp';
import asansorImg from '../../assets/best-courses-in-autumn/asansor.jpg';
import ephesusImg from '../../assets/best-courses-in-autumn/ephesus.jpg';
import kemeraltiImg from '../../assets/best-courses-in-autumn/kemeraltı.webp';
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
        <a href="#sighseeing">Sightseeing in Izmir</a>
      </Menu.Item>
      <Menu.Item>
        <a href="#necInfo">Neccesary Information</a>
      </Menu.Item>

      <Menu.Item>
        <a href="#dict">Turkish Language and Minimized Dictionary</a>
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
      <div>
        <Affix offsetTop={10} onChange={affixed => console.log(affixed)}>
          <Dropdown overlay={menu} placement="bottomCenter" arrow>
            <Button type="primary">Select Section</Button>
          </Dropdown>
        </Affix>
      </div>
      <div className={styles.container}>
        <h1>IZMIR SURVIVAL GUIDE</h1>

        <div className={styles.introduction} id="intorduction">
          <div className={styles.saatKulesi}>
            <Image src={saatKulesiImg} alt="saatKulesiImg" />
          </div>
          <h2>Introduction</h2>
          <h3>A warm welcome from BEST Izmir the Pearl of the Aegean!</h3>
          <div className={styles.introductionText}>
            <Row>
              <Col span={12}>
                <p>
                  In this Survival Guide you can find all the information you’ll need to know while getting ready for
                  this BEST Course in Autumn. You can start with a brief overview of the city and Turkey in general.
                  Then, don’t forget to check the list of things to bring to the course and see the instructions on how
                  to get to the Meeting Point. You can also find here some other useful info for your stay in Izmir and
                  get a brief introduction to our culture, gastronomy and history.
                </p>
              </Col>
              <Col span={12}>
                <p>
                  <strong>Dates: </strong>2nd to 11th September
                </p>
                <p>
                  <strong>Accommodation: </strong>2nd to 11th SeptemberYou will be hosted at the dorms of the Ege
                  University in the campus or organiser houses.
                </p>
                <p>
                  <strong>Meals:</strong> The meals will be cooked and served by your helpful organisers. If you have
                  dietary restriction, don’t worry. We will take that into account.{' '}
                </p>
                <p>
                  <strong>Travel and Visa:</strong> You must tell us about your trip details as soon as possible, so we
                  can help you in case of any delays or other types of issues. Additionally, if you require a visa to
                  get to Turkey, let us know as soon as possible so we can send you an official invitation.
                </p>
              </Col>
            </Row>
          </div>
          <Divider />
          <div className={styles.aboutTurkey} id="aboutTurkey">
            <h2>About Turkey</h2>
            <div className={styles.turkishFlag}>
              <div>
                <Image src={turkishFlag} alt="turkish-flag" />
              </div>
            </div>

            <div className={styles.aboutTurkeyText}>
              <Row>
                <Col span={12}>
                  <ul>
                    <li>
                      <p>
                        <strong>Conventional Long Form:</strong> Republic of Turkey
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Conventional Short Form:</strong> Turkey
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Capital:</strong> Ankara
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Official Language:</strong> Turkish
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Independece:</strong> 29 October 1923
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Population:</strong> 84,680,273 (2021 est.)
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Internal Phone Code:</strong>+90
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Currency:</strong> TL
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Time Zone:</strong> GMT +03:00
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Location:</strong> Southwestern Asia (that part west of the Bosporus is sometimes
                        included with Europe), bordering the Black Sea, between Bulgaria and Georgia, and bordering the
                        Aegean Sea and the Mediterranean Sea, between Greece and Syria
                      </p>
                    </li>
                  </ul>
                </Col>
                <Col span={12}>
                  <ul>
                    <li>
                      <p>
                        <strong>Map Refrences:</strong> Middle East
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Total Area:</strong> 783.562 sq.km
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Land Area:</strong> 770.760 sq. km
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Comparative Area:</strong> Slightly larger than Texas
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Coastline:</strong> 7.200 km
                      </p>
                    </li>
                    <li>
                      <strong>Land Boundaries:</strong>
                      <div className={styles.boundaries}>
                        <ul>
                          <li>
                            <strong>Total:</strong> 2,627 km
                          </li>
                          <li>
                            <strong>Armenia:</strong> 268 km
                          </li>
                          <li>
                            <strong> Azerbajian:</strong> 9 km
                          </li>
                          <li>
                            <strong>Bulgaria:</strong> 240 km
                          </li>
                          <li>
                            <strong>Goergia: </strong>252 km
                          </li>
                          <li>
                            <strong>Greece:</strong> 206 km
                          </li>
                          <li>
                            <strong>Iran:</strong> 499 km
                          </li>
                          <li>
                            <strong>Iraq:</strong> 331 km
                          </li>
                          <li>
                            <strong>Syria:</strong> 822 km
                          </li>
                        </ul>
                      </div>
                      <p>
                        <strong>Climate: </strong>
                        Temperate; hot, dry summers with mild, wet winters; harsher in interior
                      </p>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <Divider />
        <div id="aboutIzmir">
          <h2>About Izmir</h2>
          <Row>
            <Col span={12}>
              <div className={styles.aboutIzmir}></div>
            </Col>
            <Col span={12}>
              <div>
                <p>
                  <strong> Area: </strong>11.973 sq km
                </p>
                <p>
                  <strong>Population:</strong> 4.367.000 (2021 est.)
                </p>
                <p>
                  <strong>Traffic Code:</strong> 35
                </p>
              </div>
              <p>
                Izmir is the third biggest city in Turkey, with a population of around 4.53 million, the second biggest
                port after Istanbul, and a good transport hub. Once the ancient city of Smyrna, it is now a modern,
                developed, and busy commercial center, set around a huge bay and surrounded by mountains and was. The
                broad boulevards, glass- fronted buildings and modern shopping centers are dotted with traditional red-
                tiled roofs, the 18th century market, and old mosques and churches, although the city has an atmosphere
                more of Mediterranean Europe than traditional Turkey. The climate is comfortable, with a relatively mild
                summer due to the refreshing breeze from the Aegean. The long attractive palm-fringed promenade, 1st.
                Kordon, which stretches the entire length of the city up to the Alsancak Ferry Terminal, is a popular
                spot for evening walks, and there are many cafes along the waterfront. Izmir has a good selection of
                culture and entertainment, from the Archaeological and Ethnographic Museums, to the Izmir State Opera
                and Ballet and Izmir State Symphony Orchestra, to the many bars and clubs. The cosmopolitan and lively
                city gets even busier during the International Izmir Festival (mid- June to mid-July) with music and
                dance, with performances also in nearby Cesme and Ephesus.
              </p>
            </Col>
          </Row>
        </div>
        <Divider />
        <div className={styles.howToReachIzmir} id="howToReach">
          <h2>HOW TO REACH IZMIR?</h2>
          <h3>
            Our meeting point is going to be at <a href="https://goo.gl/maps/G7x7ttXRzQddijCE9">Bornova Metro</a> .
          </h3>
          <div>
            <Row>
              <Col span={12}>
                <ul>
                  <li>
                    <strong>By Bus:</strong> When you arrive at the Bus terminal of Izmir, you have 3 choices to come to
                    us.
                  </li>
                  <li>
                    <strong>TAXI: </strong>You are not so far away from taxis that are located at the entrance of Bus
                    terminal. They are yellow. When you find a taxi, you must tell ‘Bornova Metro’ to the driver. It
                    costs about 60 TL. When you arrive at Bornova Metro, there is going to be someone of us to take you
                    to our accommodation place. Or call for organizer who you have the telephone number. Board of
                    European Students of Technology Local BEST Group Izmir
                  </li>
                  <li>
                    <strong>Dolmus:</strong> It is a kind of minibus. When you come to the entrance of the terminal, you
                    will see where taxi, dolmus station and bus station in front of there. Dolmus in Turkey is green
                    color. Go there and you must find ‘the dolmus whose name is ‘Alparslan’. Just sit and give 7,50 TL
                    per person to the driver. Tell ‘Bornova Metro’ then enjoy your 5 minutes trip. When you arrive at
                    Bornova Metro, there is going to be someone of us to take you.
                  </li>
                </ul>
              </Col>
              <Col span={12}>
                <ul>
                  <li>
                    <strong>Public Transport: </strong>You will see the bus stop on the right side of entrance bus
                    terminal. You must wait till seeing ‘204 number of Bus’. Buy your ticket from driver it costs about
                    15 TL (for using 3 times), 6.50 (for using 2 times). Tell the driver certainly ‘Bornova Metro’.
                    Because in the same bus stop, 1- terminal to Bornova Metro 2- from Bus terminal to Airport. So pay
                    attention! Yours is the first one. Have fun during your short trip till Bornova Metro. We will be
                    there to take you.
                  </li>
                  <strong>
                    We highly recommend to buy your own <a href="https://www.izmirimkart.com.tr/">“İzmirimkart”</a> for
                    cheaper!
                  </strong>
                  <li>
                    <strong>By Plane: </strong>Adnan Menderes Airport, 16km south of the city center, it has several
                    daily flights to Istanbul, Ankara and Antalya. There are also regular flights from many European
                    cities. Airport buses go to and from the city center. When you come to in front of the exit of the
                    airport, you will see the bus station on the left side. Wait for bus which is numbered as “204”. Buy
                    your tickets from the driver that costs about 25,00 TL (for using 3 times, it is a standard one).
                    Just have fun during your one hour trip till arrival of the last stop. Get off the bus and there is
                    going to be someone of us to take you to our accommodation place.
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </div>
        <Divider />
        <div className={styles.sightseeinginIzmir} id="sighseeing">
          <h2>Sightseeing in Izmir</h2>
          <div>
            <Row>
              <Col span={12}>
                <div className={styles.aboutIzmir}>
                  <Image src={kemeraltiImg} alt="kemeralti-img" />
                </div>
              </Col>
              <Col span={12}>
                <h3>Kemeraltı Bazaar</h3>
                <p>
                  The big bazaar in the city center stretches from the coast road to the Konak area, and is a major
                  shopping center with a vast array of goods insi- de. It combines modern businesses, shops and cafes,
                  with antiques, dried fruit, household and leather goods in old alleyways with vaults and domes. Inside
                  the bazaar, there is one of the most in- teresting structures of Izmir: Kizlaragasi Hani is an Ottoman
                  caravanserai inside the Halim Aga Bazaar and was completed in 1745. This cove- red market sells
                  hand-made products, carpets, leather and souvenirs. There are many entran- ces to the markets, from
                  Basmane, Konak and Anafartalar. Konak is one of the oldest areas of the city, with most of the
                  buildings that sur- vived the great fire, although the traditional areas are gradually being
                  modernized. This is the location of the city’s landmark, the Saat Kulesi (Ottoman clock tower)
                  decorated with tiles.
                </p>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <h3>Asansör (Elevator)</h3>
                <p>
                  The elevator was constructed by Jewish busi- nessman Nesim Levi in 1907, in order to make life easier
                  for the local residents to go to their mansions on the top of the hill. These days tou- rists use it
                  to admire the views of the old streets and houses of Mithatpasa. Located in the heart of Izmir’s old
                  Jewish quarter, it is housed in a 50m-high brick tower and after refurbishment in 1992 it now contains
                  a café on the top floor, and the original hydraulics are exhibited on the ground floor. In its heyday
                  in the 1930s, it also contained a theatre, cinema, refreshment stall and photographer’s shop.
                </p>
              </Col>
              <Col span={12}>
                <div className={styles.aboutIzmir}>
                  <Image src={asansorImg} alt="asansor-img" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <div className={styles.aboutIzmir}>
                  <Image src={ephesusImg} alt="ephesus-img" />
                </div>
              </Col>
              <Col span={12}>
                <h3>Ephesus</h3>
                <p>
                  Although ancient writes claim that the name of Ephesus derives from an Amazon Queen’s name, the
                  archaeological finds reveals that The Carians and Lelegians, the native peoples of Anatolia, had
                  settled here long before the Ionians’ arrival. Ephesus was first established in6000 B.C and grew up
                  around the Temple of Artemis. The Ephesians started to move to the new city built by Lysimachus in the
                  3rd century B.C. The following is the list of the various ruins of Ephesus as they Appear from the
                  upper gate, which leads to the House of Virgin Mary, to the lower gate.
                </p>
              </Col>
            </Row>
          </div>
        </div>
        <div id="necInfo">
          <Divider />
          <h2>NECCESARY INFORMATION</h2>
          <Row>
            <Col span={12}>
              <p>
                <strong>Visa:</strong>
              </p>
              <p>
                <strong>Nations that do not require visa:</strong>
              </p>
              <p>
                <strong>Type of Passport: </strong> Ordinary Passport
              </p>
              <p>Period of Visa Exemption: 3 Months</p>
              <p>
                Denmark, Finland, France, Germany, Greece, Iceland, Israel, Liechtenstein, Luxembourg, Monaco, St.
                Marino, Sweden, Switzerland, Turkish Republic of Northern Cyprus, Vatican Period of Visa Exemption: 2
                Months; Bosnia- Herzegovina, Croatia, Macedonia, Romania
              </p>
              <p>
                <strong>Type of Passport: </strong>Official Passports
              </p>
              <p>
                <strong>Period of Visa Exemption : 3 Months</strong>
              </p>
              <p>
                Albania, Austria, Azerbaijan, Belgium, Belarus, Czech Republic, Denmark, Finland, France, Georgia,
                Germany, Greece, Holland, Iceland, Israel, Italy, Liechtenstein, Lithuania, Luxembourg, Malta, Monaco,
                Norway, Poland, Portugal (only diplomatic passports), Russia (only diplomatic passports), Slovakia,
                Slovenia, Spain, Sweden, Switzerland, Turkish Republic of Northern Cyprus, Ukraine, Vatican
              </p>
            </Col>
            <Col span={12}>
              <p>
                <strong>Period of Visa Exemption: 2 Months</strong>{' '}
              </p>
              <p>Bosnia Herzegovina, Croatia, Macedonia, Romania</p>
              <p>Period of Visa Exemption: 1 Month</p>
              <p>
                Bulgaria (only diplomatic passports), Estonia (only diplomatic passports), Hungary, Latvia (only
                diplomatic passports), Moldova Ordinary passport holders of nationals of the following countries may
                obtain sticker type visas at the Turkish international border gates to enter into Turkey
              </p>
              <p>
                <strong>Type of Passport:</strong> Ordinary Passport
              </p>
              <p>
                <strong>Duration of Stay: 3 Months</strong>
              </p>
              <p>Austria, Belgium, Holland, Ireland, Italy, Malta, Portugal, Spain, United Kingdom</p>
              <p>
                <strong>Duration of Stay: 2 Months </strong>
              </p>
              <p>Albania, Belarus, Russia, Ukraine</p>
              <p>
                <strong>Duration of Stay: 1 Month</strong>
              </p>
              <p>
                Azerbaijan, Armenia, Estonia, Greek Cypriot Administration, Hungary, Latvia, Lithuania, Moldova, Norway,
                Poland, Serbia and Montenegro, Slovakia
              </p>
              <p>
                <strong>Duration of Stay: 15 Days</strong>
              </p>
              <p>Georgia</p>
            </Col>
          </Row>
        </div>
        <Divider />
        <div className={styles.minimizedDict} id="dict">
          <h2>Turkish Language and Minimized Dictionary</h2>
          <p>
            Turkish is the largest Turkic language in terms of speakers, with some 50 million native speakers. There is
            a high degree of mutual intelligibility between Turkish and other Oghuz languages, including Azeri, Turkmen
            and Qashqai. If these are counted to gather as “Turkish”, the number of native speakers is close to 90
            million. One characteristic feature of Turkish is vowel harmony, “sour cherry” is closed unround front and e
            is open unround front. Stress is usually on the last syllable, with the exception of some suffix
            combinations, and words like masa [‘masa].
          </p>
          <p>
            <strong>
              For more detailed information, <a href="www.turkish-center.com">click here</a> and{' '}
              <a href="www.onlineturkish.com">here</a>{' '}
            </strong>
          </p>
        </div>
        <div className={styles.turkishCurrency} id="currency">
          <h2>Turkish Currency and Some Prices</h2>
          <Row>
            <Col span={12}>
              <p>
                <strong> 1€ ~ 16₺ </strong>
              </p>
              <p>
                If you need, you can change money in banks and in exchange offices. Banks open from Monday to Friday: 9
                a.m. to 5 p.m., with one hour of break during noon. Saturday and Sunday closed. Banks exchange money, at
                lower prices. You can also find Exchange Agencies in everywhere and most of them open 7 days/week from 8
                a.m. to 7 p.m. By the way, the better choice will be to take EURO or US Dollars with you so everywhere
                you can change them easily, sometimes at lower prices. You can also exchange money at the airport upon
                arrival at the PTT or bank window, located just before the exit of the airport, but it is useful to
                arrive with at least a small amount of Lira in case the Exchange window is closed at the time of
                arrival. Approximately, everywhere you can use your credit card; the most important credit cards are
                accepted: VISA, MasterCard and American Express. Here are some estimated prices in Euros to give you
                some ideas about expenses in Turkey: TL
              </p>
            </Col>
            <Col span={12}>
              <ul>
                <li>
                  <strong>Water (0.5 liter): </strong>2.5₺
                </li>
                <li>
                  <strong>Beer: </strong>30₺
                </li>
                <li>
                  <strong>Wine (a bottle):</strong> 100₺
                </li>
                <li>
                  <strong>McDonalds Big Mac Menu: </strong>62₺
                </li>
                <li>
                  <strong>Bus and Metro Ticket: </strong>25₺
                </li>
                <li>
                  <strong>Postcard: </strong>30₺
                </li>
                <li>
                  <strong>Can of Coke: </strong>6₺
                </li>
                <li>
                  <strong>Lunch: </strong>20-30₺
                </li>
                <li>
                  <strong>Jeans: </strong>150-500₺
                </li>
                <li>
                  <strong>T-Shirt: </strong>60-200₺
                </li>
                <li>
                  <strong>A coffee: </strong>20₺
                </li>
                <li>
                  <strong>Cigarettes: </strong>28₺
                </li>
                <li>
                  <strong>Chocolate (a bar): </strong>6-10₺
                </li>
                <li>
                  <strong>Hygienic Pads (packet with 10): </strong>30₺
                </li>
                <li>
                  <strong>Condom: </strong>60-100₺
                </li>
                <li>
                  <strong>Souvenir: </strong>100-200₺
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
        <div id="whatToBring">
          <h2>What To Bring</h2>
          <ul>
            <li>National Identify Card</li>
            <li>Your passport</li>
            <li>International travel insurance</li>
            <li>International student identity card</li>
            <li>Some currency (EURO or US Dollars to exchange into TL)</li>
            <li>Your traditional clothes, foods, drinks</li>
            <li>A print out of this Survival Guide</li>
            <li>Photo Camera and the cable to connect with a computer (we want all the photos!)</li>
            <li>Comfortable shoes –especially for girls.</li>
            <li>Some Money (Euros) for extra food, alcohol, shopping and to pay the fee of the event.</li>
            <li>Presents for your lovely Turkish friends!</li>
            <li>Sleeping bag</li>
            <li>Swimsuit</li>
            <li>Sun Cream 40+</li>
          </ul>
          <p>
            <strong>A Little Warning!</strong>
          </p>
          <p>
            Illegal Drugs are strictly forbidden in Turkey. Please bring your prescribed drug if you have problems with
            your digestive or excretion system because you can find Turkish cuisine more oily and spicy.
          </p>
        </div>
        <div className={styles.covidMeasures} id="covid">
          <h2>Covid Measures</h2>
          <ul>
            <li>
              Turkish Ministry of Health announced on March 2,2022 that masks are no longer required outdoors and
              indoors if air circulation and social distancing are adequate.
            </li>
            <li>
              HES code requirement has been lifted in all institutions and entities. PCR tests will not be requested
              from those who have no symptoms. Education in schools will continue uninterrupted when two or more
              positive cases are seen in a class, isolation of the Covid positive student/s will be sufficient.
            </li>
            <li>
              U.S. citizens planning to travel overseas or currently overseas and planning to return to the United
              States should contact their airline for specific information about testing requirements for travelers.
              Airlines may adopt and modify their own specific policies to implement the CDC’s testing rule.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SurvivalGuide;
