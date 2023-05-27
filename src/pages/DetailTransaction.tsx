import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import data from '../json/jsonviewer.json';


const DetailTransaction = () => {

    const navigate = useNavigate();

    const params = useParams();
    const stringParam = params.string;

    const transactions = data.data
    const detailTransaction = transactions.filter(transaction => {
        if (transaction?._id===stringParam)return transaction
        else return null
    })

    const onClickBack = () => {
        navigate(-1)
    }

    const stringToFloat = (data: string) => {
        const stringFloat = data;
        const numberString = stringFloat.replace(/[^0-9.-]/g, "");
        const newFloat = parseFloat(numberString);
        return newFloat
    }

    return (
        <div className="container mx-auto">
            <div className="xl:px-48 py-6">
                <div className="grid grid-cols-12 flex-col">
                    <div className="col-span-12 text-center">
                        <div className="py-4 overflow-hidden shadow-lg border border-gray-300">
                            <h2 className="font-bold text-xl mb-2 text-blue-400">{detailTransaction[0]?.name?.first} {detailTransaction[0]?.name?.last}</h2>
                            <p className="text-gray-700 text-base">Amount: {stringToFloat(detailTransaction[0]?.amount)}</p>
                            <p className="text-gray-700 text-base">Type: {detailTransaction[0]?.type}</p>
                            <p className="text-gray-700 text-base">Company: {detailTransaction[0]?.company}</p>
                            <p className="text-gray-700 text-base">Email: {detailTransaction[0]?.email}</p>
                            <p className="text-gray-700 text-base">Phone: {detailTransaction[0]?.phone}</p>
                            <p className="text-gray-700 text-base">Address: {detailTransaction[0]?.address}</p>
                            <hr className="mt-6 border-t-2 border-gray-300" />
                            <button
                                onClick={onClickBack}
                                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DetailTransaction;