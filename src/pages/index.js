import React from 'react'
import people from '../data/people.json'
import styled from 'styled-components'
import 'tachyons'
import {
  GlobalStyles,
  Fonts,
  colors,
  Text,
  ZopaIcon,
  Navbar,
  ZopaFooter,
  FlexContainer,
  SizedContainer,
  FlexRow,
  FlexCol,
  Heading,
  HamburgerIcon
} from '@zopauk/react-components'

const PeopleHolder = styled.div`
  background: #f8f8f8;
  padding-top: 25px;
  padding-bottom: 25px;
`

const IndexPage = () => (
  <div>
    <GlobalStyles />
    <Fonts />
    <link
      rel='stylesheet'
      href='https://unpkg.com/tachyons@4/css/tachyons.min.css'
    ></link>
    <Navbar
      left={<ZopaIcon width={100} />}
      right={
        <HamburgerIcon
          active
          size='30px'
          activeColor='blue'
          inactiveColor='gray'
        />
      }
    />
    <SizedContainer
      style={{
        backgroundColor: colors.base.secondary,
        paddingTop: '75px',
        paddingBottom: '75px'
      }}
      size='fullLength'
    >
      <FlexContainer
        style={{
          maxWidth: '840px'
        }}
        size='fullLength'
      >
        <Heading style={{ color: colors.neutral.nearWhite }} as='h1'>
          Capital Markets
        </Heading>
        <Text as='p' size='lead' style={{ color: colors.neutral.nearWhite }}>
          Where the magic happens
        </Text>
      </FlexContainer>
    </SizedContainer>
    <PeopleHolder>
      {people.map(person => (
        <FlexContainer
          style={{
            maxWidth: '840px',
            paddingBottom: '20px',
            paddingTop: '20px'
          }}
        >
          <FlexRow justify='space-between'>
            <FlexCol xs={12} m={3}>
              <img
                style={{ borderRadius: '10px', width: '300px' }}
                src={person.imageUrl}
                alt={person.imageAlt}
              />
            </FlexCol>
            <FlexCol xs={12} m={9}>
              <Heading className='mt0-ns mt4' as='h3'>
                {person.name}
              </Heading>
              <Text mb as='p' size='base' weight='bold'>
                {person.title}
              </Text>
              <Text>{person.description}</Text>
            </FlexCol>
          </FlexRow>
        </FlexContainer>
      ))}
    </PeopleHolder>
    <ZopaFooter />
  </div>
)

export default IndexPage
