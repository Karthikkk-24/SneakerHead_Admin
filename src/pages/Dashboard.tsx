import React from 'react';

export default function Dashboard() {
    return (
        <div className="w-full h-auto flex flex-col items-start justify-start gap-2">
            <div className="grid grid-cols-4 gap-4 place-items-center place-content-center w-full">
                <div className="w-full h-52 flex flex-col items-center justify-center gap-2 shadow-xl border-2 rounded-2xl bg-slate-100">
                    <h3 className="text-3xl">
                        Products
                    </h3>
                    <h3 className="text-6xl font-semibold">
                        2
                    </h3>
                </div>
            </div>
        </div>
    );
}
