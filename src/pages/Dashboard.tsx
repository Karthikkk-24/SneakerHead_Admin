import React from 'react';
import SmallBox from '../components/SmallBox';

export default function Dashboard() {
    return (
        <div className="w-full h-auto flex flex-col items-start justify-start gap-2">
            <div className="grid grid-cols-4 gap-4 place-items-center place-content-center w-full">
                <SmallBox title="Category" value={10} />
                <SmallBox title="Product" value={10} />
                <SmallBox title="User" value={10} />
                <SmallBox title="Order" value={10} />
            </div>
        </div>
    );
}
