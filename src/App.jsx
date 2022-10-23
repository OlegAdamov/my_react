import PaintingList from 'components/PaintingList/PaintingList';
import paintings from './components/PaintingList/paintings.json';
import { EventBoard } from 'components/EventBoard/EventBoard';
import { PageTitle } from 'components/PageTitle/PageTitle';
import Section from 'components/Section';
import upcomingEvents from './components/upcoming-events.json';

export default function App() {
  return (
    <>
      <Section title="My React">
        <PaintingList items={paintings} />
        <PageTitle text="24th Core Worlds Coalition Conference" />
        <EventBoard events={upcomingEvents} />
      </Section>
    </>
  );
}
