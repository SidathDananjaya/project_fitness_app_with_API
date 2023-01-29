import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
    <Box mt="80px" bgcolor="#FFF3F4">
        <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
            <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
        </Stack>
        <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made with ❤️ by Sidath Dananjaya</Typography>
        <Typography variant="h6" sx={{ fontSize: { lg: '12px', xs: '10px' } }} mt="5px" textAlign="center" pb="10px" style={{ color: '#FF2625' }}>© {(new Date().getFullYear())} Fitness Club.All rights reserved. </Typography>
    </Box>
);

export default Footer;