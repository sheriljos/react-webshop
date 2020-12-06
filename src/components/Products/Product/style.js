import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    root: {
      maxWidth: '100%',
    },
    media: {
      height: 140,
    },
    cardContent: {
        display: "flex",
        justifyContent: "space-between"
    },
    cardButton: {
        display: "flex",
        justifyContent: "flex-end"
    }
}));