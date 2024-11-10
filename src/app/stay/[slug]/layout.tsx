"use client";

import HotelHeader from "../../components/HotelHeader";
import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import useStore from "@/store";
import Link from "next/link";

interface RootLayoutProps {
    children: React.ReactNode;
    params: {
        slug: string;
    };
}

export default function RootLayout({ children, params }: Readonly<RootLayoutProps>) {
    const pathname = usePathname();
    const _searchParams = useSearchParams();
    const { hotelDetail, setHotelDetail, searchParams, setSearchParams } = useStore();
    const { setIdHotel } = useStore();
    const [slugState, setSlugState] = useState("");
    // const [searchParams, setSearchParams] = useState<URLSearchParams>(new URLSearchParams());
    // const [activeTab, setActiveTab] = useState("deals");
    // const getSearchParams = () => {
    //     if (typeof window !== "undefined") {
    //         return new URLSearchParams(window.location.search);
    //     }
    //     return new URLSearchParams();
    // };

    const fetchHotelDetail = async () => {
        try {
            const { slug } = await params;
            setSlugState(slug);
            let _idHotel = slug;
            while (_idHotel.indexOf("-") > -1) {
                _idHotel = _idHotel.slice(_idHotel.indexOf("-") + 1);
            }
            setIdHotel(_idHotel);
            const response: Response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/property/content?id=${_idHotel}&include=room`
            );
            const responseBody = await response.json();
            if (!response.ok) {
                console.log(response.status, responseBody.message, "<<<<<<<<<<<<<<<<<<<<<<");
            }
            setHotelDetail(responseBody[_idHotel]);
        } catch (error) {
            console.log(error);
        }
    };
    const selectTab = () => {
        const setActive = (tabId: string) => {
            const tabs = document.querySelectorAll(".tab-btn");
            const indicator = document.getElementById("active-tab-indicator");
            const activeTab = document.getElementById(tabId);
            // const contents = document.querySelectorAll(".tab-content");

            // Get selected tab's position and width
            const tabRect = activeTab?.getBoundingClientRect();
            const containerRect = (activeTab?.parentNode as Element)?.getBoundingClientRect();

            if (indicator && tabRect) {
                // Adjust the indicator position and width
                indicator.style.width = `${tabRect.width}px`;
                if (window.matchMedia("(min-width: 1000px)").matches) {
                    indicator.style.left = `${tabRect.left - containerRect.left}px`;
                } else {
                    indicator.style.left = `${tabRect.left}px`;
                }
            }
            // Remove active styling from other tabs and apply to the selected tab
            tabs.forEach((tab) => {
                if (tab === activeTab) {
                    tab.classList.remove("text-gray-400");
                    tab.classList.remove("fill-gray-400");
                    tab.classList.add("text-blue-500");
                    tab.classList.add("fill-blue-500");
                } else {
                    tab.classList.remove("text-blue-500");
                    tab.classList.remove("fill-blue-500");
                    tab.classList.add("text-gray-400");
                    tab.classList.add("fill-gray-400");
                }
            });
            // Hide all tab contents and show the selected tab's content
            // contents.forEach((content) => content.classList.add("hidden"));
            // const tabContent = document.getElementById(`${tabId}-content`);
            // if (tabContent) {
            //     tabContent.classList.remove("hidden");
            // }
        };
        let _path = pathname;
        while (_path.indexOf("/") > -1) {
            _path = _path.slice(_path.indexOf("/") + 1);
        }
        switch (_path) {
            case "photos":
                setActive("photos");
                break;
            case "info":
                setActive("info");
                break;
            default:
                setActive("deals");
        }
    };

    useEffect(() => {
        window.addEventListener("resize", selectTab);
        return () => {
            window.removeEventListener("resize", selectTab);
        };
    }, []);

    useEffect(() => {
        fetchHotelDetail();
    }, [params]);

    useEffect(() => {
        setSearchParams(_searchParams);
    }, [_searchParams]);

    useEffect(() => {
        selectTab();
    }, [pathname]);

    return (
        <>
            <div className="max-w-[1000px] mx-auto">
                <HotelHeader hotelDetail={hotelDetail} />
                <div className="relative flex justify-center">
                    {/* Tabs container */}
                    <div className="text-gray-400 w-full wide:flex wide:gap-6 grid grid-cols-3 justify-center">
                        <Link
                            href={`/stay/${slugState}?${searchParams.toString()}`}
                            id="deals"
                            className="col-span-1 flex justify-center items-center font-semibold gap-1 py-2 px-3 h-[52px] wide:w-[90px] transition-colors duration-300"
                        >
                            <span className="h-[22px] w-[22px] wide:h-[18px] wide:w-[18px]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="h-[22px] w-[22px] wide:h-[18px] wide:w-[18px]"
                                >
                                    <path d="M21.41 11.58L12.41 2.58A2 2 0 0 0 11 2H4A2 2 0 0 0 2 4V11A2 2 0 0 0 2.59 12.42L11.59 21.42A2 2 0 0 0 13 22A2 2 0 0 0 14.41 21.41L21.41 14.41A2 2 0 0 0 22 13A2 2 0 0 0 21.41 11.58M13 20L4 11V4H11L20 13M6.5 5A1.5 1.5 0 1 1 5 6.5A1.5 1.5 0 0 1 6.5 5Z" />
                                </svg>
                            </span>
                            <span className="hidden wide:flex text-xs">DEALS</span>
                        </Link>
                        <Link
                            href={`/stay/${slugState}/photos?${searchParams.toString()}`}
                            id="photos"
                            className="col-span-1 flex justify-center items-center font-semibold gap-1 py-2 px-3 h-[52px] wide:w-[90px] transition-colors duration-300"
                        >
                            <span className="h-[22px] w-[22px] wide:h-[18px] wide:w-[18px]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    role="img"
                                    className="h-[22px] w-[22px] wide:h-[18px] wide:w-[18px]"
                                >
                                    <path d="M10,4V8H14V4H10M16,4V8H20V4H16M16,10V14H20V10H16M16,16V20H20V16H16M14,20V16H10V20H14M8,20V16H4V20H8M8,14V10H4V14H8M8,8V4H4V8H8M10,14H14V10H10V14M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4C2.92,22 2,21.1 2,20V4A2,2 0 0,1 4,2Z" />
                                </svg>
                            </span>
                            <span className="hidden wide:flex text-xs">PHOTOS</span>
                        </Link>
                        <Link
                            href={`/stay/${slugState}/info?${searchParams.toString()}`}
                            id="info"
                            className="col-span-1 flex justify-center items-center font-semibold gap-1 py-2 px-3 h-[52px] wide:w-[90px] transition-colors duration-300"
                        >
                            <span className="h-[22px] w-[22px] wide:h-[18px] wide:w-[18px]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    role="img"
                                    className="h-[22px] w-[22px] wide:h-[18px] wide:w-[18px]"
                                >
                                    <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
                                </svg>
                            </span>
                            <span className="hidden wide:flex text-xs">INFO</span>
                        </Link>
                    </div>
                    {/* Moving top border */}
                    <hr className="mb-[-1px] absolute bottom-0 left-0 right-0 h-0.5 wide:top-0 wide:w-[95%] mx-auto" />
                    <div
                        id="active-tab-indicator"
                        className="absolute bottom-0 wide:top-0 h-0.5 bg-blue-500 transition-all duration-300 ease-out"
                    />
                </div>
                {children}
            </div>
        </>
    );
}
