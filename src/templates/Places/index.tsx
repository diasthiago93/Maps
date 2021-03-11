type ImageProps = {
  url: string;
  height: number;
  width: number;
};

export type PlaceTemplatePropos = {
  place: {
    slug: string;
    name: string;
    descripiton: {
      html: string;
    };
    gallery: ImageProps[];
  };
};

export default function PlacesTemplate({ place }: PlaceTemplatePropos) {
  return (
    <>
      <h1>{place.name}</h1>

      <div dangerouslySetInnerHTML={{ __html: place.descripiton.html }}></div>

      {place.gallery.map((image, index) => {
        <img key={`photo-${index}`} src={image.url} alt={place.name} />;
      })}
    </>
  );
}
