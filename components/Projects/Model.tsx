interface ModelProps {
  model: boolean;
  modelHandler: () => void;
  imageSrc: string;
}

export default function Model({ model, modelHandler, imageSrc }: ModelProps) {
  return (
    <>
      {model && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-50 z-[40]"
          onClick={modelHandler}
        ></div>
      )}
      <div
        className={`${
          model ? "fixed" : "hidden"
        } top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[1200px] h-[600px] bg-white z-[5000000000000]`}
      >
        <img src={imageSrc} className=" h-full" alt="" />
      </div>
    </>
  );
}
