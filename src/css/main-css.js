export const useStyles = theme => ({
    root: {
        display: 'flex',
        height: '100%',
    },
    content: {
        flexGrow: 1,
        // border: '1px solid yellow',
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(3),
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(8),
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1)
        },
    },
    latest: {
        flexGrow: '2'
    },
    online: {
        flexGrow: '1',
        maxWidth: '600px'
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap-reverse',
        maxWidth: '1700px',
        justifyContent: 'center'
    }
});