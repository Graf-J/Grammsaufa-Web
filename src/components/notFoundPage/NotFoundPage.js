import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage() {
    return (
        <div className='not-found-page'>
            <h1>404 NOT FOUND</h1>
            <Link to='/' className='go-back'>Go Back</Link>
        </div>
    )
}

export default NotFoundPage
