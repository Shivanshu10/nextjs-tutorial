import React from 'react';

const layout = ({ children }) => {
    return (
        <>
            <div>Move to top</div>
            <div>{children}</div>
        </>
    );
}

export default layout;