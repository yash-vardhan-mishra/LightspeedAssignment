import { StyleSheet } from "react-native";
import { Colors } from "../../constants";
import { itemRowTotalWidth } from "../../constants/dimensions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingTop: 24
    },
    buttonContainer: { width: itemRowTotalWidth },
    shimmerStyle: { alignSelf: 'center', borderRadius: 4, marginBottom: 24 },
    shimmerContainer: { marginTop: 12 }
});

export default styles