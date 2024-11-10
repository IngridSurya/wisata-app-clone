"use client";

import useStore from "@/store";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const { hotelDetail, searchParams } = useStore();
    const [showSearch, setShowSearch] = useState(false);
    const [selectedDate, setSelectedDate] = useState("");

    useEffect(() => {
        fetchSearchParams();
    }, [searchParams]);

    const fetchSearchParams = () => {
        const checkin = searchParams.get("checkin") || "";
        const checkout = searchParams.get("checkout") || "";
        //if checkin month is different with checkout month, then concat the date and the month to setselecteddate
        //if checkin month is same with checkout month, then concat only the date
        //if checkin year is different with checkout year, then concat the date, month, and year to setselecteddate
        //if checkin year is same with checkout year, then concat only the date and month
        if (checkin && checkout) {
            const checkinDate = new Date(checkin);
            const checkoutDate = new Date(checkout);
            console.log(checkinDate, checkoutDate);
            if (checkinDate.getMonth() !== checkoutDate.getMonth()) {
                setSelectedDate(
                    `${checkinDate.getDate()} ${checkinDate.toLocaleString("default", {
                        month: "short",
                    })} - ${checkoutDate.getDate()} ${checkoutDate.toLocaleString("default", {
                        month: "short",
                    })} ${checkoutDate.getFullYear()}`
                );
            } else if (checkinDate.getFullYear() !== checkoutDate.getFullYear()) {
                setSelectedDate(
                    `${checkinDate.getDate()} ${checkinDate.toLocaleString("default", {
                        month: "short",
                    })} ${checkinDate.getFullYear()} - ${checkoutDate.getDate()} ${checkoutDate.toLocaleString(
                        "default",
                        {
                            month: "short",
                        }
                    )} ${checkoutDate.getFullYear()}`
                );
            } else {
                setSelectedDate(
                    `${checkinDate.getDate()} - ${checkoutDate.getDate()} ${checkoutDate.toLocaleString("default", {
                        month: "short",
                    })}`
                );
            }
        }
    };

    return (
        <>
            <div className="sticky top-0 bg-white z-20 h-[56px] xwide:h-[64px] flex items-center justify-center py-1 xwide:py-2 px-4">
                <div className="mx-auto max-w-[1000px] w-full flex items-center justify-center">
                    <Link href="/" className="h-[48px] shrink-0 items-center hidden wide:flex">
                        <img src="../logo.png" alt="wisata logo" className="h-[42px] w-[185px]" />
                    </Link>
                    <button
                        type="button"
                        className="wide:hidden rounded-[4px] w-[48px] ml-[-8px] mr-1 flex justify-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={36}
                            height={36}
                            viewBox="0 0 24 24"
                            role="img"
                            aria-hidden="true"
                            className="text-[36px] fill-blue-500"
                        >
                            <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
                        </svg>
                    </button>

                    <div className="w-full wide:max-w-[70%] flex justify-center">
                        <button
                            onClick={() => {
                                setShowSearch((prev) => !prev);
                            }}
                            type="button"
                            className="flex justify-center items-center gap-1 bg-gray-100 h-[40px] rounded-[4px] mx-auto mr-2 wide:mx-6 w-full text-sm max-w-[590px]"
                        >
                            <div className="flex items-center justify-center mx-4 gap-1">
                                <span className="w-[16px] h-[16px]">
                                    <svg
                                        width={16}
                                        height={16}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        role="img"
                                        aria-hidden="true"
                                    >
                                        <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"></path>
                                    </svg>
                                </span>
                                <span className="shrink min-w-0 min-h-0 text-start flex-1 truncate text-wrap line-clamp-1">
                                    {hotelDetail?.name}
                                </span>
                                <span className="font-medium"> · {selectedDate}</span>
                            </div>
                        </button>
                    </div>
                    <button
                        type="button"
                        className="w-[75px] font-medium bg-blue-500 text-white rounded-[4px] my-[4px] px-4 h-[36px]"
                    >
                        <span className="text-sm flex text-nowrap">Sign in</span>
                    </button>
                </div>
            </div>
            {showSearch && (
                <div className="fixed top-0 left-0 bg-transparent w-screen h-screen flex justify-center items-center z-10">
                    <div
                        onClick={() => {
                            setShowSearch(false);
                        }}
                        className="cursor-pointer absolute bg-black opacity-50 w-screen h-screen"
                    />
                    <div className="absolute flex bg-white xwide:rounded-lg xwide:left-4 xwide:right-4 xwide:top-14 xwide:h-[104px] xwide:pt-2 xwide:px-6 items-center justify-center">
                        <div className="grid grid-cols-[2fr_1fr_1fr] ">
                            <div className="col-span-1 xwide:py-4 flex p-1">
                                <div className="relative">
                                    <div className="absolute text-xs leading-[20px] top-[-14px] left-2 bg-white p-1 text-gray-500">
                                        Where are you going?
                                    </div>
                                    <input
                                        type="text"
                                        className="w-auto h-[56px] pl-9 pr-3 border-[1px] border-gray-400 rounded-xl text-ellipsis text-[16px]"
                                    />
                                    <div className="absolute flex top-0 bottom-2 left-0 items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width={24}
                                            height={24}
                                            className="fill-gray-500 mx-3"
                                        >
                                            <path d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 xwide:py-4 flex p-1">
                                <div className="relative">
                                    <div className="absolute text-xs leading-[20px] top-[-14px] left-2 bg-white p-1 text-gray-500">
                                        Check in - Check out
                                    </div>
                                    <input
                                        type="text"
                                        className="w-auto h-[56px] px-3 border-[1px] border-gray-400 rounded-xl text-ellipsis text-[16px]"
                                    />
                                </div>
                            </div>
                            <div className="col-span-1 xwide:py-4 flex p-1">
                                <div className="relative">
                                    <div className="absolute text-xs leading-[20px] top-[-14px] left-2 bg-white p-1 text-gray-500">
                                        Guests & Rooms
                                    </div>
                                    <input
                                        type="text"
                                        className="w-auto h-[56px] px-3 border-[1px] border-gray-400 rounded-xl text-ellipsis text-[16px]"
                                    />
                                </div>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="col-span-1 flex items-center justify-center w-28 h-[56px] font-medium bg-blue-500 text-white rounded-lg p-4"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width={24}
                                height={24}
                                className="fill-white h-[56px]"
                            >
                                <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"></path>
                            </svg>
                            <span className="text-sm flex text-nowrap">Search</span>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
