"use client";

import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const hunksGallery = [
    {
      src: "/images/mason/Hunk_rocks.jpg",
      alt: "Nate from College Hunks",
    },
  ];

  const loungeGallery = [
    {
      src: "/images/mason/lounge_measure.png",
      alt: "CAM Lounge Measurements",
    },
    {
      src: "/images/mason/lounge_items.png",
      alt: "CAM Lounge Items",
    },
  ];

  // State for each gallery
  const [hunksViewerOpen, setHunksViewerOpen] = useState(false);
  const [loungeViewerOpen, setLoungeViewerOpen] = useState(false);

  const [hunksActive, setHunksActive] = useState(0);
  const [loungeActive, setLoungeActive] = useState(0);

  return (
    <div style={{ height: "auto" }}>
      <h1 className="text-4xl">Mason Colacicco</h1>
      <p>
        I am Mason Colacicco, a computer science major at{" "}
        <Link href="https://www.unwsp.edu/" target="_blank">
          <span className="text-blue-400 underline hover:text-blue-300">
            University of Northwestern - St. Paul
          </span>
        </Link>{" "}
        (UNW). I am a first year at UNW, but a junior by credit. I plan to
        graduate Northwestern in the fall of 2026. I am also the TA for computer
        science professor Dr. James Smith. I have always had an interest in
        computers since I was young, starting with the dream of making my own
        videogames. I grew out of this dream, but I always had a talent for math
        and problem solving to keep computer science on my mind for college.
      </p>
      <p className="pt-3 pb-4">
        Outside of computer science I love to watch sports, sing in choir, play
        videogames, teach elementary lessons at church, and spend time with
        friends and family.
      </p>
      <div className="project-flex">
        <div className="hunks">
          <h2 className="pb-5 text-3xl">College Hunks App</h2>
          <h3 className="pb-2 text-2xl">Problem</h3>
          <p>
            I have worked at College Hunks Hauling Junk and Moving since the
            summer of 2024. This project started that fall of 2024 for Systems
            Analysis and Design class. I was working with a teammate, Andrew, to
            come up with a solution to a problem in the company. The problem
            presented by College Hunks was that their data input in Excel took
            around 14 hours every 2 weeks. They use Excel for everything to do
            with data. In the same excel spreadsheet there are around 9 tabs
            that store data from from years and years ago to tabs that require a
            complex input of data from two sources to return an output for
            spreadsheet data storage. They wanted to stay with Excel, so my
            teammate and I thought of a solution to remove one of the uses of
            Excel in the steps involving complex data input for calculation.
          </p>
          <br></br>
          <img
            src={hunksGallery[0].src}
            alt={hunksGallery[0].alt}
            onClick={() => {
              setHunksActive(0);
              setHunksViewerOpen(true);
            }}
            className="hunk-image cursor-pointer rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02]"
            width={700}
          />
          <p className="pt-1 text-xs">
            This is an image of Nate from College Hunks. He is a Move Captain
            that Mason has worked with occasionally.
          </p>
          <br></br>
          <h3 className="text-2xl">Solution</h3>
          <p>The solution involves </p>
        </div>
        <div className="other">
          <h2 className="pb-3 text-3xl">CAM Lounge Updates</h2>
          <h3 className="pb-2 text-2xl">Problem</h3>
          <p>
            The Computing, Analytics, and Mathematics (CAM) Lounge has been a
            space for students to sit around and connect with each other. It has
            minimal functionality or correlation with the computer science
            department when viewed from an outsider. Dr. Smith plans to update
            the room to represent the student projects completed and being
            worked on to show off the hard work of the students. He asked me to
            assist in this room upgrade through measuring the room to create a
            diagram of it.
          </p>
          <br></br>
          <div className="lounge-pictures">
            {loungeGallery.map((img, idx) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                onClick={() => {
                  setLoungeActive(idx);
                  setLoungeViewerOpen(true);
                }}
                className="hunk-image cursor-pointer rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02]"
                width={260}
              />
            ))}
          </div>
        </div>
      </div>
      {hunksViewerOpen && (
        <div
          onClick={() => setHunksViewerOpen(false)}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-black/80 p-4 backdrop-blur-sm"
        >
          <img
            src={hunksGallery[hunksActive].src}
            alt={hunksGallery[hunksActive].alt}
            className="max-h-[80vh] max-w-[90vw] rounded-2xl shadow-lg shadow-white/20"
          />
        </div>
      )}
      {loungeViewerOpen && (
        <div
          onClick={() => setLoungeViewerOpen(false)}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-black/80 p-4 backdrop-blur-sm"
        >
          <img
            src={loungeGallery[loungeActive].src}
            alt={loungeGallery[loungeActive].alt}
            className="max-h-[80vh] max-w-[90vw] rounded-2xl shadow-lg shadow-white/20"
          />

          <div
            onClick={(e) => e.stopPropagation()}
            className="flex max-w-[90vw] flex-wrap justify-center gap-4 overflow-auto"
          >
            {loungeGallery.map((img, idx) => (
              <img
                key={img.src + idx}
                src={img.src}
                alt={img.alt}
                onClick={() => setLoungeActive(idx)}
                className={`h-20 w-28 cursor-pointer rounded-lg object-cover transition ${
                  idx === loungeActive
                    ? "ring-4 ring-white"
                    : "opacity-60 hover:opacity-100"
                }`}
              />
            ))}
          </div>
        </div>
      )}
      <style jsx>
        {`
          .project-flex {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 1150px;
          }
          .hunks,
          .other {
            max-width: 47%;
            min-width: 400px;
          }
          .lounge-pictures {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 100%;
          }
          @media (max-width: 768px) {
            .project-flex {
              flex: 1;
              min-width: 400px;
              max-width: 768px;
            }
            .hunks,
            .other {
              flex: 1;
              max-width: 100%;
              padding-left: 10px;
              padding-right: 10px;
            }
          }
        `}
      </style>
    </div>
  );
}
