import { SnackbarContent } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { forwardRef, useEffect, useState } from 'react';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ErrorSnackbar(props) {
    const [open, setOpen] = useState(props.open);

    const theme = createTheme({
        palette: {
            primary: { main: '#ce99aa' },
            secondary: {
                main: '#f8a3aa',
            },
        },
    })

    //   const handleClick = () => {
    //     setOpen(true);
    //   };

    function TransitionUp(props) {
        return <Slide {...props} direction="up" />;
    }

    const handleClose = (event, reason) => {
        // if (reason === 'clickaway') {
        //     return;
        // }
        setOpen(false);
    };

    useEffect(() => {
        props.openChangeHandler(open)
    }, [open])


    return (
        <ThemeProvider theme={theme}>
            <Stack spacing={2}>
                <Snackbar open={open} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
                    {/* <Alert onClose={handleClose} sx={{ width: '100%' }} >
                        {props.message}
                    </Alert> */}
                    <SnackbarContent style={{
                        textAlign: 'center',
                        backgroundColor: 'black',
                        color: 'white',
                        width: '100%',
                    }}
                        onClose={handleClose}
                        sx={{ width: '100%' }}
                        message={<span>{props.message}</span>}
                    />
                </Snackbar>
            </Stack>
        </ThemeProvider>
    );
}