import React from 'react';

const Price = ({data}) => {
    return (
        <div>
            <h1 className="text-[32px] font-bold text-black/90">{data.price} $</h1>
        </div>
    );
}

export default Price;
