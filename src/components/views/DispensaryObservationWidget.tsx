import React from 'react'
import VaccinesIcon from '@mui/icons-material/Vaccines';
import { Typography } from '@mui/material';
import Widget from './Widget';

const DispensaryObservationWidget = (props: any) => {
    return (
        <Widget title='Диспансерное наблюдение'>
            <React.Fragment>
                <Typography variant="caption">
                    Диагноз и дата постановки
                </Typography>
                <Typography>
                    Язва желудка (К25) с 24.04.2020
                </Typography>
            </React.Fragment>
        </Widget>
    );
};

export default DispensaryObservationWidget;