"use client";

import DetailDialog from "@/app/components/DetailDialog";
import { toPriceFormat } from "@/helpers/price";
import useStore from "@/store";
import { usePathname, useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

interface TypeRoomCollection {
    [key: string]: TypeRoom;
}
interface TypeRoom {
    // property_id: string;
    offer_list: TypeOfferList[];
}
interface TypeRoomImages {
    caption: string;
    size_sm: string;
}
export interface TypeOfferList {
    offer_id: string;
    price_total: number;
    rate_nightly: number;
    room_name: string;
    room_available: string;
    room_bed_groups: string;
    room_size_sqm: number;
    room_views: string;
    room_images: TypeRoomImages[];
    meal_plan_code: string;
    meal_plan_description: string;
    cancel_policy_code: string;
    cancel_policy_deadline: string;
    cancel_policy_description: string;
    price_check_href: string;
    tax: number;
    tax_rate: number;
    xcode_log: {
        id: string;
        status: string;
        available_oooms: number;
        refundable: boolean;
        member_deal_available: boolean;
        sale_scenario: {
            package: boolean;
            member: boolean;
            corporate: boolean;
            distribution: boolean;
        };
        merchant_of_record: string;
        amenities: {
            "2109": {
                id: "2109";
                name: "Free self parking";
            };
            "2192": {
                id: "2192";
                name: "Free WiFi";
            };
        };
        links: {
            payment_options: {
                method: "GET";
                href: "/v3/properties/9296574/payment-options?token=REhZAQsABgIFQhMHUlNCF1ELUj1DVhdLBQMES1REClxLQg5cRR8WBlIBSxZdCFRpTQxRWVxQV1cBDQEGH1FQCwQbA1YBBR0NAQBVSAIHAAFeVAAEUAIHCh8IVURWUAdWRDtZVWgTVgBXRgBccWBiJH0vdENSQkoRXA5WRGsVVhdKX19db1xXWQ4OU1QHBFRWFFILVwYVVQhYUUwLB1YHH1AEUANfAlUGUVNXVhJQQUEVX1wHEGkLEwwFUlYfBAAPHQJUGVUPCx4SUUpAXQlbZlBUXwReVQZVAlYGSVZVVVFIVlEFXUgJBwAITgIAUFUAWQYLVAYCAUVHCUAXBVJbSgQUXVBOQV0MR0BCE0RJCVwEQz5XFVJEWUNbCwQ9WlcAVQkKInN3fiFsR19cWgBBURVUV2gQDF5dWwRWCwUUVAUbVABgUlQVAyIEVB0HIAZQTAFQUlYGAQoLVmMeAQtFD0xDGz1bVwcDCn13QFEFQlgGXFZDUgoDAA4PDAoFUlAHHQgDSAYNEkNWFhUMUURvFUoKUwtcXD1QAlsPCAcBUw5AUhNBR1wKAE1ZcCBmQFBeXAZeCxFBXlMBC1cZAlUbAg0QREZGQ1xcUhBrDFAJUwIecl1QVw8WR1RYAQIGD1IOAVwE";
            };
        };
        bed_groups: {
            "37321": {
                id: "37321";
                description: "1 King Bed";
                links: {
                    price_check: {
                        method: "GET";
                        href: "/v3/properties/9296574/rooms/314898066/rates/383524345?token=F~OjogZyw0NhkyAQ9PYWUCZ3EhD2gCCVAMS1YKFAUMITJUAVQGGAlXTgRdc2d9ImFkHVwDUVIGBgVUFFEGVAIbBgQPUx4PAABRGgcFB1INVgEKVQdTBD5BA18BBQADWlAVVAUGURpVUAIAGV0HVwgfUg1TUQZQBQpVAlIGVDJQAlYMBgZBNAABVQVCZ1K-YDEDq2A8AlULUwn7NGsDFC0KXFIVcAACl2MbbhoTEk1DURBbEnoLDFEgBlUWTkdCXElcEQ1AfA1YXhpNFkhGVQhBUE1JQA8JTG7LNTWCZTAGUflkaABdUF0BUFUWUwHUZDOLOTDIZTW7NmKkZDT9ZDXGOmTONhBbVwFVB1JSVBkOAwxRHFVdUgEbAAFQBE5UBFlTVgACUlBUUlqHYyYLBFcHHVAAHgdcMQMPXAJXAwMMSwYAVwsBUVoDAjmKZzpCUuxnYxgYXlA=";
                    };
                };
                configuration: [
                    {
                        type: "KingBed";
                        size: "King";
                        quantity: 1;
                    }
                ];
            };
        };
        cancel_penalties: [
            {
                start: "2024-11-07T14:41:25.251+07:00";
                end: "2025-03-08T15:00:00.000+07:00";
                percent: "100%";
                currency: "IDR";
            }
        ];
        occupancy_pricing: {
            "2": {
                nightly: [
                    [
                        {
                            type: "tax_and_service_fee";
                            value: "529200.00";
                            currency: "IDR";
                        },
                        {
                            type: "base_rate";
                            value: "2428916.00";
                            currency: "IDR";
                        }
                    ]
                ];
                totals: {
                    exclusive: {
                        request_currency: {
                            value: "2428916.00";
                            currency: "IDR";
                        };
                        billable_currency: {
                            value: "2428916.00";
                            currency: "IDR";
                        };
                    };
                    property_inclusive: {
                        request_currency: {
                            value: "2958116.00";
                            currency: "IDR";
                        };
                        billable_currency: {
                            value: "2958116.00";
                            currency: "IDR";
                        };
                    };
                    marketing_fee: {
                        request_currency: {
                            value: "160109.50";
                            currency: "IDR";
                        };
                        billable_currency: {
                            value: "160109.50";
                            currency: "IDR";
                        };
                    };
                    gross_profit: {
                        request_currency: {
                            value: "307902.88";
                            currency: "IDR";
                        };
                        billable_currency: {
                            value: "307902.88";
                            currency: "IDR";
                        };
                    };
                    inclusive: {
                        request_currency: {
                            value: "2958116.00";
                            currency: "IDR";
                        };
                        billable_currency: {
                            value: "2958116.00";
                            currency: "IDR";
                        };
                    };
                };
            };
        };
    };
    room_data: {
        is_mapped: boolean;
        is_decoded: boolean;
        id: string;
    };
    pricing_data: {
        strikethrough_rate_nightly: number;
        strikethrough_price_total: number;
        rate_nightly: number;
        price_total: number;
        cashback_rate: number;
        cashback_pct: number;
        net_rate_nightly: number;
        net_price_total: number;
        bonus_cashback_rate: number;
        bonus_cashback_pct: number;
        net_rate_nightly_with_bonus: number;
        net_price_total_with_bonus: number;
        wisata_point: number;
    };
}
interface TypeRoomImages {
    url: string;
    caption: string;
    type: string;
}
interface TypeFilter {
    free_breakfast: boolean | null;
    free_cancellation: boolean | null;
}

export default function HotelDetailPage() {
    const router = useRouter();
    const pathname = usePathname();
    const { idHotel, searchParams } = useStore();
    const [filter, setFilter] = useState<TypeFilter>({
        free_breakfast: searchParams.get("free_breakfast") === "true",
        free_cancellation: searchParams.get("free_cancellation") === "true",
    });
    const [rooms, setRooms] = useState<TypeRoom>();
    const [filteredRooms, setFilteredRooms] = useState<TypeRoomCollection>();
    const [roomDetail, setRoomDetail] = useState<TypeOfferList | null>(null);
    const [roomDataId, setRoomDataId] = useState("");
    const [showDialog, setShowDialog] = useState(false);

    useEffect(() => {
        if (idHotel) {
            fetchRooms();
        }
    }, [idHotel]);
    useEffect(() => {
        const _rooms: TypeRoomCollection = {};
        rooms?.offer_list?.forEach((offer) => {
            if (
                (searchParams.get("free_breakfast") &&
                    offer.meal_plan_code === "BB" &&
                    searchParams.get("free_cancellation") &&
                    offer.cancel_policy_code === "FC") ||
                (searchParams.get("free_breakfast") &&
                    !searchParams.get("free_cancellation") &&
                    offer.meal_plan_code === "BB") ||
                (searchParams.get("free_cancellation") &&
                    !searchParams.get("free_breakfast") &&
                    offer.cancel_policy_code === "FC") ||
                (!searchParams.get("free_breakfast") && !searchParams.get("free_cancellation"))
            ) {
                if (_rooms && _rooms[offer.room_name]) {
                    _rooms[offer.room_name].offer_list.push(offer);
                } else {
                    _rooms[offer.room_name] = { offer_list: [offer] };
                }
            }
        });
        setFilteredRooms(_rooms);
    }, [rooms, searchParams]);

    const fetchRooms = async () => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/stay/availability/${idHotel}?${searchParams}`
            );
            const responseBody: TypeRoom = await response.json();
            if (!response.ok) {
                console.log(response.status, "ERROR<<<<<<<<<<<");
            }
            setRooms(responseBody);
        } catch (error) {
            console.log(error);
        }
    };

    type FilterKeys = "free_breakfast" | "free_cancellation" | "";
    const handleFilterClick = (filterName: FilterKeys) => {
        let _searchParams = "";
        if (!filterName) {
            searchParams?.forEach((value, key) => {
                if (key !== "free_breakfast" && key !== "free_cancellation") {
                    _searchParams += `&${key}=${value}`;
                }
            });
            setFilter((prev) => ({ ...prev, free_breakfast: null, free_cancellation: null }));
        } else if (filter && filter[filterName]) {
            searchParams?.forEach((value, key) => {
                if (key !== filterName) {
                    _searchParams += `&${key}=${value}`;
                }
            });
            setFilter((prev) => ({ ...prev, [filterName]: null } as TypeFilter));
        } else {
            searchParams?.forEach((value, key) => {
                _searchParams += `&${key}=${value}`;
            });
            _searchParams += `&${filterName}=true`;
            setFilter((prev) => ({ ...prev, [filterName]: true } as TypeFilter));
        }
        router.push(`${pathname}?${_searchParams}`);
    };

    const createToolTip = (e: React.MouseEvent, textToolTip: string) => {
        const tooltip = document.createElement("div");
        tooltip.className = "absolute bg-black bg-opacity-50 py-1 px-4 rounded-sm flex text-[10px] text-white truncate";
        tooltip.innerText = textToolTip;
        document.body.appendChild(tooltip);
        const rect = e.currentTarget.getBoundingClientRect();
        tooltip.style.left = `${rect.left + window.scrollX}px`;
        tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight}px`;
        (e.currentTarget as HTMLElement).onmouseleave = () => {
            document.body.removeChild(tooltip);
        };
    };

    return (
        <Suspense>
            <div className="mt-4 wide:mt-1 wide:mb-8">
                <div className="wide:pt-2 xwide:px-0 flex flex-col wide:flex-row justify-start wide:justify-center gap-3 wide:gap-0">
                    <div className="px-4 wide:px-0 flex items-center gap-1">
                        <span className="text-lg h-[18px] w-[18px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="text-lg h-[18px] w-[18px]"
                            >
                                <path d="M15,19.88C15.04,20.18 14.94,20.5 14.71,20.71C14.32,21.1 13.69,21.1 13.3,20.71L9.29,16.7C9.06,16.47 8.96,16.16 9,15.87V10.75L4.21,4.62C3.87,4.19 3.95,3.56 4.38,3.22C4.57,3.08 4.78,3 5,3V3H19V3C19.22,3 19.43,3.08 19.62,3.22C20.05,3.56 20.13,4.19 19.79,4.62L15,10.75V19.88M7.04,5L11,10.06V15.58L13,17.58V10.05L16.96,5H7.04Z"></path>
                            </svg>
                        </span>
                        <p className="text-sm xwide:[15px] font-medium text-nowrap leading-[23px]">Filter rooms by</p>
                    </div>
                    <div className="flex flex-col align-start">
                        <div className="relative w-full px-4 gap-2 flex align-center justify-start overflow-x-auto">
                            {(filter?.free_breakfast || filter?.free_cancellation) && (
                                <button
                                    onClick={() => {
                                        handleFilterClick("");
                                    }}
                                    type="button"
                                    className="flex justify-center items-center rounded-full px-3 h-8 gap-2 border-[1px] border-[#1a73e8] w-[96px]"
                                >
                                    <span className="text-sm text-[#1a73e8] text-nowrap">Clear All</span>{" "}
                                    <div className="flex justify-center items-center text-white rounded-full bg-[#1a73e8] min-h-[18px] min-w-[18px] text-xs font-bold">
                                        {(searchParams.get("free_breakfast") ? 1 : 0) +
                                            (searchParams.get("free_cancellation") ? 1 : 0)}
                                    </div>
                                </button>
                            )}
                            <div className="gap-2 flex transform translate-x-0 translate-y-0">
                                <button
                                    onClick={() => {
                                        handleFilterClick("free_breakfast");
                                    }}
                                    className={`${
                                        searchParams.get("free_breakfast")
                                            ? "text-[#007aff] bg-blue-100"
                                            : "border-[1px] border-[#0000001f]"
                                    } font-medium rounded-full gap-2 flex items-center justify-center px-3 h-[32px]`}
                                >
                                    <span className="text-base h-[16px] w-[16px]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            className={`text-base h-[16px] w-[16px] ${
                                                searchParams.get("free_breakfast") ? "fill-[#007aff]" : ""
                                            }`}
                                        >
                                            <path d="M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z"></path>
                                        </svg>
                                    </span>
                                    <span className="text-sm text-nowrap">Free Breakfast</span>
                                </button>
                                <button
                                    onClick={() => {
                                        handleFilterClick("free_cancellation");
                                    }}
                                    className={`${
                                        searchParams.get("free_cancellation")
                                            ? "text-[#007aff] bg-blue-100"
                                            : "border-[1px] border-[#0000001f]"
                                    } font-medium rounded-full gap-2 flex items-center justify-center px-3 h-[32px]`}
                                >
                                    <span className="text-base h-[16px] w-[16px]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            className={`text-base h-[16px] w-[16px] ${
                                                searchParams.get("free_cancellation") ? "fill-[#007aff]" : ""
                                            }`}
                                        >
                                            <path d="M13 19C13 18.66 13.04 18.33 13.09 18H3V12H19V13C19.7 13 20.37 13.13 21 13.35V6C21 4.89 20.11 4 19 4H3C1.89 4 1 4.89 1 6V18C1 19.1 1.89 20 3 20H13.09C13.04 19.67 13 19.34 13 19M3 6H19V8H3V6M17.75 22L15 19L16.16 17.84L17.75 19.43L21.34 15.84L22.5 17.25L17.75 22"></path>
                                        </svg>
                                    </span>
                                    <span className="text-sm text-nowrap">Free Cancellation</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 w-full h-[24px] bg-[#f1f1f1] wide:bg-transparent"></div>
                {filteredRooms &&
                    Object.keys(filteredRooms).map((roomName, index) => {
                        const filteredRoom = filteredRooms[roomName];

                        return (
                            <div key={index}>
                                <div className="wide:grid wide:grid-cols-[34fr_66fr] gap-4 wide:mx-4 wide:mb-8 xwide:mb-10">
                                    <div className="wide:hidden p-4 sticky top-[56px] bg-white">
                                        <div className="flex justify-between">
                                            <div className="flex flex-nowrap align-start">
                                                <div className="text-lg leading-[26px] font-medium">
                                                    {filteredRoom.offer_list[0].room_name}
                                                </div>
                                            </div>
                                            <button type="button" className="flex ml-1 mr-[-4px] px-3 rounded-full">
                                                <span className="w-[70px] text-nowrap text-[#1a73e8] text-[14px] leading-[23px] font-medium">
                                                    See details
                                                </span>
                                            </button>
                                        </div>
                                        <div className="flex">
                                            <span className="flex items-center pr-3 gap-1">
                                                <span className="text-[16px] h-[16px] w-[16px] opacity-[54%]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        className="leading-[16px] text-[16px] h-[16px] w-[16px]"
                                                    >
                                                        <path d="M20 10V7A2 2 0 0 0 18 5H6A2 2 0 0 0 4 7V10A2 2 0 0 0 2 12V17H3.33L4 19H5L5.67 17H18.33L19 19H20L20.67 17H22V12A2 2 0 0 0 20 10M13 7H18V10H13M6 7H11V10H6M20 15H4V12H20Z"></path>
                                                    </svg>
                                                </span>
                                                <span className="text-[14px] font-sans font-normal">
                                                    {filteredRoom.offer_list[0].room_bed_groups}
                                                </span>
                                            </span>
                                            <span className="flex items-center pr-3 gap-1">
                                                <span className="text-[14px] h-[14px] w-[14px]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        className="text-[14px] h-[14px] w-[14px]"
                                                    >
                                                        <path d="M23,15H21V17H23V15M23,11H21V13H23V11M23,19H21V21C22,21 23,20 23,19M15,3H13V5H15V3M23,7H21V9H23V7M21,3V5H23C23,4 22,3 21,3M3,21H11V15H1V19A2,2 0 0,0 3,21M3,7H1V9H3V7M15,19H13V21H15V19M19,3H17V5H19V3M19,19H17V21H19V19M3,3C2,3 1,4 1,5H3V3M3,11H1V13H3V11M11,3H9V5H11V3M7,3H5V5H7V3Z"></path>
                                                    </svg>
                                                </span>
                                                <span className="text-[14px] font-sans font-normal">
                                                    {filteredRoom.offer_list[0].room_size_sqm} m<sup>2</sup>
                                                </span>
                                            </span>
                                        </div>
                                        <hr className="mx-n4 mt-4 mb-[-16px]" />
                                    </div>

                                    <div>
                                        <div
                                            onClick={() => {
                                                setShowDialog(true);
                                                setRoomDetail(filteredRoom.offer_list[0]);
                                                setRoomDataId(filteredRoom.offer_list[0].room_data.id);
                                            }}
                                            className="relative cursor-pointer gap-0.5"
                                        >
                                            <div className="grid grid-cols-[3fr_1fr] wide:grid-cols-3 bg-transparent leading-0 gap-1">
                                                <div className="h-[calc(100vw/2)] wide:col-span-3 wide:h-[calc(100vw/4.5)] xwide:h-[calc(1000px/5.65)]">
                                                    <img
                                                        alt={filteredRoom.offer_list[0].room_images[0].caption}
                                                        src={filteredRoom.offer_list[0].room_images[0].size_sm}
                                                        className="w-full h-full object-cover object-center wide:rounded-t-lg"
                                                    />
                                                </div>
                                                <div className="grid grid-rows-3 wide:grid-rows-1 wide:grid-cols-3 wide:col-span-3 gap-0.5 h-[calc(100vw/2)] wide:h-[calc((100vw-48px)/9)] xwide:h-[calc(1000px/11)]">
                                                    <img
                                                        alt={filteredRoom.offer_list[0].room_images[1].caption}
                                                        src={filteredRoom.offer_list[0].room_images[1].size_sm}
                                                        className="w-full h-full object-cover object-center wide:rounded-bl-lg"
                                                    />
                                                    <img
                                                        alt={filteredRoom.offer_list[0].room_images[2].caption}
                                                        src={filteredRoom.offer_list[0].room_images[2].size_sm}
                                                        className="w-full h-full object-cover object-center"
                                                    />
                                                    <img
                                                        alt={filteredRoom.offer_list[0].room_images[3].caption}
                                                        src={filteredRoom.offer_list[0].room_images[3].size_sm}
                                                        className="w-full h-full object-cover object-center wide:rounded-br-lg"
                                                    />
                                                </div>
                                            </div>
                                            <div className="bg-white absolute bottom-0 wide:bottom-[calc((100vw)/9)] xwide:bottom-[calc(1000px/11)] left-0 m-4 mr-1 wide:m-3 xwide:m-4 px-2 py-1 z-1 gap-1 rounded flex justify-center items-center">
                                                <span className="text-[16px] h-[16px] w-[16px]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        className="text-[16px] h-[16px] w-[16px]"
                                                    >
                                                        <path d="M10,4V8H14V4H10M16,4V8H20V4H16M16,10V14H20V10H16M16,16V20H20V16H16M14,20V16H10V20H14M8,20V16H4V20H8M8,14V10H4V14H8M8,8V4H4V8H8M10,14H14V10H10V14M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4C2.92,22 2,21.1 2,20V4A2,2 0 0,1 4,2Z"></path>
                                                    </svg>
                                                </span>
                                                <span className="pr-1 leading-[1px] text-xs">See Photos</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex flex-col p-4 rounded-lg border-[1px] border-gray-200 divide-y">
                                            <div className="hidden wide:flex wide:flex-col pb-4 wide:gap-0.5">
                                                <div className="flex justify-between">
                                                    <div className="flex flex-nowrap align-start">
                                                        <div className="text-lg leading-[26px] font-medium">
                                                            {filteredRoom.offer_list[0].room_name}
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={() => {
                                                            setShowDialog(true);
                                                            setRoomDetail(filteredRoom.offer_list[0]);
                                                            setRoomDataId(filteredRoom.offer_list[0].room_data.id);
                                                        }}
                                                        type="button"
                                                        className="flex ml-1 mr-[-4px] px-3 rounded-full"
                                                    >
                                                        <span className="w-[70px] text-nowrap text-[#1a73e8] text-[14px] leading-[23px] font-medium">
                                                            See details
                                                        </span>
                                                    </button>
                                                </div>
                                                <div className="flex flex-wrap">
                                                    <span className="flex items-center pr-3 gap-1">
                                                        <span className="text-[16px] h-[16px] w-[16px] opacity-[54%]">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 24 24"
                                                                className="leading-[16px] text-[16px] h-[16px] w-[16px]"
                                                            >
                                                                <path d="M20 10V7A2 2 0 0 0 18 5H6A2 2 0 0 0 4 7V10A2 2 0 0 0 2 12V17H3.33L4 19H5L5.67 17H18.33L19 19H20L20.67 17H22V12A2 2 0 0 0 20 10M13 7H18V10H13M6 7H11V10H6M20 15H4V12H20Z"></path>
                                                            </svg>
                                                        </span>
                                                        <span className="text-[14px] font-sans font-normal">
                                                            {filteredRoom.offer_list[0].room_bed_groups}
                                                        </span>
                                                    </span>
                                                    <span className="flex items-center pr-3 gap-1">
                                                        <span className="   text-[14px] h-[14px] w-[14px]">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 24 24"
                                                                className="text-[14px] h-[14px] w-[14px]"
                                                            >
                                                                <path d="M23,15H21V17H23V15M23,11H21V13H23V11M23,19H21V21C22,21 23,20 23,19M15,3H13V5H15V3M23,7H21V9H23V7M21,3V5H23C23,4 22,3 21,3M3,21H11V15H1V19A2,2 0 0,0 3,21M3,7H1V9H3V7M15,19H13V21H15V19M19,3H17V5H19V3M19,19H17V21H19V19M3,3C2,3 1,4 1,5H3V3M3,11H1V13H3V11M11,3H9V5H11V3M7,3H5V5H7V3Z"></path>
                                                            </svg>
                                                        </span>
                                                        <span className="text-[14px] font-sans font-normal">
                                                            {filteredRoom.offer_list[0].room_size_sqm} m<sup>2</sup>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>

                                            {filteredRoom.offer_list.map((offer, idx) => (
                                                <div key={idx}>
                                                    <div>
                                                        <div className="flex flex-nowrap align-stretch justify-between pt-4">
                                                            <div className="wide:flex wide:flex-col gap-0.5">
                                                                {offer.meal_plan_code === "BB" ? (
                                                                    <div id="meal-plan" className="flex gap-2">
                                                                        <span className="text-[17px] h-[17px] w-[17px] pt-1 leading-[17px]">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24"
                                                                                className="leading-[17px] text-[17px] h-[17px] w-[17px] fill-[#238636]"
                                                                            >
                                                                                <path d="M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z" />
                                                                            </svg>
                                                                        </span>
                                                                        <span className="text-[15px] text-[#238636] leading-[23px]">
                                                                            {offer.meal_plan_description}
                                                                        </span>
                                                                    </div>
                                                                ) : (
                                                                    <div id="meal-plan" className="flex gap-2">
                                                                        <span className="text-[17px] h-[17px] w-[17px] pt-1 leading-[17px] relative inline-block">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24"
                                                                                className="leading-[17px] text-[17px] h-[17px] w-[17px] fill-gray-500"
                                                                            >
                                                                                <path d="M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z" />
                                                                                <line
                                                                                    x1="0"
                                                                                    y1="0"
                                                                                    x2="24"
                                                                                    y2="24"
                                                                                    stroke="gray"
                                                                                    strokeWidth="2"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        <span className="text-[15px] leading-[23px]">
                                                                            Without Breakfast
                                                                        </span>
                                                                    </div>
                                                                )}
                                                                <div id="cancel-policy" className="flex gap-2">
                                                                    <span className="text-[17px] h-[17px] w-[17px] pt-1 leading-[17px]">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 24 24"
                                                                            className={`text-[17px] h-[17px] w-[17px] ${
                                                                                offer.cancel_policy_code === "NR"
                                                                                    ? "fill-[#E82127]"
                                                                                    : "fill-[#238636]"
                                                                            }`}
                                                                        >
                                                                            {offer.cancel_policy_code === "NR" ? (
                                                                                <>
                                                                                    <path d="M0.93,4.2L2.21,2.93L20,20.72L18.73,22L16.73,20H4C2.89,20 2,19.1 2,18V6C2,5.78 2.04,5.57 2.11,5.38L0.93,4.2M20,8V6H7.82L5.82,4H20A2,2 0 0,1 22,6V18C22,18.6 21.74,19.13 21.32,19.5L19.82,18H20V12H13.82L9.82,8H20M4,8H4.73L4,7.27V8M4,12V18H14.73L8.73,12H4Z" />
                                                                                    <line
                                                                                        x1="0"
                                                                                        y1="0"
                                                                                        x2="24"
                                                                                        y2="24"
                                                                                        stroke="red"
                                                                                        strokeWidth="2"
                                                                                    />
                                                                                </>
                                                                            ) : (
                                                                                <path d="M13 19C13 18.66 13.04 18.33 13.09 18H3V12H19V13C19.7 13 20.37 13.13 21 13.35V6C21 4.89 20.11 4 19 4H3C1.89 4 1 4.89 1 6V18C1 19.1 1.89 20 3 20H13.09C13.04 19.67 13 19.34 13 19M3 6H19V8H3V6M17.75 22L15 19L16.16 17.84L17.75 19.43L21.34 15.84L22.5 17.25L17.75 22"></path>
                                                                            )}
                                                                        </svg>
                                                                    </span>
                                                                    <span
                                                                        className={`text-[15px] ${
                                                                            offer.cancel_policy_code === "NR"
                                                                                ? "text-[#E82127]"
                                                                                : "text-[#238636]"
                                                                        } leading-[23px]`}
                                                                    >
                                                                        {offer.cancel_policy_description}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="flex justify-end col col-auto flex: 0 0 auto; min-w-[144px]">
                                                                <div className="my-[-2px]">
                                                                    <div className="flex flex-row flex-nowrap align-center gap-[4px] fill-gray-500">
                                                                        <button
                                                                            onMouseEnter={(e) => {
                                                                                createToolTip(e, "Copy offer");
                                                                            }}
                                                                            type="button"
                                                                            className="h-[32px] w-[32px] flex justify-center items-center"
                                                                        >
                                                                            <span>
                                                                                <span className="text-[20px] h-[20px] w-[20px]">
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 24 24"
                                                                                        className="text-[20px] h-[20px] w-[20px]"
                                                                                    >
                                                                                        <path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"></path>
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </button>
                                                                        <button
                                                                            onMouseEnter={(e) => {
                                                                                createToolTip(e, "Screenshot offer");
                                                                            }}
                                                                            type="button"
                                                                            className="h-[32px] w-[32px] flex justify-center items-center"
                                                                        >
                                                                            <span>
                                                                                <span className="text-[22px] h-[22px] w-[22px]">
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 24 24"
                                                                                        className="text-[22px] h-[22px] w-[22px]"
                                                                                    >
                                                                                        <path d="M19 19H15V21H19C20.1 21 21 20.1 21 19V15H19M19 3H15V5H19V9H21V5C21 3.9 20.1 3 19 3M5 5H9V3H5C3.9 3 3 3.9 3 5V9H5M5 15H3V19C3 20.1 3.9 21 5 21H9V19H5V15M7 11H9V13H7V11M11 11H13V13H11V11M15 11H17V13H15V11Z"></path>
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </button>
                                                                        <button
                                                                            onMouseEnter={(e) => {
                                                                                createToolTip(e, "See all actions");
                                                                            }}
                                                                            type="button"
                                                                            className="h-[32px] w-[32px] flex justify-center items-center"
                                                                        >
                                                                            <span>
                                                                                <span className="text-[22px] h-[22px] w-[22px]">
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 24 24"
                                                                                        className="text-[22px] h-[22px] w-[22px]"
                                                                                    >
                                                                                        <path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"></path>
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="my-4">
                                                            <div className="grid grid-cols-[auto_min-content] gap-0">
                                                                {idx % 2 === 1 &&
                                                                    offer.pricing_data.strikethrough_rate_nightly && (
                                                                        <>
                                                                            <div className="mt-1 mb-2 col-span-2">
                                                                                <div className="flex">
                                                                                    <div className="px-2 text-xs rounded-sm bg-[#f44336] border-[#f44336] border-[2px]">
                                                                                        <span className="flex gap-0.5 text-white uppercase text-nowrap">
                                                                                            Save
                                                                                            <span className="font-bold">
                                                                                                14%
                                                                                            </span>
                                                                                            Today!
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="mt-[-4px] h-[24px] col-span-2">
                                                                                <p className="text-xs leading-[23px] font-medium text-gray-400 line-through">
                                                                                    Rp{" "}
                                                                                    {toPriceFormat(
                                                                                        offer.pricing_data
                                                                                            .strikethrough_rate_nightly
                                                                                    )}
                                                                                </p>
                                                                            </div>
                                                                        </>
                                                                    )}
                                                                <div className="flex col-span-1 flex-1">
                                                                    <p className="flex items-baseline h-[24px] gap-1">
                                                                        <span className="text-[14px] leading-[23px]">
                                                                            Rp
                                                                        </span>
                                                                        <span className="text-[18px] leading-[18px] font-medium">
                                                                            {toPriceFormat(
                                                                                offer.pricing_data
                                                                                    .net_rate_nightly_with_bonus
                                                                            )}
                                                                        </span>
                                                                        <span className="text-nowrap text-[14px] leading-[23px]">
                                                                            {" "}
                                                                            / night
                                                                        </span>
                                                                    </p>
                                                                    <span className="text-[8px] h-[8px] w-[8px]">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 24 24"
                                                                            className="text-[8px] h-[8px] w-[8px] fill-gray-400"
                                                                        >
                                                                            <path d="M10,2H14L13.21,9.91L19.66,5.27L21.66,8.73L14.42,12L21.66,15.27L19.66,18.73L13.21,14.09L14,22H10L10.79,14.09L4.34,18.73L2.34,15.27L9.58,12L2.34,8.73L4.34,5.27L10.79,9.91L10,2Z"></path>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <div className="col-span-1 row-span-2 w-[120px]">
                                                                    <button
                                                                        type="button"
                                                                        className="bg-blue-500 text-white text-nowrap rounded-[4px] px-4 h-9 w-[120px] text-sm font-medium"
                                                                    >
                                                                        Book Now
                                                                    </button>
                                                                </div>
                                                                <div>
                                                                    <p className="text-xs text-nowrap h-[19px] text-gray-400">
                                                                        after tax &amp; fees
                                                                    </p>
                                                                </div>
                                                                <div className="col-span-2 grid grid-cols-[auto_auto] mt-1">
                                                                    <p className="col-span-1 flex justify-start items-center">
                                                                        <span className="mr-1 text-[8px] h-[8px] w-[8px]">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24"
                                                                                className="text-[8px] h-[8px] w-[8px] fill-gray-400"
                                                                            >
                                                                                <path d="M10,2H14L13.21,9.91L19.66,5.27L21.66,8.73L14.42,12L21.66,15.27L19.66,18.73L13.21,14.09L14,22H10L10.79,14.09L4.34,18.73L2.34,15.27L9.58,12L2.34,8.73L4.34,5.27L10.79,9.91L10,2Z"></path>
                                                                            </svg>
                                                                        </span>
                                                                        <span className="font-sans text-[11px] text-nowrap h-[19px] text-gray-400">
                                                                            Member-only price, valid in app only
                                                                        </span>
                                                                    </p>
                                                                    <p className="col-span-1 flex justify-end items-center gap-[4px]">
                                                                        <span className="text-xs h-[12px] w-[12px]">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24"
                                                                                className="text-xs h-[12px] w-[12px] fill-[#1a73e8]"
                                                                            >
                                                                                <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
                                                                            </svg>
                                                                        </span>
                                                                        <span className="text-[11px] text-[#1a73e8]">
                                                                            Collect {offer.pricing_data.wisata_point}{" "}
                                                                            points
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
            {/* <div id="DetailDialog" className="hidden"> */}
            {showDialog && (
                <DetailDialog roomDetail={roomDetail} roomDataId={roomDataId} setShowDialog={setShowDialog} />
            )}
            {/* </div> */}
        </Suspense>
    );
}
