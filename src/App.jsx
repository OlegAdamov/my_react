import PaintingList from 'components/PaintingList';
import Section from 'components/Section';
import paintings from './components/paintings.json';

export default function App() {
  return (
    <div>
      <Section title="Top Week">
        <PaintingList items={paintings} />
      </Section>
      <Section />
    </div>
  );
}
