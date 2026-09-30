import type { Photo } from "../data/photos"

type PhotoGridProps = {
  photos: Photo[]
  className?: string
}

export function PhotoGrid({ photos, className = "" }: PhotoGridProps) {
  return (
    <div className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {photos.map((photo) => (
        <figure
          key={photo.src}
          className="overflow-hidden rounded-2xl border border-line bg-paper"
        >
          <img
            src={photo.src}
            alt={photo.alt}
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
          />
          <figcaption className="px-4 py-3 text-sm text-ink-2">{photo.caption}</figcaption>
        </figure>
      ))}
    </div>
  )
}
