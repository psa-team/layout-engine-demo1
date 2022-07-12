import React, { useState } from 'react'
import AccessibleIcon from '@mui/icons-material/Accessible';
import { Container, Link, Modal, Paper } from '@mui/material';
import Widget from './Widget';
import ModalForm from './ModalForm';
import CardGroup from './disabilityDetails/CardGroup';
import disability from './disabilityDetails/disability.json';

const DisabilityWidget = (props: any) => {
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <React.Fragment>
            <Widget title='Инвалидность'>
                <React.Fragment>
                    {/* <AccessibleIcon/> */}
                    <Link href="#" onClick={toggleModal}>Дыхательная Астма (J45.1) - 1 группа (Действующая 24.04.2020)</Link>
                </React.Fragment>
            </Widget>
            <Modal
                open={modalOpen}
                onClose={toggleModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Container maxWidth="md">
                    <Paper
                        elevation={4}
                        sx={{ padding: "0.5rem" }}
                    >
                        <CardGroup title={disability.title} items={disability.items} />
                    </Paper>
                </Container>
            </Modal>
        </React.Fragment>
    );
};

export default DisabilityWidget;