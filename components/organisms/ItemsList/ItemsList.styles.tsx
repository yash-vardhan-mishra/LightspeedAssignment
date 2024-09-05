import { StyleSheet } from "react-native";
import { Colors } from "../../../constants";

const styles = StyleSheet.create({
    totalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 16,
        borderTopWidth: 1,
        borderColor: Colors.lightGray,
        paddingHorizontal: 16
    },
});

export default styles