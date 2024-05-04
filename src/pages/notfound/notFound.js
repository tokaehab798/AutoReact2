import React from 'react';

function Error404() {
    const handleGoBack = () => {
        window.history.back();
      };
    return (
        <section className="p-5 text-center d-flex justify-content-center align-items-center flex-column">
            <img src="/images/404.jpg" alt="" width="500px" />
            <button className="btn bg-primary mx-auto d-block text-white" onClick={handleGoBack}>
                Go Back
            </button>
        </section>
    );
}

export default Error404;
