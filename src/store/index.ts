import { create } from "zustand";

export interface TypeHotelDetail {
    id: string;
    slug: string;
    type: string;
    name: string;
    name_suffix: string;
    country_code: string;
    address_line: string;
    latitude: number;
    longitude: number;
    catalog: {
        fax: string;
        city: string;
        brand: string;
        chain: string;
        phone: string;
        category: string;
        postal_code: string;
        star_rating: number;
        review_count: number;
        review_rating: number;
        hero_image_url: {
            lg: string;
            md: string;
            sm: string;
            th: string;
            ori: string;
        };
    };
}

export interface TypeContent {
    [key: string]: {
        image: TypeImage[];
        important_info: {
            checkin: {
                begin_time: string;
                end_time: string;
                instructions: string;
            };
            checkout: {
                time: string;
            };
            policies: {
                [key: string]: string;
            };
            fees: {
                optional: string;
            };
        };
        general_info: {
            descriptions: {
                location: string;
                dining: string;
                amenities: string;
            };
            spoken_languages: {
                [key: string]: {
                    id: string;
                    name: string;
                };
            };
        };
    };
}
interface TypeImage {
    url: { lg: string; md: string; sm: string; th: string; ori: string };
    caption: string;
    group: string;
}

interface StoreState {
    searchParams: URLSearchParams;
    setSearchParams: (data: URLSearchParams) => void;
    hotelDetail: TypeHotelDetail;
    setHotelDetail: (data: TypeHotelDetail) => void;
    idHotel: string;
    setIdHotel: (id: string) => void;
    content: TypeContent | null;
    setContent: (data: TypeContent | null) => void;
}

const useStore = create<StoreState>((set) => ({
    searchParams: new URLSearchParams(),
    setSearchParams: (data) => set(() => ({ searchParams: data })),
    hotelDetail: {} as TypeHotelDetail,
    setHotelDetail: (data) => set(() => ({ hotelDetail: data })),
    idHotel: "",
    setIdHotel: (id) => set(() => ({ idHotel: id })),
    content: null,
    setContent: (data) => set(() => ({ content: data })),
}));

export default useStore;
