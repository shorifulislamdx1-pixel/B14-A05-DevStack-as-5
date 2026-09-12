import { toast } from "react-toastify";
import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../types/technology";

interface ITechnologyCardProps {
  technology: ITechnology;
  selectedTechnologies: ITechnology[];
  setSelectedTechnologies: Dispatch<SetStateAction<ITechnology[]>>;
}

const TechnologyCard = ({
  technology,
  selectedTechnologies,
  setSelectedTechnologies,
}: ITechnologyCardProps) => {
  const isAdded = selectedTechnologies.some(
    (item) => item.id === technology.id
  );

  const handleAddToStack = () => {
    if (isAdded) {
      toast.warning("This technology is already added!");
      return;
    }

    setSelectedTechnologies([...selectedTechnologies, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  
    return (
<div
  className={`rounded-xl border-2 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
    isAdded ? "border-red-500" : "border-gray-200"
  }`}
>      <div className="flex justify-between items-start">
        <img
          src={technology.icon}
          alt={technology.name}
          className="w-8 h-8"
        />

        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs text-pink-500">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-bold">
        {technology.name}
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        {technology.description}
      </p>

      <div className="mt-5 flex justify-between text-xs">
        <span className="rounded bg-gray-100 px-2 py-1">
          {technology.category}
        </span>

        <span className="text-gray-500">
          {technology.difficulty}
        </span>

        <span>
          ⭐ {technology.rating}
        </span>
      </div>

      <button
      onClick={handleAddToStack}
      disabled={isAdded}
      className={`btn mt-5 w-full rounded-xl border-2 border-black ${
      isAdded
      ? "bg-green-100 text-green-600"
      : "bg-gray-900 text-white"
  }`}
>
  {isAdded ? "✓ Added to Stack" : "Add to Stack"}
</button>
       
    </div>

   
  );
};

export default TechnologyCard;