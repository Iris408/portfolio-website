export default function ImageGallery({ images = [] }) {
  if (images.length === 0) {
    return null;
  }

  const normalisedImages = images.map((image) =>
    typeof image === "string"
      ? {
          src: image,
          alt: "",
          caption: "",
        }
      : image,
  );

  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2 lg:gap-8">
      {normalisedImages.map((image, index) => (
        <figure
          key={`${image.src}-${index}`}
          className={
            index === 0 && normalisedImages.length > 2
              ? "lg:col-span-2"
              : ""
          }
        >
          <a
            href={image.src}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-0 items-center justify-center overflow-hidden border border-[#D8D4C8] bg-[#E9E8E1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#526A57]"
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              decoding="async"
              className="max-h-[22rem] w-full object-contain object-top transition duration-500 group-hover:scale-[1.01] md:max-h-[18rem] lg:max-h-[26rem]"
            />
          </a>

          {image.caption && (
            <figcaption className="mt-3 text-sm leading-relaxed text-[#69706B]">
              {image.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}