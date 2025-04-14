import React from "react";

const BoxGallery = () => {
  const boxes = [
    {
      id: 1,
      title: "Modern CV",
      description: "A clean and modern CV template with sleek design.",
      imageUrl: "/Resumes/resume1.png",
      fileUrl: "/Resumes/resume1.docx",
    },
    {
      id: 2,
      title: "Professional CV",
      description: "Best for job seekers in corporate fields.",
      imageUrl: "/Resumes/resume2.png",
      fileUrl: "/resumes//resume2.docx",
    },
    {
      id: 3,
      title: "Creative CV",
      description: "Great for designers and creatives to showcase work.",
      imageUrl: "/Resumes/resume3.png",
      fileUrl: "/resumes//resume3.docx",
    },
    {
        id: 4,
        title: "Modern CV",
        description: "A clean and modern CV template with sleek design.",
        imageUrl:"/Resumes/resume4.png",
        fileUrl: "/resumes/resume4.docx",
      },
      {
        id: 5,
        title: "Modern CV",
        description: "A clean and modern CV template with sleek design.",
        imageUrl:"/Resumes/resume5.png",
        fileUrl: "/resumes/resume5.docx",
      },
      {
        id: 6,
        title: "Modern CV",
        description: "A clean and modern CV template with sleek design.",
        imageUrl: "/Resumes/resume6.png",
        fileUrl: "/resumes/resume6.docx",
      },
      {
        id: 7,
        title: "Modern CV",
        description: "A clean and modern CV template with sleek design.",
        imageUrl:"/Resumes/resume7.png",
        fileUrl: "/resumes/resume7.docx",
      },
      {
        id: 8,
        title: "Modern CV",
        description: "A clean and modern CV template with sleek design.",
        imageUrl:"/Resumes/resume8.png",
        fileUrl: "/resumes/resume8.docx",
      },
      {
        id: 9,
        title: "Modern CV",
        description: "A clean and modern CV template with sleek design.",
        imageUrl: "/Resumes/resume9.png",
        fileUrl: "/resumes/resume9.docx",
      },
      {
        id: 10,
        title: "Modern CV",
        description: "A clean and modern CV template with sleek design.",
        imageUrl: "/Resumes/resume10.png",
        fileUrl: "/resumes/resume10.docx",
      },
      {
        id: 11,
        title: "Modern CV",
        description: "A clean and modern CV template with sleek design.",
        imageUrl: "/Resumes/resume8.png",
        fileUrl: "/resumes/resume8.docx",
      },
      {
        id: 12,
        title: "Modern CV",
        description: "A clean and modern CV template with sleek design.",
        imageUrl: "/Resumes/resume2.png",
        fileUrl: "/resumes/resume2.docx",
      },
      {
        id: 13,
        title: "Modern CV",
        description: "A clean and modern CV template with sleek design.",
        imageUrl: "/Resumes/resume1.png",
        fileUrl: "/resumes/resume1.docx",
      },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Resume Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {boxes.map((box) => (
          <div
            key={box.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition flex flex-col justify-between aspect-square overflow-hidden"
          >
            <img
              src={box.imageUrl}
              alt={box.title}
              className="h-2/3 w-full object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-1/3">
              <div>
                <h2 className="text-lg font-semibold">{box.title}</h2>
                <p className="text-sm text-gray-600">{box.description}</p>
              </div>
              <a
                href={box.fileUrl}
                download
                className="group mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex justify-center items-center gap-2 transition-all"
              >
                Download
                <span className="transform group-hover:translate-x-1 transition-transform duration-200">⬇️</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxGallery;


