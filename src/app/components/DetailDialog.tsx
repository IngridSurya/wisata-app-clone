import { useEffect, useRef, useState } from "react";
import { TypeOfferList } from "../stay/[slug]/page";
import useStore from "@/store";

interface TypeIDPropertyRoom {
    [key: string]: { room: { [key: string]: { amenities: { [key: string]: { name: string } } } } };
}

export default function DetailDialog({
    roomDetail,
    roomDataId,
    setShowDialog,
}: Readonly<{ roomDetail: TypeOfferList | null; roomDataId: string; setShowDialog: (value: boolean) => void }>) {
    const hasRunRef = useRef(false);
    const { idHotel } = useStore();
    const [roomAmenities, setRoomAmenities] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalImages = 4;

    useEffect(() => {
        if (!hasRunRef.current) {
            const nextButton = document.getElementById("next");
            const prevButton = document.getElementById("prev");
            if (nextButton) {
                nextButton.addEventListener("click", () => {
                    setCurrentIndex((prev) => (prev + 1) % totalImages);
                });
            }

            if (prevButton) {
                prevButton.addEventListener("click", () => {
                    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
                });
            }
            hasRunRef.current = true;
        }
    }, []);
    useEffect(() => {
        if (roomDataId) {
            fetchRoomAmenities();
        }
    }, [roomDataId]);

    const fetchRoomAmenities = async () => {
        try {
            const responseRoom: Response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/property/content?id=${idHotel}&include=room`
            );
            const responseBodyRoom: TypeIDPropertyRoom = await responseRoom.json();
            if (!responseRoom.ok) {
                console.log(responseRoom.status, responseBodyRoom.message, "<<<<<<<<<<<<<<<<<<<<<<");
            }

            const response: Response = await fetch(
                `https://project-exterior-technical-test-app.up.railway.app/amenities`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application-json", "User-Agent": "PostmanRuntime/7.42.0" },
                    body: JSON.stringify({
                        context: "room",
                        amenities: responseBodyRoom[idHotel].room[roomDataId].amenities,
                    }),
                    mode: "cors",
                }
            );
            const responseBody = await response.json();
            if (!response.ok) {
                console.log(response.status, responseBody.message, "<<<<<<<<<<<<<<<<<<<<<<");
            }
            const _roomAmenities = Object.values(responseBodyRoom[idHotel].room[roomDataId].amenities).map(
                (amenity) => amenity.name
            );
            setRoomAmenities(_roomAmenities);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        const carousel = document.getElementById("carousel");

        if (carousel) {
            console.log(currentIndex, "<<<<<<<<<<<<<<<<<<<<<<");
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }, [currentIndex]);

    return (
        <>
            {roomDetail && (
                <div className="fixed top-0 left-0 bg-transparent w-screen h-screen flex justify-center items-center z-30">
                    <div
                        onClick={() => setShowDialog(false)}
                        className="cursor-pointer absolute bg-black opacity-50 w-screen h-screen"
                    />
                    <div
                        id="detailsDialog"
                        className="absolute bg-white rounded-md xwide:left-6 xwide:right-6 wide:w-[480px] wide:h-[600px] xwide:w-auto xwide:max-w-[900px] xwide:h-[560px] 
                wide:grid wide:grid-rows-[50px_300px_250px] xwide:grid-cols-[auto_320px] xwide:grid-rows-[50px_auto]"
                    >
                        <div
                            onClick={() => setShowDialog(false)}
                            className="absolute top-[7px] right-2 h-9 w-9 flex items-center justify-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width={24}
                                height={24}
                                className="fill-blue-500"
                            >
                                <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path>
                            </svg>
                        </div>
                        <div
                            className="absolute bg-black
                wide:top-[50px] xwide:top-0 xwide:bottom-0 xwide:left-0 xwide:right-[320px] xwide:rounded-l-md"
                        >
                            <div className="relative flex w-full h-full max-w-lg mx-auto overflow-hidden">
                                <div
                                    className="flex items-center transition-transform duration-500 ease-in-out"
                                    id="carousel"
                                >
                                    <img
                                        src={roomDetail.room_images[0].size_sm}
                                        alt={roomDetail.room_images[0].caption}
                                        className="w-full flex-shrink-0"
                                    />
                                    <img
                                        src={roomDetail.room_images[1].size_sm}
                                        alt={roomDetail.room_images[1].caption}
                                        className="w-full flex-shrink-0"
                                    />
                                    <img
                                        src={roomDetail.room_images[2].size_sm}
                                        alt={roomDetail.room_images[2].caption}
                                        className="w-full flex-shrink-0"
                                    />
                                    <img
                                        src={roomDetail.room_images[3].size_sm}
                                        alt={roomDetail.room_images[3].caption}
                                        className="w-full flex-shrink-0"
                                    />
                                </div>

                                <button
                                    id="prev"
                                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full text-gray-700 shadow-lg hover:bg-gray-200"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={36}
                                        height={36}
                                        viewBox="0 0 24 24"
                                        role="img"
                                        aria-hidden="true"
                                        className="text-[36px] fill-white"
                                    >
                                        <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
                                    </svg>
                                </button>
                                <button
                                    id="next"
                                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full text-gray-700 shadow-lg hover:bg-gray-200"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={36}
                                        height={36}
                                        viewBox="0 0 24 24"
                                        role="img"
                                        aria-hidden="true"
                                        className="text-[36px] fill-white"
                                    >
                                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="px-6 py-3 border-[1px] border-b wide:row-span1 xwide:col-start-2 xwide:col-span-1 xwide:row-span-1 wide:rounded-t-md xwide:rounded-none xwide:rounded-tr-md">
                            Room Details
                        </div>
                        <div className="px-6 py-3 wide:row-span1 xwide:col-start-2 xwide:col-span-1 xwide:row-span-1 wide:rounded-t-md xwide:rounded-none xwide:rounded-br-md">
                            <p className="text-base font-medium">{roomDetail.room_name}</p>

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
                                        {roomDetail.room_bed_groups}
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
                                        {roomDetail.room_size_sqm} m<sup>2</sup>
                                    </span>
                                </span>
                            </div>

                            <div className="mt-4 mb-2 text-[15px] font-medium">Room Amenities</div>
                            <div className="grid grid-cols-2 gap-2">
                                {roomAmenities.map((amenity, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <span className="text-[14px] h-[14px] w-[14px]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                className="text-[14px] h-[14px] w-[14px]"
                                            >
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path>
                                            </svg>
                                        </span>
                                        <span className="text-[14px] font-sans font-normal">{amenity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
