"use client";

import useStore, { TypeContent } from "@/store";
import { useEffect } from "react";

export default function HotelDetailPhotosPage() {
    const { idHotel } = useStore();
    const { content, setContent } = useStore();

    useEffect(() => {
        if (!content) {
            fetchContent();
        }
    }, []);

    const fetchContent = async () => {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/property/content?id=${idHotel}&include=image&include=general_info&include=important_info`
        );
        const responseBody: TypeContent = await response.json();
        setContent(responseBody);
    };

    return (
        <>
            <div className="grid grid-cols-3 wide:px-1">
                {content &&
                    content[idHotel]?.image.map((image, index) => (
                        <div
                            key={index}
                            className="w-[calc((100vw)/3)] h-[calc((100vw)/3)] border-[1px] border-gray-200 wide:border-none wide:p-3 wide:w-[calc((100vw-8px)/3)] wide:h-[calc((100vw-8px)/3)]"
                        >
                            <img
                                src={image.url.lg}
                                alt={image.caption}
                                className="object-cover object-center w-full h-full"
                            />
                        </div>
                    ))}
            </div>
        </>
    );
}
