export const toPriceFormat = (arg: number): string => {
    // if (!arg) {
    //     return "Rp. 0";
    // }
    // return new Intl.NumberFormat("id-ID", {
    //     style: "currency",
    //     currency: "IDR",
    // }).format(arg);
    return new Intl.NumberFormat().format(arg);
};
