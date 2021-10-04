import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import LinearProgress, {
    linearProgressClasses,
} from '@mui/material/LinearProgress';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton } from '@mui/material';

export default function ProficiencyComponent(props: { proficiency: number }) {
    const [proficiency, setProficiency] = useState(props.proficiency * 10);
    const [color, setColor] = useState('red');

    useEffect(() => {
        console.log('Changed');
        console.log(`Prof: ${proficiency}`);
        setColor(calculateBarColor(proficiency));
    }, [setColor, proficiency]);

    const add = () => proficiency < 100 && setProficiency(proficiency + 10);
    const subtract = () => proficiency > 0 && setProficiency(proficiency - 10);

    // TODO: Make these more granular and define more friendly colors
    const calculateBarColor = (proficiency: number) => {
        if (proficiency < 50) {
            return 'red';
        }
        if (proficiency < 80) {
            return 'orange';
        }
        return 'green';
    };

    // How to further customize: https://mui.com/components/progress/#customization
    const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
        borderRadius: 5,
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? color : color,
        },
    }));

    return (
        <Box sx={{ width: '90%' }}>
            <IconButton aria-label="minus" size="small" onClick={subtract}>
                <RemoveIcon fontSize="inherit" />
            </IconButton>
            <StyledLinearProgress variant="determinate" value={proficiency} />
            <IconButton aria-label="plus" size="small" onClick={add}>
                <ControlPointIcon fontSize="inherit" />
            </IconButton>
        </Box>
    );
}
