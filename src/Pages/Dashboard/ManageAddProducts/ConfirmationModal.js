import React from 'react';

const ConfirmationModal = ({ title, mesagse, closeModal, successBtnName, successAction, modalData }) => {


    return (
        <div >
            {/* The button to open modal */}
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box bg-violet-300">
                    <h3 className="font-bold text-lg text-pink-600"> {title} </h3>
                    <p className="py-4">{mesagse}!</p>
                    <div className="modal-action">

                        <label onClick={() => successAction(modalData)} htmlFor="confirmation-modal" className="btn bg-red-500 text-black border-none hover:bg-pink-700 ">{successBtnName}</label>

                        <label onClick={closeModal} className="btn bg-green-500 text-purple-800 border-none hover:text-white">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;