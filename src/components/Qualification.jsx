import { myQualifications } from "../DB/qualification";

const Qualification = () => {
  return (
    <>
      {myQualifications.map((quali) => (
        <div key={quali.id} className="py-4 xl:flex-grow">
          <h2 className="font-sans text-xl text-my-white">
            {quali.course + " "}
            <span className="text-my-green font-mono">
              @ {" " + quali.institute}
            </span>
          </h2>
          <h3 className="text-my-lightest-slate"> {quali.date}</h3>
          <ul className="p-4 text-my-slate list-disc marker:text-my-green text-lg">
            {quali.info.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Qualification;
