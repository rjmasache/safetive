import TaleButton from "./TaleButton.jsx";
import { familiarTaleImages } from "../assets/gallery.js";
import FamiliarTaleSelection from "./FamiliarTaleSelection.jsx";
import { Link } from "react-router-dom";

export default function FamiliarTaleParts({
    image,
    onPreviousClick,
    onNextClick,
}) {
    const currentContent = familiarTaleImages[image];

    return (
        <>
            {image === 3 ? (
                <FamiliarTaleSelection
                    image={image}
                    onPreviousClick={onPreviousClick}
                    onNextClick={onNextClick}
                />
            ) : (
                <div className="flex min-h-screen w-full flex-col bg-character">
                    <section className="flex w-full flex-col items-center justify-center">
                        <div className="flex w-full flex-col items-center justify-center">
                            <p className="p-2 font-comic text-base font-black sm:text-2xl">
                                {currentContent.title}
                            </p>
                            <p className="w-3/4 p-2 text-center font-comic text-base sm:text-xl">
                                {currentContent.text}
                            </p>
                        </div>
                        <div className="relative w-full sm:w-3/4">
                            <img
                                src={currentContent.src}
                                alt={currentContent.alt}
                                className="w-full"
                            />
                            <div className="absolute bottom-0 left-0 m-3 sm:top-0 sm:m-10">
                                {image === 0 ? (
                                    <Link to={`/characters`}>
                                        <TaleButton
                                            text="Anterior"
                                            classNameButton="rounded-2xl bg-safetive px-2 py-3 font-comic text-sm sm:text-lg text-link sm:px-14"
                                        />
                                    </Link>
                                ) : (
                                    <TaleButton
                                        text="Anterior"
                                        onClick={onPreviousClick}
                                        classNameButton="rounded-2xl bg-safetive px-2 py-3 font-comic text-link sm:px-14 text-sm sm:text-lg"
                                    />
                                )}
                            </div>
                            <div className="absolute bottom-0 right-0 m-3 sm:top-0 sm:m-10">
                                <TaleButton
                                    text="Siguiente"
                                    onClick={onNextClick}
                                    classNameButton="rounded-2xl bg-safetive px-2 py-3 font-comic text-link sm:px-14 text-sm sm:text-lg"
                                />
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </>
    );
}