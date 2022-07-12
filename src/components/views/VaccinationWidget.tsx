import React from 'react'
import VaccinesIcon from '@mui/icons-material/Vaccines';
import Widget from './Widget';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const VaccinationWidget = (props: any) => {
    return (
        <Widget title='Профилактические прививки'>
            <React.Fragment>
                {/* <VaccinesIcon/> */}
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Вакцина</TableCell>
                            <TableCell align="center">Дата вакцинации</TableCell>
                            <TableCell align="center">Срок действия вакцины</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Спутник V (Covid-19)</TableCell>
                            <TableCell align="center">09.04.2022</TableCell>
                            <TableCell align="center">15.10.2022</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </TableContainer>                
            </React.Fragment>
        </Widget>
    );
};

export default VaccinationWidget;