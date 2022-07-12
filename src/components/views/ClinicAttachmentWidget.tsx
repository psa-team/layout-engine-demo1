import React from 'react'
import AccessibleIcon from '@mui/icons-material/Accessible';
import { Typography } from '@mui/material';
import Widget from './Widget';

const ClinicAttachmentWidget = (props: any) => {
    return (
        <Widget title='Прикрепление к поликлинике'>
            <React.Fragment>
                <Typography variant="caption">
                    Медицинская организация и дата прикрепления
                </Typography>
                <Typography>
                    ГБУЗ ГП №175 ДЗМ филиал №3 (ГП №130) с 02.03.2017
                </Typography>
            </React.Fragment>
        </Widget>
    );
};

export default ClinicAttachmentWidget;