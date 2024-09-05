import { View } from "react-native";
import styles from "./HomeContainer.styles";
import { MyButton } from "../../components/molecules/MyButton/MyButton";
import { NavigationProp } from "@react-navigation/native";

interface HomeContainerProps {
    navigation: NavigationProp<any>;
}

const HomeContainer = ({ navigation }: HomeContainerProps) => {
    return (
        <View style={styles.container}>
            <MyButton text="Go to Order Screen" onPress={() => navigation.navigate('OrderScreen')} />
        </View>
    );
}

export default HomeContainer;
