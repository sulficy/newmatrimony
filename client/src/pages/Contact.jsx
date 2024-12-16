import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { addReviewAPI } from '../services/allAPIs';

// import forestimg from '../../assets/forest.jpg';
// import Header from '../../Components/Header/Header';


function Contact() {
    const [rating, setRating] = useState(0); // Rating state
    const [hover, setHover] = useState(null); // Hover state to highlight stars
    const [message, setMessage] = useState(''); // Feedback message state
    const [isSubmitting, setIsSubmitting] = useState(false); // To track form submission

    // Handle the message input change
    const handleMessageChange = (e) => setMessage(e.target.value);

    // Submit feedback function
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        
        // Check if rating or message is missing
        if (rating === 0 || message.trim() === '') {
            alert('Please provide a rating and a message.');
            return; // Stop further submission
        }
    
        // Prepare the request body as JSON (no need for FormData here)
        const reqBody = {
            rating,
            message,
        };
    
        const token = sessionStorage.getItem('token');
        if (!token) {
            alert('User is not authenticated.');
            return;
        }
    
        const reqHeader = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        };
    
        setIsSubmitting(true);
    
        try {
            const response = await addReviewAPI()
    
            const data = await response.json();
    
            if (response.ok) {
                alert('Review added successfully!');
                setRating(0); // Reset rating
                setMessage(''); // Reset message
            } else {
                alert(data.error || 'Failed to add review');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong while submitting the review.');
        } finally {
            setIsSubmitting(false);
        }
    };
    
    

    return (
        <>
            <Header />
            <div className="flex bg-fixed h-screen flex-col items-center justify-center p-2 bg-cover bg-center"
                 >
                <div className="max-w-[40rem] w-full h-auto flex flex-col items-center justify-center bg-white/40 backdrop-blur-md shadow-lg rounded-[40px] p-4 space-y-6">
                    <form onSubmit={handleSubmit} className="flex flex-col max-w-xl p-2 shadow-sm rounded-xl lg:p-4 dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex flex-col items-center h-auto w-full">
                            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100">How are you feeling ?</h2>
                            <div className="flex flex-col items-center py-6 space-y-3">
                                <span className="text-center text-lg font-semibold text-gray-700">Your input is valuable in helping us better understand your needs and tailor our service accordingly.</span>
                                <div className="flex space-x-3">
                                    {[...Array(5)].map((_, i) => (
                                        <button
                                            key={i}
                                            type="button"
                                            onClick={() => setRating(i + 1)}
                                            onMouseEnter={() => setHover(i + 1)}
                                            onMouseLeave={() => setHover(null)}
                                            aria-label={`Rate ${i + 1} stars`}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill={(hover || rating) > i ? 'yellow' : 'gray'}
                                                className="w-10 h-10"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col w-full">
                                <textarea
                                    rows="3"
                                    placeholder="Add a comment..."
                                    value={message}
                                    onChange={handleMessageChange}
                                    className="p-4 rounded-md resize-none dark:text-gray-800 dark:bg-gray-50"
                                ></textarea>
                                <div className="mt-2 text-right text-sm text-gray-500">{message.length} / 500 characters</div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    onClick={handleSubmit}
                                    className={`py-4 my-8 font-semibold rounded-md ${isSubmitting ? 'bg-gray-400' : 'bg-violet-600 text-white'} dark:text-gray-50`}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Leave feedback'}
                                  
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Contact;