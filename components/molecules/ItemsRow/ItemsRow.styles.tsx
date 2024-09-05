import { StyleSheet } from "react-native";
import { itemRowTotalWidth } from "../../../constants/dimensions";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 12,
        justifyContent: 'space-between',
        paddingHorizontal: 16
    },
    itemLabelContainer: { width: itemRowTotalWidth * 0.4 },
    itemCounterContainer: { width: itemRowTotalWidth * 0.35, alignItems: 'center' },
    itemPriceContainer: { width: itemRowTotalWidth * 0.25, alignItems: 'flex-end' }
});

export default styles