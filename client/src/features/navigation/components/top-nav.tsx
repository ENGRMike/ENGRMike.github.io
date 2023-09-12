import { Button, Toolbar, Typography } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';

import { useTheme } from '@mui/material/styles';

export const AppNavBar = () => {

    const theme = useTheme()

    return (
        <MuiAppBar position='fixed'>
            <Toolbar sx={{justifyContent: 'center'}}>
                <Button variant='text'>
                    <Typography sx={{fontWeight: "bold"}} color={theme.text?.secondary?.color}>
                        Bio
                    </Typography>
                </Button>
                <Button>
                    <Typography sx={{fontWeight: "bold"}} color={theme.text?.secondary?.color}>
                        Projects
                    </Typography>
                </Button>
            </Toolbar>
        </MuiAppBar>
    )
}