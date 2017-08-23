import React from 'react';
import {
  A,
  Brand,
  Col,
  Container,
  Fixed,
  H3,
  Img,
  Input,
  InputGroup,
  ItemsRow,
  NavBadge,
  NavBar,
  Navigation,
  NavItem,
  Row,
  Small,
  Star,
  Text,
  UserCard,
  Provider,
} from 'react-pur';

const airbnbTheme = {
  colors: {
    primary: '#008489',
  },
};

const experiences = [
  {
    picture: 'https://a0.muscache.com/im/pictures/87878152-fdce-425c-b807-b7909a23df1f.jpg?aki_policy=poster',
    description: 'Embark on an intimate whale watching experience',
    price: '2,148',
    currency: 'TWD',
    reviews: {
      number: 4,
      stars: 5,
    },
  },
  {
    picture: 'https://a0.muscache.com/im/pictures/f56389eb-b38e-4181-a91a-dd5a08434c62.jpg?aki_policy=poster',
    description: 'Surf with an out-and-proud local',
    price: '2,708',
    currency: 'TWD',
    reviews: {
      number: 44,
      stars: 5,
    },
  },
  {
    picture: 'https://a0.muscache.com/im/pictures/c084b5a2-6f2a-42dc-aa15-8c1a35950f50.jpg?aki_policy=poster',
    description: 'Pasta and Pizza from the scratch at Chef\'s Home',
    price: '3,634',
    currency: 'TWD',
    reviews: {
      number: 58,
      stars: 5,
    },
  },
  {
    picture: 'https://a0.muscache.com/im/pictures/6e3b7960-cde3-442d-9f02-ee05c49ea7a0.jpg?aki_policy=poster',
    description: 'Paddle Sydney\'s iconic harbour',
    price: '4,697',
    currency: 'TWD',
    reviews: {
      number: 45,
      stars: 5,
    },
  },
  {
    picture: 'https://a0.muscache.com/im/pictures/e203bcff-ade5-45ff-9b2d-374a56d31f05.jpg?aki_policy=poster',
    description: '4x4 excursion and paddle surf in a secret lagoon',
    price: '2,386',
    currency: 'TWD',
    reviews: {
      number: 77,
      stars: 5,
    },
  },
];

export default class AirbnbExample extends React.Component {
  render() {
    return (
      <Provider theme={airbnbTheme}>
        <Container>
          <Fixed left top right backgroundColor="#fff">
            <NavBar my={1} px={3}>
              <Brand>
                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{ fill: '#FF5A5F', height: '28px' }}><path d="M499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"></path></svg>
              </Brand>

              <InputGroup shadowed>
                <Input type="text" placeholder="Anywhere" />
                <Input type="text" placeholder="Anytime" />
                <Input type="text" placeholder="1 guest" />
              </InputGroup>

              <Navigation floatRight fontSize={'14px'}>
                <NavItem>Become a Host</NavItem>
                <NavItem>Trips <NavBadge /></NavItem>
                <NavItem>Messages <NavBadge /></NavItem>
                <NavItem>Help</NavItem>
                <NavItem>
                  <UserCard>
                    <img src="https://pbs.twimg.com/profile_images/898793214051721216/enfu_wrD_bigger.jpg" />
                  </UserCard>
                </NavItem>
              </Navigation>
            </NavBar>

            <Navigation underlined fluid fontSize={'12px'} px={3}>
              <NavItem underlined active style={{borderBottomWidth: '2px'}}>FOR YOU</NavItem>
              <NavItem>HOMES</NavItem>
              <NavItem>EXPERIENCES</NavItem>
              <NavItem>PLACES</NavItem>
            </Navigation>
          </Fixed>

          <Container mx={3} my={153}>
            <H3 simple mb={2}>
              Experiences

              <Small floatRight fontWeight={500}>
                <A muted>See all</A>
              </Small>
            </H3>

            <ItemsRow>
              {experiences.map((experience, key) => (
                <Col key={key}>
                  <A href="https://www.airbnb.com" target="_blank" noHover>
                    <Img
                      src={experience.picture}
                      width={'100%'}
                      height={'350px'}
                      mb={1}
                    />

                    <Row simple fontSize={'14px'} style={{display: 'inline'}}>
                      <strong>${experience.price} {experience.currency}</strong> <Text style={{fontWeight: 300}}>{experience.description}</Text>
                    </Row>

                    <Small>
                      <Row mt={1}>
                        {[1, 2, 3, 4, 5].map((index, key) => {
                          if (experience.reviews.stars >= index) {
                            return <Star checked />;
                          }

                          return <Star />;
                        })}

                        <Text ml={1}>{experience.reviews.number} reviews</Text>
                      </Row>
                    </Small>
                  </A>
                </Col>
              ))}
            </ItemsRow>
          </Container>
        </Container>
      </Provider>
    );
  }
}
