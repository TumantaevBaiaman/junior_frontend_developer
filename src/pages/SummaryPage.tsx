import React from 'react';
import data from '../json/jsonviewer.json';
import { useNavigate } from "react-router-dom";

const SummaryPage = () => {

    const navigate = useNavigate();

    const transactionsTotal = data.total
    const transactions = data.data

    const numberType: Record<string, number> = {
        "income": 0,
        "outcome": 1,
        "loan": 2,
        "investment": 3,
    }

    const filterCount = (data: string) => {
        const transactionsType = transactions.filter(transaction => {
            return transaction?.type === data;
        })
        return transactionsType.length
    }

    const onClickSeeAll = (data: string) => {
        const numberTypeData: number = numberType[data];
        const routerLink: string = "/navigator?tab="+numberTypeData
        navigate(routerLink);
    }

    const onClickSeeTransactions = (data: string) => {
        const numberTypeData: number = numberType[data];
    }

    return (
        <div className="container mx-auto">
            <div className="xl:px-48 py-6">
                <div className="grid grid-cols-12 flex-col">
                    <div className="col-span-12 text-center">
                        <div className="py-4 overflow-hidden shadow-lg border border-gray-300">
                            <h2 className="font-bold text-xl mb-2 text-blue-400">Welcome</h2>
                            <p className="text-gray-700 text-base">With supporting text bellow as a natural lead-in to additional content.</p>
                            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">See transactions</button>
                            <hr className="mt-6 border-t-2 border-gray-300" />
                            <p className="mt-2">You have {transactionsTotal} transactions</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-12 mt-2 flex-col">
                    <div className="col-span-6 text-center mx-2">
                        <div className="py-4 overflow-hidden shadow-lg border border-gray-300">
                            <h2 className="font-bold text-xl mb-2 text-blue-400">{filterCount("investment")}</h2>
                            <p className="text-gray-700 text-base">investment</p>
                            <button
                                onClick={() => onClickSeeAll("investment")}
                                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                See all
                            </button>
                        </div>
                    </div>
                    <div className="col-span-6 text-center mx-2">
                        <div className="py-4 overflow-hidden shadow-lg border border-gray-300">
                            <h2 className="font-bold text-xl mb-2 text-blue-400">{filterCount("loan")}</h2>
                            <p className="text-gray-700 text-base">loan</p>
                            <button
                                onClick={() => onClickSeeAll("loan")}
                                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                See all
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-12 mt-2 flex-col">
                    <div className="col-span-6 text-center mx-2">
                        <div className="py-4 overflow-hidden shadow-lg border border-gray-300">
                            <h2 className="font-bold text-xl mb-2 text-blue-400">{filterCount("income")}</h2>
                            <p className="text-gray-700 text-base">income</p>
                            <button
                                onClick={() => onClickSeeAll("income")}
                                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                See all
                            </button>
                        </div>
                    </div>
                    <div className="col-span-6 text-center mx-2">
                        <div className="py-4 overflow-hidden shadow-lg border border-gray-300">
                            <h2 className="font-bold text-xl mb-2 text-blue-400">{filterCount("outcome")}</h2>
                            <p className="text-gray-700 text-base">outcome</p>
                            <button
                                onClick={() => onClickSeeAll("outcome")}
                                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                See all
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SummaryPage;