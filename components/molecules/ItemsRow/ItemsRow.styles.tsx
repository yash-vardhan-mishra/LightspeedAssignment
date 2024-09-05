import { StyleSheet } from "react-native";
import { SCREEN_WIDTH } from "../../../constants/dimensions";

const totalWidth = SCREEN_WIDTH - 32

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 12,
        justifyContent: 'space-between',
        paddingHorizontal: 16
    },
    itemLabelContainer: { width: totalWidth * 0.4 },
    itemCounterContainer: { width: totalWidth * 0.35, alignItems: 'center' },
    itemPriceContainer: { width: totalWidth * 0.25, alignItems: 'flex-end' }
});

export default styles