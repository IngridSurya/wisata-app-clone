import { ReactNode, useEffect, useState } from "react";
import { TypeHotelDetail } from "@/store";

interface HotelHeaderProps {
    hotelDetail: TypeHotelDetail;
}

export default function HotelHeader({ hotelDetail }: HotelHeaderProps) {
    const [starIcons, setStarIcons] = useState<ReactNode[]>([]);
    const [rating, setRating] = useState({ value: "", color: "" });

    useEffect(() => {
        const stars: ReactNode[] = [];
        for (let i = 0; i < (hotelDetail?.catalog?.star_rating ?? 0); i++) {
            stars.push(
                <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    role="img"
                    aria-hidden="true"
                    className="text-[18px] h-[18px] w-[18px]"
                >
                    <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
                </svg>
            );
        }
        setStarIcons(stars);
        if (hotelDetail?.catalog?.review_rating !== undefined) {
            setProgress(hotelDetail?.catalog.review_rating);
        }
        if (hotelDetail?.catalog?.review_rating > 90) {
            setRating({ value: "Excellent", color: "#a21cb4" });
        } else if (hotelDetail?.catalog?.review_rating > 75) {
            setRating({ value: "Good", color: "#238637" });
        } else if (hotelDetail?.catalog?.review_rating >= 60) {
            setRating({ value: "Average", color: "#ec7211" });
        } else {
            setRating({ value: "Poor", color: "#757575" });
        }
    }, [hotelDetail]);

    function setProgress(percentage: number) {
        // Calculate the circumference of the circle
        const circle = document.getElementById("progress-bar");
        if (circle) {
            // Max circumference based on the circle radius
            const circumference = 2 * Math.PI * 20;

            // Adjust stroke-dasharray for progress
            const offset = circumference - (percentage / 100) * circumference;
            circle.style.strokeDasharray = `${circumference} ${circumference}`;
            circle.style.strokeDashoffset = offset.toString();
        }
    }

    return (
        <div className="px-4 wide:px-8 py-3">
            <div className="wide:hidden flex pb-3 gap-1">
                <h1 className="text-xl font-medium">{hotelDetail?.name}</h1>
                <div className="flex items-center fill-orange-400">{starIcons}</div>
            </div>
            <div className="flex py-3 gap-1 wide:gap-7">
                <div className="min-w-[91px] wide:min-w-[168px] flex justify-center">
                    <img
                        src={hotelDetail?.catalog?.hero_image_url.md}
                        className="size-[91px] wide:size-[168px] rounded-full object-cover"
                    />
                </div>
                <div className="pl-3 flex flex-col gap-1">
                    <div className="hidden wide:flex gap-1">
                        <h1 className="text-xl font-medium">{hotelDetail?.name}</h1>
                        <div className="flex items-center fill-orange-400">{starIcons}</div>
                    </div>
                    <p className="text-sm text-gray-500">{hotelDetail?.catalog?.category}</p>
                    <p className="text-sm">
                        {hotelDetail?.address_line}, {hotelDetail?.name_suffix} {hotelDetail?.catalog?.postal_code}
                    </p>
                    <div className="py-2 flex gap-2 items-center">
                        <div id="progress-container" className="w-25 h-25">
                            <svg
                                className="w-[34px] h-[34px]"
                                viewBox="22.295081967213115 22.295081967213115 44.59016393442623 44.59016393442623"
                            >
                                <circle
                                    cx="44.59016393442623"
                                    cy="44.59016393442623"
                                    r="20"
                                    fill="none"
                                    stroke="#e6e6e6"
                                    strokeWidth="4"
                                ></circle>

                                <circle
                                    id="progress-bar"
                                    cx="44.59016393442623"
                                    cy="44.59016393442623"
                                    r="20"
                                    fill="none"
                                    stroke={rating.color}
                                    strokeWidth="4"
                                    strokeDasharray="100, 100"
                                    transform="rotate(-90 44.59016393442623 44.59016393442623)"
                                ></circle>

                                <text
                                    x="44.59016393442623"
                                    y="46"
                                    fill={rating.color}
                                    className="text-xl font-semibold"
                                    textAnchor="middle"
                                    alignmentBaseline="middle"
                                    id="progress-text"
                                >
                                    {hotelDetail?.catalog?.review_rating ?? 0}
                                </text>
                            </svg>
                        </div>
                        <span className="text-sm">{rating.value} ·</span>
                        <span className="text-sm">{hotelDetail?.catalog?.review_count} reviews</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
