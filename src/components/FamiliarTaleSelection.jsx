import TaleButton from "./TaleButton.jsx";
import { familiarTaleImages } from "../assets/gallery.js";

export default function FamiliarTaleSelection({
    image,
    onPreviousClick,
    onNextClick,
}) {
    const currentContent = familiarTaleImages[image];

    return (
        <div className="flex min-h-screen w-full flex-col bg-character">
            <section className="flex w-full flex-col items-center justify-center">
                <div className="flex w-full flex-col items-center justify-center">
                    <p className="p-2 font-comic text-base font-black sm:text-xl">
                        {currentContent.title}
                    </p>
                    <p className="w-3/4 p-2 text-center font-comic text-base sm:text-xl">
                        {currentContent.text}
                    </p>
                </div>
                {/* Images */}
                <div className="relative flex w-full flex-col justify-evenly sm:flex-row">
                    <div className="relative flex w-full justify-center sm:w-1/2">
                        <div className="absolute left-0 top-0 ml-12 mt-2 w-full sm:ml-24">
                            <TaleButton
                                text="Anterior"
                                onClick={onPreviousClick}
                                classNameButton="rounded-2xl px-2 py-2 bg-safetive font-comic text-link text-sm sm:text-xl"
                            />
                        </div>
                        <img
                            src={currentContent.src}
                            alt={currentContent.alt}
                            className="w-4/5"
                        />
                        <div className="absolute bottom-0 m-3 flex w-3/4 justify-center">
                            <TaleButton
                                text="Mamá y papá preguntaron: ¿Estás bien?"
                                onClick={onNextClick}
                                classNameButton="rounded-2xl px-2 py-2 bg-safetive font-comic text-link text-xs sm:text-xl"
                            />
                        </div>
                    </div>
                    <div className="relative flex w-full justify-center sm:w-1/2">
                        <img
                            src={currentContent.otherSrc}
                            alt={currentContent.alt}
                            className="w-4/5"
                        />
                        <div className="absolute bottom-0 m-3 flex w-3/4 justify-center">
                            <TaleButton
                                text="Mamá y papá se acercaron a él enojados"
                                onClick={onNextClick}
                                classNameButton="rounded-2xl px-2 py-2 bg-safetive font-comic text-link text-xs sm:text-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}