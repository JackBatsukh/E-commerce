import React from 'react';

const Title = ({data}) => {
    return (
        <div>
            <h1 className="text-2xl font-bold italic">{data.title}</h1>
        </div>
    );
}

export default Title;
