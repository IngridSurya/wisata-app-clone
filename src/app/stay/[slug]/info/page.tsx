"use client";

import useStore, { TypeContent } from "@/store";
import { useEffect } from "react";

const fetchContent = async (idHotel: string, setContent: (content: TypeContent) => void) => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/property/content?id=${idHotel}&include=image&include=general_info&include=important_info`
    );
    const responseBody: TypeContent = await response.json();
    setContent(responseBody);
};

export default function HotelDetailInfoPage() {
    const { idHotel, content, setContent } = useStore();

    useEffect(() => {
        if (!content) {
            fetchContent(idHotel, setContent);
        }
    }, [content, idHotel, setContent]);

    return (
        <div className="flex flex-col px-4 pt-8">
            {content && content[idHotel] && (
                <>
                    <div className="font-medium wide:text-[20px]">About the property</div>
                    <div className="wide:my-2 text-[15px]">
                        <p className="font-sans">{content[idHotel]?.general_info.descriptions.location}</p>
                        <p className="font-sans">{content[idHotel]?.general_info.descriptions.dining}</p>
                        <p className="font-sans">{content[idHotel]?.general_info.descriptions.amenities}</p>
                        <div className="xwide:text-[16px] font-medium mb-2 pt-4">Languages</div>
                        <p className="font-sans">
                            {Object.keys(content[idHotel]?.general_info.spoken_languages)
                                .map((keylanguage) => {
                                    const lang = content[idHotel]?.general_info.spoken_languages[keylanguage];
                                    return lang.name;
                                })
                                .join(", ")}
                            .
                        </p>
                    </div>
                    <div className="pt-12 font-medium text-[18px] wide:text-[20px]">Policies</div>
                    <div className="pt-4 text-[15px]">
                        <div className="flex gap-6">
                            <div>
                                <p className="xwide:text-[16px] font-medium">Check-in</p>
                                <p className="font-sans">{content[idHotel]?.important_info.checkin.begin_time}</p>
                            </div>
                            <div>
                                <p className="xwide:text-[16px] font-medium">Check-out</p>
                                <p className="font-sans"> {content[idHotel]?.important_info.checkout.time}</p>
                            </div>
                        </div>

                        <div className="xwide:text-[16px] font-medium mt-4">Additional check-in information</div>
                        <div
                            className="wide:pt-2 font-sans"
                            dangerouslySetInnerHTML={{ __html: content[idHotel]?.important_info.checkin.instructions }}
                        />

                        <div className="xwide:text-[16px] font-medium mt-4">Others</div>
                        <div
                            className="wide:pt-2 font-sans"
                            dangerouslySetInnerHTML={{
                                __html: content[idHotel]?.important_info.policies.know_before_you_go,
                            }}
                        />
                        <div className="pt-12 font-medium wide:text-[20px]">Important information</div>
                        <div className="xwide:text-[16px] font-medium mt-4">Optional charges</div>
                        <div
                            className="wide:pt-2 font-sans"
                            dangerouslySetInnerHTML={{
                                __html: content[idHotel]?.important_info.fees.optional,
                            }}
                        />
                    </div>
                </>
            )}
        </div>
    );
}
