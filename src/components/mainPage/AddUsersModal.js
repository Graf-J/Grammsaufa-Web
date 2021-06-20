import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import './AddUsersModal.css';

function AddUsersModal({ addUsersModalOpen, closeAddUsersModal, restartGame, navigateToUsersPage }) {

    const handleDeleteClick = () => {
        restartGame();
        closeAddUsersModal();
        setTimeout(() => {
            navigateToUsersPage();
        }, 100);
    }

    const handleAbortClick = () => {
        closeAddUsersModal();
    }

    return (
        <Modal className='add-users-modal' open={ addUsersModalOpen } onClose={ closeAddUsersModal }>
            <div className='add-users-modal-content'>
                <h3>Um einen Nutzer während des Spiels hinzufügen zu können müssen die aktuellen Ergebnisse gelöscht werden.</h3>
                <div className='add-users-modal-button-wrapper'>
                    <Button color='secondary' onClick={ handleDeleteClick }>Löschen</Button>
                    <Button color='primary' onClick={ handleAbortClick }>Abbrechen</Button>
                </div>
            </div>
        </Modal>
    )
}

export default AddUsersModal
