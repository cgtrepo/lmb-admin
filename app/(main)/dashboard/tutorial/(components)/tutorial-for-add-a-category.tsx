import MediaCard from "./media-card";

type Props = {
  video: string;
  images: string[];
};

export default function TutorialForAddCategory({ video, images }: Props) {
  return (
    <>
      <div className="flex flex-col sm:flex-row  w-2/3 gap-4">
        <div className="h-65 w-full">
          <MediaCard type="video" src={video} />
        </div>

        <div className="flex flex-col h-65 gap-4">
          <MediaCard type="image" src={images[0]} className="h-1/2" />
          <MediaCard type="image" src={images[1]} className="h-1/2" />
        </div>
      </div>
    </>
  );
}
