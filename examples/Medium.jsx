import React from 'react';
import {
  A,
  Brand,
  Button,
  Col,
  Container,
  Cover,
  Heading,
  H4,
  Img,
  NavBar,
  Navigation,
  NavItem,
  Row,
  Small,
  UserCard,
  UserInfo,
  Card,
  P,
  SubHeader,
  Provider,
} from 'react-pur';

const mediumTheme = {
  colors: {
    primary: '#02b875',
    secondary: '#333333',
  },
};

export default class MediumExample extends React.Component {
  render() {
    return (
      <Provider theme={mediumTheme}>
        <Container px={2} pb={2}>
          <NavBar fontWeight={300}>
            <Brand>
              <svg width="45" height="45" viewBox="-17 18 45 45" data-multipart="true"><path style={{fill: '#d0d2d3'}} d="M11.525 28.078c-.472-.225-.858.002-.858.506v20.044l8.616 4.113c.948.46 1.717.14 1.717-.7v-19.3a.22.22 0 0 0-.124-.19l-9.35-4.46v-.01z"></path><path style={{fill: '#a6a8ab'}} d="M.333 43.696l9.83-15.247c.278-.43.89-.6 1.36-.38l9.364 4.47c.06.03.082.1.047.15L10.666 48.63.333 43.698v-.002z"></path><path style={{fill: '#808184'}} d="M-8.57 28.35c-.786-.375-1.053-.096-.592.62L.333 43.696l10.333 4.932L.356 32.635a.156.156 0 0 0-.06-.054l-8.866-4.23z"></path><path style={{fill: '#58595b'}} d="M.333 52.033c0 .84-.643 1.22-1.43.844l-8.045-3.84c-.472-.224-.858-.82-.858-1.325V28.89c0-.672.515-.976 1.145-.675l9.133 4.36a.092.092 0 0 1 .055.084v19.37z"></path></svg>
              <svg style={{fill: 'rgba(0,0,0,.75)'}} width="95" height="45" viewBox="8 18 95 45"><path d="M38.926 37.656c-3.187 0-5.652 2.02-5.652 5.575 0 4.07 2.87 5.73 5.73 5.73 1.67 0 3.238-.43 4.58-1.38.13-.1.153-.17.08-.31l-.67-1.22c-.075-.14-.175-.14-.3-.07-1.244.7-2.262 1.02-3.478 1.02-1.472 0-3.21-.7-3.438-3.04 0-.02 0-.07.08-.07h8.072c.247 0 .227-.41.227-.78 0-3.92-2.46-5.43-5.197-5.43h-.034zm2.59 4.43h-5.578c-.1 0-.074-.098-.074-.12.25-1.434 1.37-2.383 3.014-2.383 1.64 0 2.713 1.117 2.713 2.43 0 .05-.02.07-.07.07v.01-.006zm-14.04-7.872l-4.41 8.1c-.028.05-.053.05-.078 0l-4.41-8.1a.376.376 0 0 0-.352-.195h-3.023c-.13 0-.203.07-.203.19V48.6c0 .123.076.196.202.196h2.116c.126 0 .203-.073.203-.196v-9.07c0-1.05-.02-2.025-.05-2.513 0-.05.08-.074.11 0 .25.634.66 1.44 1.06 2.17l3.66 6.588c.08.13.15.178.3.178h.89c.16 0 .23-.05.31-.168l3.66-6.58c.41-.73.81-1.532 1.06-2.164.03-.07.11-.05.11 0-.02.5-.05 1.47-.05 2.52v9.08c0 .13.08.2.21.2h2.11c.13 0 .21-.07.21-.19V34.22c0-.118-.07-.188-.19-.188h-3.05c-.19-.01-.29.063-.37.184zm68.022 5.29c-.697-1.29-2.04-1.846-3.686-1.846-1.494 0-2.862.508-3.932 1.53-.798-1.022-1.967-1.533-3.387-1.533-1.343 0-2.415.336-3.436 1.067l-1.717-.86c-.307-.148-.504 0-.504.267v10.45c0 .11.07.18.197.18h2.085c.12 0 .198-.08.198-.2v-6.72c0-.64.05-.92.365-1.27.55-.59 1.38-.9 2.22-.9 1.4 0 2.26.78 2.26 2.21v6.67c0 .12.07.2.2.2h2.09c.12 0 .2-.08.2-.2v-6.72c0-.63.05-.93.38-1.28.55-.59 1.37-.9 2.22-.9.92 0 1.61.34 1.99 1 .17.34.28.78.28 1.39v6.5c0 .12.07.2.2.2h2.09c.12 0 .2-.08.2-.2v-6.43c0-1.25-.2-2.03-.52-2.66l.04.02zM56.928 33.2h-2.09c-.126 0-.2.072-.2.195v4.794c0 .07-.025.09-.1.07-.94-.39-1.84-.61-2.885-.61-3.16 0-5.53 2.04-5.53 5.55 0 3.95 2.49 5.75 5.33 5.75 1.35 0 2.394-.34 3.463-1.07l1.72.85c.295.15.498 0 .498-.27V33.4c0-.12-.074-.196-.202-.196V33.2l-.004-.007zm-2.29 11.54c0 .61-.024.877-.448 1.268-.796.73-1.644.924-2.415.924-1.413 0-3.132-.83-3.132-3.705 0-2.34 1.343-3.557 3.142-3.557.9 0 1.67.198 2.34.75.476.387.525.732.525 1.552v2.747l-.01.02zm20.99-6.94h-2.09c-.12 0-.193.074-.193.196v6.745c0 .62-.025.88-.422 1.28-.795.73-1.67.93-2.564.93-1.08 0-1.82-.38-2.17-1.09-.15-.31-.23-.73-.23-1.36v-6.49c0-.11-.08-.19-.2-.19h-2.09c-.13 0-.21.08-.21.2v6.58c0 1.03.15 1.71.41 2.27.67 1.44 2.14 2.12 4.11 2.12 1.44 0 2.54-.34 3.63-1.07l1.69.85c.29.14.49 0 .49-.27V38c0-.117-.08-.186-.2-.186h-.01l.02-.014zm-14.243-4.65c-.82 0-1.47.61-1.47 1.364 0 .755.653 1.363 1.474 1.363.82 0 1.47-.608 1.47-1.363s-.64-1.364-1.47-1.364h-.01zm1.047 4.65H60.34c-.125 0-.2.074-.2.196v10.592c0 .122.075.195.2.195h2.085c.125 0 .2-.073.2-.195V37.996c0-.122-.075-.195-.2-.195h.007z"></path></svg>
            </Brand>

            <Navigation floatRight>
              <NavItem fontSize={14}>
                <A>Write a story</A>
              </NavItem>

              <NavItem>
                <svg width="25" height="25" viewBox="0 0 25 25"><path d="M20.067 18.933l-4.157-4.157a6 6 0 1 0-.884.884l4.157 4.157a.624.624 0 1 0 .884-.884zM6.5 11c0-2.62 2.13-4.75 4.75-4.75S16 8.38 16 11s-2.13 4.75-4.75 4.75S6.5 13.62 6.5 11z"></path></svg>
              </NavItem>

              <NavItem>
                <svg width="25" height="25" viewBox="-293 409 25 25"><path d="M-273.327 423.67l-1.673-1.52v-3.646a5.5 5.5 0 0 0-6.04-5.474c-2.86.273-4.96 2.838-4.96 5.71v3.41l-1.68 1.553c-.204.19-.32.456-.32.734V427a1 1 0 0 0 1 1h3.49a3.079 3.079 0 0 0 3.01 2.45 3.08 3.08 0 0 0 3.01-2.45h3.49a1 1 0 0 0 1-1v-2.59c0-.28-.12-.55-.327-.74zm-7.173 5.63c-.842 0-1.55-.546-1.812-1.3h3.624a1.92 1.92 0 0 1-1.812 1.3zm6.35-2.45h-12.7v-2.347l1.63-1.51c.236-.216.37-.522.37-.843v-3.41c0-2.35 1.72-4.356 3.92-4.565a4.353 4.353 0 0 1 4.78 4.33v3.645c0 .324.137.633.376.85l1.624 1.477v2.373z"></path></svg>
              </NavItem>

              <NavItem>
                <UserCard>
                  <Img src="https://pbs.twimg.com/profile_images/898793214051721216/enfu_wrD_bigger.jpg" />
                </UserCard>
              </NavItem>
            </Navigation>
          </NavBar>

          <Navigation fluid underlined mt={65}>
            <NavItem active underlined secondary>
              <H4>You might like</H4>
            </NavItem>

            <NavItem floatRight>
              <Small>MORE</Small>
            </NavItem>
          </Navigation>

          <Row mt={3}>
            <Col size={12} md={4} mb={2}>
              <Card border fluid md={{ marginRight: '16px' }}>
                <Cover
                  backgroundImage="https://cdn-images-1.medium.com/max/800/1*Lnyv79eAYNQRNt0uYh5FjQ.jpeg"
                  height={280}
                />

                <Row p={2} flexColumn>
                  <Small muted>Based on your interests</Small>
                  <Heading fontSize={18}>Education in a Digital Age</Heading>
                  <P muted fontSize={14} fontWeight={300}>How to Prepare the Next Generation for the Uncertain Things to Come</P>
                </Row>

                <Row p={2} mtAuto>
                  <UserCard>
                    <Img src="https://cdn-images-1.medium.com/fit/c/80/80/1*JPoVGs67gvsW-NH8GXdxHg.jpeg" />
                    <UserInfo fontSize={12} style={{lineHeight: '20px'}}>
                      <A href="#" simple>Matt Dunkley</A>
                      <Small muted>Aug 13 · 6 min read</Small>
                    </UserInfo>
                  </UserCard>
                </Row>
              </Card>
            </Col>

            <Col size={12} md={8}>
              <Row>
                <Col size={12} md={6} mb={2}>
                  <Card border fluid md={{ marginRight: '16px' }}>
                    <Cover
                      height={100}
                      backgroundImage="https://cdn-images-1.medium.com/max/800/1*DJI2eFn2rf-QO6fY8P20lg.jpeg"
                    />

                    <Row p={2} flexColumn>
                      <Small muted>Science</Small>
                      <Heading fontSize={18}>Reading the Headlines About Vegetarians and Depression is...</Heading>
                    </Row>

                    <Row px={2} pb={2} mtAuto>
                      <UserCard>
                        <Img src="https://cdn-images-1.medium.com/fit/c/80/80/1*f7WRZuUZO0AaV8pkP5C1Bw.jpeg" />
                        <UserInfo fontSize={12} style={{lineHeight: '20px'}}>
                          <A href="#" simple>Joel Kahn</A>
                          <Small muted>Aug 14 · 4 min read</Small>
                        </UserInfo>
                      </UserCard>
                    </Row>
                  </Card>
                </Col>

                <Col size={12} md={6} mb={2}>
                  <Card border fluid>
                    <Cover
                      height={100}
                      backgroundImage="https://cdn-images-1.medium.com/max/828/1*5VT8bRbd-lzvflYE1Yxh1A.jpeg"
                    />

                    <Row p={2} flexColumn>
                      <Small muted>Story</Small>
                      <Heading fontSize={18}>What’s Happening with Me</Heading>
                    </Row>

                    <Row px={2} pb={2} mtAuto>
                      <UserCard>
                        <Img src="https://cdn-images-1.medium.com/fit/c/72/72/0*fgOg6Zvlk4AA2Vah.jpeg" />
                        <UserInfo fontSize={12} style={{lineHeight: '20px'}}>
                          <A href="#" simple>Biz Stone</A>
                          <Small muted>May 17 · 3 min read</Small>
                        </UserInfo>
                      </UserCard>
                    </Row>
                  </Card>
                </Col>
              </Row>

              <Row>
                <Col size={12} md={6} mb={2}>
                  <Card border fluid md={{ marginRight: '16px' }}>
                    <Cover
                      height={100}
                      backgroundImage="https://cdn-images-1.medium.com/max/845/1*d00YZKIpELEvx5mXEBnpTw.jpeg"
                    />

                    <Row p={2} flexColumn>
                      <Small muted>Humour</Small>
                      <Heading fontSize={18}>The Trouble with Hot Guys.</Heading>
                    </Row>

                    <Row px={2} pb={2} mtAuto>
                      <UserCard>
                        <Img src="https://cdn-images-1.medium.com/fit/c/72/72/1*1mU1GGEHR7VuMDyz2g-Ufw.jpeg" />
                        <UserInfo fontSize={12} style={{lineHeight: '20px'}}>
                          <A href="#" simple>ThunderPuff</A>
                          <Small muted>Jan 19 · 7 min read</Small>
                        </UserInfo>
                      </UserCard>
                    </Row>
                  </Card>
                </Col>

                <Col size={12} md={6} mb={2}>
                  <Card border fluid>
                    <Cover
                      height={100}
                      backgroundImage="https://cdn-images-1.medium.com/max/640/1*z-Z8wNzAKQ-Ho-G4xrE71w.gif"
                    />

                    <Row p={2} flexColumn>
                      <Small muted>UX Design</Small>
                      <Heading fontSize={18}>These Design Inspirations Can Change How We Read The News</Heading>
                    </Row>

                    <Row px={2} pb={2} mtAuto>
                      <UserCard>
                        <Img src="https://cdn-images-1.medium.com/fit/c/72/72/1*ZyuZXJoBDp9wCTXFB94bWQ.png" />
                        <UserInfo fontSize={12} style={{lineHeight: '20px'}}>
                          <A href="#" simple>uxplanet.org</A>
                          <Small muted>Nov 25, 2016 · 5 min read</Small>
                        </UserInfo>
                      </UserCard>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>

          <Navigation fluid underlined mt={20}>
            <NavItem underlined secondary>
              <H4>Digital design</H4>
            </NavItem>

            <NavItem>
              <Small>SUGGESTED</Small>
            </NavItem>

            <NavItem floatRight p={0}>
              <Button pill primary outline small px={2}>Follow</Button>
            </NavItem>
          </Navigation>
        </Container>
      </Provider>
    );
  }
}
