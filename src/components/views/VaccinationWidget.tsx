import React from 'react'
import VaccinesIcon from '@mui/icons-material/Vaccines';
import { Typography } from '@mui/material';
import Widget from './Widget';

const VaccinationWidget = (props: any) => {
    return (
        <Widget title='Профилактические прививки'>
            <React.Fragment>
                <VaccinesIcon/>
            </React.Fragment>
        </Widget>
    );
};

export default VaccinationWidget;