import React, { useEffect, useState } from 'react';
import data from '../json/jsonviewer.json';
import {useLocation, useNavigate} from "react-router-dom";
import {Simulate} from "react-dom/test-utils";
import transitionEnd = Simulate.transitionEnd;

const ListPage = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const tabValue = searchParams.get("tab");

    const dataType: Record<string, string> = {
        "0": "income",
        "1": "outcome",
        "2": "loan",
        "3": "investment",
    }

    const transactions = data.data

    const filterTransactions = () => {
        if (tabValue){
            const type: string = dataType[tabValue]
            const transactionsType = transactions.filter(transaction => {
                return transaction?.type === type;
            })
            return transactionsType
        }else{
            return transactions
        }
    }

    const bgColor = (data: string) => {
        if (data===tabValue){
            return "bg-green-400 text-white"
        }
    }

    const stringToFloat = (data: string) => {
        const stringFloat = data;
        const numberString = stringFloat.replace(/[^0-9.-]/g, "");
        const newFloat = parseFloat(numberString);
        return newFloat
    }

    const onClickSeeAll = (data: string) => {
        const routerLink: string = "/navigator?tab="+data
        navigate(routerLink);
    }

    const onClickSeeDetail = (data: string) => {
        const routerLink: string = "/detail/"+data
        navigate(routerLink);
    }

    return (
        <div className="container mx-auto">
            <div className="xl:px-48 py-6">
                <div className="grid grid-cols-12 flex-col">
                    <div
                        className={"col-span-3 text-center "+bgColor("0")}
                        onClick={() => onClickSeeAll("0")}
                    >
                        <div className="py-2 overflow-hidden shadow-lg border border-gray-300">
                            income
                        </div>
                    </div>
                    <div
                        className={"col-span-3 text-center "+bgColor("1")}
                        onClick={() => onClickSeeAll("1")}
                    >
                        <div className="py-2 overflow-hidden shadow-lg border border-gray-300">
                            outcome
                        </div>
                    </div>
                    <div
                        className={"col-span-3 text-center "+bgColor("2")}
                        onClick={() => onClickSeeAll("2")}
                    >
                        <div className="py-2 overflow-hidden shadow-lg border border-gray-300">
                            loan
                        </div>
                    </div>
                    <div
                        className={"col-span-3 text-center "+bgColor("3")}
                        onClick={() => onClickSeeAll("3")}
                    >
                        <div className="py-2 overflow-hidden shadow-lg border border-gray-300">
                            investment
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 flex-col mt-4">
                    <div className="col-span-12 text-center">
                        <table className="border w-full">
                            <thead className="bg-blue-500 text-white">
                                <tr>
                                    <th className="p-2">№</th>
                                    <th className="p-2">First Name</th>
                                    <th className="p-2">Last Name</th>
                                    <th className="p-2">Amount</th>
                                    <th className="p-2">View</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filterTransactions().map((transaction, index) => (
                                    <tr key={index}>
                                        <td className="border p-1">{index+1}</td>
                                        <td className="border p-1">{transaction?.name?.first}</td>
                                        <td className="border p-1">{transaction?.name?.last}</td>
                                        <td className="border p-1">{stringToFloat(transaction?.amount)}</td>
                                        <td className="border p-1">
                                            <button
                                                onClick={() => onClickSeeDetail(transaction?._id)}
                                                className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-0.5 px-4 rounded"
                                            >
                                                view
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ListPage;