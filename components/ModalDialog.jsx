import * as React from 'react';
import { View } from 'react-native';
import { Button, Dialog, Portal, PaperProvider, Text } from 'react-native-paper';
import { useState } from "react";

const ModalDialog = (data) => {
  const [visible, setVisible] = useState(false);


if (data.show==true) {
   const showDialog = () => setVisible(true);
}

 

  const hideDialog = () => setVisible(false);




console.log(data);
  return (
  
      <View>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">This is simple dialog</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
   
  );
};

export default ModalDialog;