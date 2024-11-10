export default function GuestsRoomsCard() {
    return (
        <>
            <div className="z-[15] rounded-lg px-3 py-3">
                <div className="flex justify-between items-center">
                    <button type="button">
                        <span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M19,13H5V11H19V13Z"></path>
                                </svg>
                            </span>
                        </span>
                    </button>
                    <div className="flex flex-col items-center">
                        <div>Double Room</div>
                        <div>
                            <span className="text-xl font-medium"> 2 </span>
                            <span className="text-sm"> guests/room </span>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex items-center cursor-pointer;">
                                <span className="text-[12px] h-[12px] w-[12px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        className="text-[12px] h-[12px] w-[12px]"
                                    >
                                        <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"></path>
                                    </svg>
                                </span>
                                <span className="inline-block text-button mx-auto accent--text ml-1">
                                    What about children?
                                </span>
                            </div>
                        </div>
                    </div>
                    <button type="button">
                        <span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path>
                                </svg>
                            </span>
                        </span>
                    </button>
                </div>
                <div className="py-3">
                    <hr role="separator" className="v-divider " />
                </div>
                <div className="py-3 flex justify-between items-center">
                    <button type="button">
                        <span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M19,13H5V11H19V13Z"></path>
                                </svg>
                            </span>
                        </span>
                    </button>
                    <div>
                        <span className="text-xl font-medium">1 </span> <span> Room </span>
                    </div>
                    <button type="button">
                        <span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path>
                                </svg>
                            </span>
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
}
