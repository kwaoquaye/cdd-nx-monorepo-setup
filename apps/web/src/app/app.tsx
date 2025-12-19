// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import { AppShell, Text ,Stack} from '@pertunes/ui';
import { PertunesPlayer } from '@pertunes/player';

export function App() {
  return (
    <AppShell>
      <Text type="headingLarge">Welcome to PertunesPlayer!</Text>

<Stack position={'fixed'} bottom={16} width={'100%'} px={3}>

      <PertunesPlayer />
      <marquee behavior="scroll" direction="left" scrollamount={5}>
            <Text type='textXSmall' color='info'>This application is intended to showcase NX monorepo and bottom-up component design and development. Feel free to contribute or use it as a starting point for your own projects.</Text>      

            </marquee>
        
</Stack>
    </AppShell>
  );
}

export default App;
