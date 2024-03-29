'use client';

import { Raleway } from 'next/font/google';

import { FlipCard } from '@/components/FlipCard';
import { Header } from '@/components/Header';
import { InitialPageLoading } from '@/components/InitialPageLoading';

import styles from './page.module.scss';

const raleway = Raleway({ weight: ['400', '500'], subsets: ['latin'] });

export default function Home() {
  // const [title, setTitle] = useState('');

  // useEffect(() => {
  //   getTitle().then((res) => {
  //     console.log(res);

  //     setTitle(res);
  //   });
  // }, []);

  return (
    <main className={styles.home + ' ' + raleway.className}>
      <Header />
      <div
        style={{
          height: 'calc(100vh - 90px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FlipCard />
      </div>
      <div style={{ backgroundColor: '#124076', height: '100vh' }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ultricies mi eget mauris pharetra. Et netus et malesuada
          fames ac turpis. Ipsum nunc aliquet bibendum enim facilisis. Ullamcorper morbi tincidunt
          ornare massa eget egestas purus viverra. Elit pellentesque habitant morbi tristique
          senectus et netus et malesuada. Mattis ullamcorper velit sed ullamcorper morbi tincidunt.
          Convallis tellus id interdum velit. Sed vulputate odio ut enim blandit volutpat maecenas
          volutpat blandit. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat.
          Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Convallis a cras
          semper auctor. Arcu dictum varius duis at. Sit amet mattis vulputate enim nulla. Eget nunc
          scelerisque viverra mauris in. Quis commodo odio aenean sed adipiscing diam. Iaculis urna
          id volutpat lacus laoreet. Eleifend quam adipiscing vitae proin sagittis. Lorem mollis
          aliquam ut porttitor leo a diam. Nulla facilisi nullam vehicula ipsum a. At volutpat diam
          ut venenatis. Nisl tincidunt eget nullam non nisi est. Feugiat in ante metus dictum at
          tempor commodo ullamcorper. Tortor dignissim convallis aenean et tortor at risus. Ac
          turpis egestas maecenas pharetra convallis posuere morbi. Quis enim lobortis scelerisque
          fermentum dui. Nulla facilisi cras fermentum odio eu. Egestas diam in arcu cursus. Dis
          parturient montes nascetur ridiculus. Vitae ultricies leo integer malesuada nunc. Vel elit
          scelerisque mauris pellentesque pulvinar pellentesque. Scelerisque varius morbi enim nunc
          faucibus a pellentesque sit. Ridiculus mus mauris vitae ultricies leo integer malesuada.
          Arcu non odio euismod lacinia at quis risus sed vulputate. Tempus egestas sed sed risus
          pretium quam vulputate. Nunc scelerisque viverra mauris in aliquam. Ultricies tristique
          nulla aliquet enim tortor at. Ipsum nunc aliquet bibendum enim facilisis gravida. Neque
          volutpat ac tincidunt vitae semper quis lectus. Vivamus arcu felis bibendum ut tristique
          et. Pulvinar sapien et ligula ullamcorper malesuada proin. Dapibus ultrices in iaculis
          nunc sed augue lacus. Non arcu risus quis varius quam quisque id diam. Ut faucibus
          pulvinar elementum integer enim neque volutpat ac tincidunt. Dictum fusce ut placerat
          orci. Sagittis orci a scelerisque purus. Blandit cursus risus at ultrices mi tempus
          imperdiet. Arcu bibendum at varius vel pharetra vel turpis. Sagittis vitae et leo duis ut
          diam. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Feugiat nisl pretium
          fusce id.
        </p>
      </div>
      <div style={{ backgroundColor: '#f7f6bb', height: '100vh' }} />
      <InitialPageLoading />
    </main>
  );
}
