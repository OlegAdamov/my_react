import React from 'react';
// import PaintingList from '../PaintingList/PaintingList';
// import paintings from '../PaintingList/paintings.json';
import { EventBoard } from '../EventBoard/EventBoard';
// import { PageTitle } from '../PageTitle/PageTitle';
import Section from '../Section';
import { HiArchive, HiArrowCircleUp, HiBriefcase } from 'react-icons/hi';
import upcomingEvents from '../upcoming-events.json';
// import Counter from '../Counter/Counter';
import { Container } from './App.styled';
import { Button } from './Button';
// import Dropdown from 'components/Dropdown/Dropdown';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

export default function App() {
  return (
    <>
      <h1>Состояние компонента</h1>
      <Section title="My React">
        {/* <PaintingList items={paintings} /> */}
        {/* <Counter initialValue={0} /> */}
      </Section>
      <Container>
        {/* <PageTitle text="24th Core Worlds Coalition Conference" /> */}
        <EventBoard events={upcomingEvents} />
      </Container>
      {/* <Dropdown /> */}
      {/* <ColorPicker options={colorPickerOptions} /> */}
      <Button icon={HiArchive}>Search</Button>
      <Button icon={HiArrowCircleUp}>Filter</Button>
      <Button icon={HiBriefcase}>Show Modal</Button>
      <Button type="submit">LogIn</Button>
      <Button type="submit" disabled>
        LogOff
      </Button>
    </>
  );
}
