import AsyncStorage from "@react-native-async-storage/async-storage";
import { view } from "./storybook.requires";

// followed this to fix the infinite loading error
const StorybookUIRoot = view.getStorybookUI({
  host: '192.168.4.38', 
  port: 8081,
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
});

export default StorybookUIRoot;
