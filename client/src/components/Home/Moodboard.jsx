import React from 'react';
import './Styles/Moodboard.css';

const issues = [
    { id: 1, name: 'مشاكل في المحرك', image: 'https://cdn11.bigcommerce.com/s-f4083/product_images/uploaded_images/motor-g6a539d6e3-640.jpg' },
    { id: 2, name: 'مشاكل في المكابح', image: 'https://media.istockphoto.com/id/1193247877/photo/handsome-mechanic-in-uniform.jpg?s=612x612&w=0&k=20&c=ZDIuniZcHY0McW4Zc654glUrtTGa8A7U2X2enGM7_60=' },
    { id: 3, name: 'مشاكل كهربائية', image: 'https://www.mach1services.com/wp-content/uploads/2020/09/car-battery-work.jpg' },
    { id: 4, name: 'مشاكل في نظام التكييف', image: 'https://img.freepik.com/premium-photo/car-air-conditioning-close-up-view-air-conditioner-flow-inside-car-detail-interior-car-air-ducts_436221-630.jpg' },
    { id: 5, name: 'مشاكل في نظام التعليق', image: 'https://img.freepik.com/premium-photo/car-suspension-components-close-up_908985-86088.jpg' },
    { id: 6, name: 'مشاكل في العجلات', image: 'https://img.freepik.com/free-photo/car-tires-showcased-inside-automobile-workshop_157027-4455.jpg' },
];


const Moodboard = () => {
    return (
        <section className="moodboard">
            <h2>المشاكل الشائعة في السيارات</h2>
            <div className="issue-grid">
                {issues.map(issue => (
                    <div key={issue.id} className="issue-card">
                        <img src={issue.image} alt={issue.name} />
                        <h4>{issue.name}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Moodboard;
