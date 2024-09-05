import { Platform, StyleSheet } from "react-native";
import { Colors } from "../../../constants";

const styles = StyleSheet.create({
    totalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 16,
        paddingBottom: Platform.OS === 'android' ? 12 : 0,
        borderTopWidth: 1,
        borderColor: Colors.lightGray,
        paddingHorizontal: 16
    },
    listContainer: { flex: 1 },
    flatlist: { paddingBottom: 12 }
});

export default styles