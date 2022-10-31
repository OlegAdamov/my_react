import React from 'react';
// import PaintingList from '../PaintingList/PaintingList';
// import paintings from '../PaintingList/paintings.json';
// import { EventBoard } from '../EventBoard/EventBoard';
// import { PageTitle } from '../PageTitle/PageTitle';
import Section from '../Section';
import { HiArchive, HiArrowCircleUp, HiBriefcase } from 'react-icons/hi';
// import upcomingEvents from '../upcoming-events.json';
import { Container } from './App.styled';
import { Button } from './Button';
import { Box } from 'components/Box';

export default function App() {
  return (
    <Box bg="primary" color="text" pt={5} width="50%">
      <h1>Состояние компонента</h1>
      <Section title="My React">
        {/* <PaintingList items={paintings} /> */}
        {/* <Counter initialValue={0} /> */}
      </Section>
      <Container>
        {/* <PageTitle text="24th Core Worlds Coalition Conference" /> */}
        {/* <EventBoard events={upcomingEvents} /> */}
      </Container>
      <Button icon={HiArchive}>Search</Button>
      <Button icon={HiArrowCircleUp}>Filter</Button>
      <Button icon={HiBriefcase}>Show Modal</Button>
      <Button type="submit">LogIn</Button>
      <Button type="submit" disabled>
        LogOff
      </Button>
    </Box>
  );
}
