import WorkItem from "./WorkItem";

const data = [
  {
    year: 2021,
    title: "Software Engineer",
    duration: "till now",
    details:
      "Full stack programmer / Analyst. Tech stack: Javascript, Typescript, Node.js, React, Java, #C, SQL, NoSQL",
  },
  {
    year: 2016,
    title: "e-Shop administrator, manager",
    duration: "5 years",
    details:
      "Administration of e-shops, processing of orders (supplier’s and wholesale customer‘s), handling of complaints, consulting, communication with customers, registration of raw materials for the production of beeswax foundations, organization in the unloading and storage of goods from suppliers, translations and creation of manuals for beekeeping equipment, providing other services necessary for the operation of the company.",
  },
  {
    year: 2006,
    title: "Real Estate Agent",
    duration: "10 years",
    details:
      "Mediation and sale of real estates, primary focused on foreign clients, arranging of formalities and other services, arranging of reconstruction of real estates.",
  },
  {
    year: 2003,
    title: "Full stack programmer",
    duration: "3 years",
    details:
      "Open source project. Tech stack: Java/J2EE, Javascript, HTML, CSS, RDBs (MS SQL, IBM DB2, Oracle, MySQL, PostgreSQL, SAP DB, Sybase, MaxDB)",
  },
  {
    year: 2002,
    title: "BE/SQL programmer",
    duration: "1 year",
    details:
      "B2B Online Auction System - green field project. Tech stack: PostgreSQL, plpg/sql, jsp, java beans",
  },
  {
    year: 2000,
    title: "Fullstack programmer",
    duration: "2 years",
    details:
      "Tech stack: Java/JSP, Javascript, RDBs (IBM DB2, MySQL), HTML, CSS",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-10">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] pb-5">
        Work
      </h1>
      {data.map((item, idx) => (
        <WorkItem key={idx} item={item} />
      ))}
    </div>
  );
};

export default Work;
