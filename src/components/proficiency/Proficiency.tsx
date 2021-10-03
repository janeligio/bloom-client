import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function ProficiencyComponent(props: { proficiency: number }) {
    const [proficiency, setProficiency] = useState(props.proficiency * 10);

    return (
        <Box sx={{ width: '90%' }}>
            <LinearProgress variant="determinate" value={proficiency} />
        </Box>
    );
}
