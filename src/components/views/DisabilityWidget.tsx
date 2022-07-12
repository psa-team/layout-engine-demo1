import React from 'react'
import AccessibleIcon from '@mui/icons-material/Accessible';
import { Link } from '@mui/material';
import Widget from './Widget';

const DisabilityWidget = (props: any) => {
    return (
        <Widget title='Инвалидность'>
            <React.Fragment>
                {/* <AccessibleIcon/> */}
                <Link href="#">Дыхательная Астма (J45.1) - 1 группа (Действующая 24.04.2020)</Link>
            </React.Fragment>
        </Widget>
    );
};

export default DisabilityWidget;