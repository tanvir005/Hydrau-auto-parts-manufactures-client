import React from 'react';

const Instruction = ({ setIsModalOpen }) => {
    const handleXMark = () => {
        setIsModalOpen(null)
    }
    return (
        <div>
            <div className="fixed z-50 top-0 bottom-0 left-0 right-0  duration-1000 ease-in">
                <div className="modal-box bg-purple-200 absolute top-1/4 lg:right-1/3">
                    <label onClick={handleXMark} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Key Features</h3>
                    <p className="py-4">•A full-stack CRUD operation-based website that has Dashboard for admin and users.
                        •The website has private routes which require login of Firebase authentication. The APIs are secured with JWT.
                        •An users can order their desire product. Also they can update their profile.
                    </p>
                    <h3 className="font-bold text-lg">Technologies:</h3>
                    <p className="py-4">•React.js •Firebase •Node.js •Express.js •Tailwind CSS</p>
                    <h3 className="font-bold text-xl">Admin Credentials</h3>
                    <p className="py-4 text-lg font-bold">Password: admin005</p>
                    <p className="py-4 text-lg font-bold">Mail: admin@admin.com</p>
                </div>
            </div>
        </div>
    );
};

export default Instruction;