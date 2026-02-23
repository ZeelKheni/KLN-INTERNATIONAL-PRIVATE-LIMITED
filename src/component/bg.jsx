const BackgroundImage = ({ bgImage }) => {
    return (
        <div className="fixed inset-0 flex justify-center items-center">
            <div className="absolute inset-0 w-full h-full">
                <img
                    src={bgImage}
                    alt="Garlic Powder"
                    className="w-full h-full object-cover opacity-[7%]"
                />
            </div>
        </div>
    );
};

export default BackgroundImage;