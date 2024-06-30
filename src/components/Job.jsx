import { myJobs } from "../DB/jobs.js";

const Job = () => {
  return (
    <>
      {myJobs.map((job) => (
        <div
          key={job.id}
          className="cursor-default hover:bg-slate-200 hover:bg-opacity-5 py-8 px-4 hover:shadow-inner rounded-lg"
        >
          <div className="text-nowrap text-my-lightest-slate text-sm">
            {job.date}
          </div>
          <div className="">
            <h2 className="text-my-white text-2xl">
              {job.title}{" "}
              <span className="text-my-green">@ {" " + job.org} </span>
            </h2>
            <div>
              <p className="text-my-light-slate my-4">{job.description}</p>
              <ul className="flex flex-wrap text-my-white">
                {job.skills.map((skill) => (
                  <li
                    key={skill}
                    className="border border-my-green/15 px-3 py-1 rounded-full cursor-default bg-my-green bg-opacity-15 text-my-green hover:bg-opacity-60 mr-2 my-2"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Job;
