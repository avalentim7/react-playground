import React from 'react';
import styled from 'styled-components';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Toast = styled(ToastContainer)`
    .Toastify__toast--info {
        
    }
    .Toastify__toast--success {
        backgroud-color: 'red';
    }
    .Toastify__toast--warning {
        
    }
    .Toastify__toast--error {
        
    }
    .Toastify__toast-new_achievement {
        background-color: white;
    }
`

export const showToast = ({ type, message }) => {
    switch (type) {
        case 'success':
            toast.success(message);
            break;
        case 'warn':
            toast.warning(message);
            break;
        case 'error':
            toast.error(message);
            break;
        case 'newAchiev':
            toast(message, {
                position: 'bottom-center',
                draggable: true,
                // closeButton: false,
                bodyClassName: 'AchievementToastContainer',
                // autoClose: false,
            });
            break;
        default:
            toast.info(message);
    }
};

export default function ToastAnimated() {
    return <Toast />
}