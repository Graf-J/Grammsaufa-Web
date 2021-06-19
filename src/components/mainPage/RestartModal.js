import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import './RestartModal.css';

function RestartModal({ restartModalOpen, closeRestartModal, restartGame }) {

    const handleDeleteClick = () => {
        restartGame();
        closeRestartModal();
    }

    const handleAbortClick = () => {
        closeRestartModal();
    }

    return (
        <Modal className='restart-modal' open={ restartModalOpen } onClose={ closeRestartModal }>
            <div className='restart-modal-content'>
                <h3>Bist du dir sicher, dass alle bisherigen Ergebnisse gelöscht werden sollen?</h3>
                <div className='restart-modal-button-wrapper'>
                    <Button color='secondary' onClick={ handleDeleteClick }>Löschen</Button>
                    <Button color='primary' onClick={ handleAbortClick }>Abbrechen</Button>
                </div>
            </div>
        </Modal>
    )
}

export default RestartModal
