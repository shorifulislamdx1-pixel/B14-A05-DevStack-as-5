import { toast } from "react-toastify";
import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../types/technology";

interface IYourStackProps {
  selectedTechnologies: ITechnology[];
  setSelectedTechnologies: Dispatch<SetStateAction<ITechnology[]>>;
}

const YourStack = ({
  selectedTechnologies,
  setSelectedTechnologies,
}: IYourStackProps) => {
  const handleRemove = (id: number) => {
    const remainingTechnologies = selectedTechnologies.filter(
      (technology) => technology.id !== id
    );

    setSelectedTechnologies(remainingTechnologies);

    toast.info("Technology removed from your stack!");
  };

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);

    toast.error("All technologies removed!");
  };

  return (
    <div className="rounded-xl border border-gray-200 p-5">
      <div>
        <h3 className="text-lg font-bold">
          Your Stack
        </h3>

        <p className="mt-1 text-sm text-gray-400">
          {selectedTechnologies.length} Technology Selected
        </p>
      </div>

      {selectedTechnologies.length === 0 ? (
        <div className="mt-8 text-center text-sm text-gray-400">
          No technologies added yet.
        </div>
      ) : (
        <div className="mt-6 space-y-3">
          {selectedTechnologies.map((technology: ITechnology) => {
            return (
              <div
                key={technology.id}
                className="flex items-center justify-between rounded-lg border border-gray-100 p-3"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="w-8 h-8"
                  />

                  <div>
                    <h4 className="text-sm font-semibold">
                      {technology.name}
                    </h4>

                    <p className="text-xs text-gray-400">
                      {technology.category}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleRemove(technology.id)}
                  className="text-lg text-gray-400 hover:text-red-500"
                >
                  ×
                </button>
              </div>
            );
          })}

          <button
            onClick={handleRemoveAll}
            className="mt-3 w-full rounded-lg bg-red-50 py-3 text-sm font-medium text-red-600 hover:bg-red-100"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default YourStack;