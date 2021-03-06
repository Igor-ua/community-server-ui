import {makeStyles} from "@material-ui/core/styles";

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        // border: '1px solid red'
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#282c34',
        borderRight: 0,
    },
    drawerContainer: {
        overflow: 'auto',
        marginTop: theme.spacing(15),
    },
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0
        },
    },
    appBar: {
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    toolbar: {
        backgroundColor: '#282c34',
    },
    list: {
        background: 'linear-gradient(0deg, #114d8a, #404c75)',
        borderRadius: '5px',
        marginRight: '10px',
        marginLeft: '10px'
    },
    link: {
        textTransform: "unset",
        color: "#a5a5a5",
        textDecoration: "unset",
    },
    logo: {
        position: 'relative',
        opacity: '1',
        textAlign: 'center',
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '0',
            right: '15px',
            height: '1px',
            width: 'calc(100% - 30px)',
            background: 'hsla(0,0%,100%,.5)'
        },
        paddingBottom: '15px'
    },
    logoIcon: {
        color: 'cyan',
        float: 'left',
        width: '30px',
        height: '30px'
    },
    logoText: {
        color: 'white',
        opacity: '1',
        textTransform: 'uppercase',
        paddingTop: '6px'
    },
    icon: {
        color: 'white'
    },
    iconText: {
        color: 'white'
    },
    sideIcon: {
        width: theme.spacing(5),
        height: theme.spacing(5)
    }
}));