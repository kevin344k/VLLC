import * as React from 'react';
import { Drawer } from 'react-native-paper';

const MenuLateral = () => {
  const [active, setActive] = React.useState('');

  return (
    <Drawer.Section title="Some title">
      <Drawer.Item
        label="Economia Local"
        active={active === 'first'}
        onPress={() => setActive('first')}
      />
      <Drawer.Item
        label="Economia Exterior"
        active={active === 'second'}
        onPress={() => setActive('second')}
      />
      <Drawer.Item
        label="Descargas"
        active={active === 'third'}
        onPress={() => setActive('third')}
      />
    </Drawer.Section>
  );
};

export default MenuLateral;