import { StyleSheet } from "react-native";
import { Colors } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        paddingVertical: 2,
        paddingHorizontal: 12,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.gainsboro,
        borderRadius: 20,
        marginHorizontal: 16
    },
    countContainer: {
        paddingVertical: 4,
        alignItems: 'center',
        width: 48,
        marginHorizontal: 8,
        backgroundColor: Colors.white,
    },
    pressableText: { width: 8 }
});

export default styles