import {
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import type { ITechnology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

interface ITechnologiesProps {
  selectedTechnologies: ITechnology[];
  setSelectedTechnologies: Dispatch<SetStateAction<ITechnology[]>>;
}

const Technologies = ({
  selectedTechnologies,
  setSelectedTechnologies,
}: ITechnologiesProps) => {
  const [technologies, setTechnologies] = useState<ITechnology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Explore the{" "}
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="mt-2 text-gray-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {loading ? (
        <div className="py-20 text-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:w-3/4 lg:grid-cols-3">
            {technologies.map((technology: ITechnology) => {
              return (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  selectedTechnologies={selectedTechnologies}
                  setSelectedTechnologies={setSelectedTechnologies}
                />
              );
            })}
          </div>

          <div className="w-full lg:w-1/4">
            <YourStack
              selectedTechnologies={selectedTechnologies}
              setSelectedTechnologies={setSelectedTechnologies}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Technologies;