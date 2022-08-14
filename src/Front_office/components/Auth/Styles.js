import Color from "../../../Back_office/components/palette/color";
import { makeStyles } from "@mui/styles";

export const StyleAuth = makeStyles((theme) => ({
    root: {
        color: "#9A979F",
        fontSize: '14px'
    },
    textField: {
        width: '100%',
        "& label.Mui-focused": {
            color: Color.paletteBluedark
        },
        "& .MuiInput:after": {
            border$Color: Color.paletteBluedark
        },
        margin: '3px 0'
    },
    label: {
        color: "#9A979F",
        fontSize: '14px'
    },
    icon: {
        color: "#9A979F",
        fontSize: '18px'
    },
    buttonConnexion: {
        width: "100%",
        backgroundColor: Color.paletteBluedark,
        color: "white",
        fontWeight: 'bold',
        fontSize: '14px',
        "&:hover": {
            background: Color.paletteTeal4,
        },
        "&:active": {
            background: Color.paletteTeal4,
        }
    },
    buttonCancel: {
        width: "100%",
        background: Color.paletteOrange,
        color: "white",
        fontWeight: 'bold',
        fontSize: '14px',
        "&:hover": {
            background: Color.paletteOrange,
        },
        "&:active": {
            background: Color.paletteOrange,
        }
    }
}));