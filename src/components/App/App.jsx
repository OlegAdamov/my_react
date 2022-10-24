import PaintingList from '../PaintingList/PaintingList';
import paintings from '../PaintingList/paintings.json';
import { EventBoard } from '../EventBoard/EventBoard';
import { PageTitle } from '../PageTitle/PageTitle';
import Section from '../Section';
import upcomingEvents from '../upcoming-events.json';
import Counter from '../Counter/Counter';
import { Container } from './App.styled';

export default function App() {
  return (
    <>
      <Section title="My React">
        <PaintingList items={paintings} />
        <PageTitle text="24th Core Worlds Coalition Conference" />
        <EventBoard events={upcomingEvents} />
        <Counter initialValue={0} />
      </Section>
    </>
  );
}
