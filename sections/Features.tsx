import Image from "next/image";

function FeautreRow() {
  return (
    <section
      id="features"
      className="min-h-screen max-w-full  px-6 py-6 pb-20 text-slate-100"
    >
      <div className="relative mx-auto mb-14 mt-12 flex h-36  items-center  bg-slate-900 bg-cover bg-center pb-3">
        <div className="absolute ml-3 h-[90%] w-[98%]  border-2 border-dashed border-green-500"></div>
        <h1 className=" w-full text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl    font-extrabold uppercase tracking-widest">
          Features we known for
        </h1>
      </div>
      <div className="mt-8 grid min-h-screen grid-cols-1 grid-rows-8  md:grid-cols-2 md:grid-rows-4 gap-y-10 sm:gap-y-20  px-4 md:px-20 text-black dark:text-inherit">
        <div className="order-1 flex w-full flex-col items-center justify-center   text-center  ">
          <h3 className="text-3xl sm:text-4xl font-extrabold capitalize text-green-500">
            Cloud Storage
          </h3>
          <h4 className="text-lg sm:text-2xl text-start font-extrabold capitalize text-green-500">
            Safely Store Your PDFs
          </h4>
          <p className="text-sm text-start sm:text-lg mx-auto mt-4 max-w-md font-medium leading-6">
            Effortlessly upload your PDF files and enjoy real-time access from
            anywhere. Smartly organize your PDFs into folders and categories for
            quick retrieval. Your documents are safeguarded with advanced
            security measures, and collaborative sharing is a breeze. Experience
            the future of file management with our user-friendly interface.
            Elevate your digital asset storage today!
          </p>
        </div>
        <div className="order-2 flex items-center justify-center rounded-full border-b-2 border-l-2 border-r-2 border-t-2  border-green-500 border-b-blue-500 border-l-red-600 border-r-yellow-400 duration-300 hover:scale-105 hover:border-b-4 hover:border-t-4">
          <Image
            height={96}
            width={96}
            className=" mx-auto my-auto h-[80%] w-[80%]"
            src="/assets/Computing.svg"
            alt="store"
          />
        </div>
        <div className="order-4 md:order-3 flex items-center justify-center rounded-full border-b-2 border-l-2 border-r-2 border-t-2  border-green-500 border-b-blue-500 border-l-red-600 border-r-yellow-400 duration-300 hover:scale-105 hover:border-b-4 hover:border-t-4">
          <Image
            height={96}
            width={96}
            className="  mx-auto my-auto h-[80%] w-[80%]"
            src="/assets/File-Bundle.svg"
            alt="inventory"
          />
        </div>
        <div className="order-3 md:order-4 flex flex-col items-center justify-center px-4 text-center   ">
          <h3 className="text-3xl sm:text-4xl font-extrabold capitalize text-green-500">
            PDF Viewer
          </h3>
          <h4 className="text-lg sm:text-2xl font-extrabold capitalize text-green-500">
            Effortless PDF Document Viewing
          </h4>
          <p className="text-sm sm:text-lg text-start mx-auto mt-4 max-w-md font-medium leading-6">
            Navigate through your PDF files effortlessly. Move through pages,
            chapters, and sections with a user-friendly interface.Enjoy a
            responsive design that adapts to various screen sizes, ensuring a
            seamless viewing experience on desktop, tablet, or mobile.Our PDF
            Viewer supports various PDF formats, ensuring compatibility with
            your documents.Experience a feature-rich PDF Viewer that enhances
            your reading and research.
          </p>
        </div>
        <div className="order-5  flex flex-col items-center justify-center px-4 text-center  ">
          <h3 className="text-3xl sm:text-4xl font-extrabold capitalize text-green-500">
            Interactive File Manager
          </h3>
          <h4 className="text-lg sm:text-2xl font-extrabold capitalize text-green-500">
            Efficient PDF File Management
          </h4>
          <p className="text-sm sm:text-lg text-start mx-auto mt-4 max-w-md font-medium leading-6">
            Our intuitive interface simplifies PDF file management. Effortlessly
            upload, organize, and edit your files.Keep your digital space
            clutter-free by deleting obsolete or unnecessary PDFs.Manage your
            PDFs with precision and ease. Our Interactive File Manager empowers
            you to edit, delete, and organize your documents efficiently.
            Simplify your digital workspace and enhance your file management
            capabilities.
          </p>
        </div>
        <div className="order-6 flex items-center justify-center rounded-full border-b-2 border-l-2 border-r-2 border-t-2  border-green-500 border-b-blue-500 border-l-red-600 border-r-yellow-400 duration-300 hover:scale-105 hover:border-b-4 hover:border-t-4">
          <Image
            height={96}
            width={96}
            className="  mx-auto my-auto h-[80%] w-[80%]"
            src="/assets/Dark-analytics.svg"
            alt="inventory"
          />
        </div>
        {/* customer */}
        <div className="order-8 md:order-7 flex items-center justify-center rounded-full border-b-2 border-l-2 border-r-2 border-t-2  border-green-500 border-b-blue-500 border-l-red-600 border-r-yellow-400 duration-300 hover:scale-105 hover:border-b-4 hover:border-t-4">
          <Image
            height={96}
            width={96}
            className="  mx-auto my-auto h-[80%] w-[80%]"
            src="/assets/Software-Developer.svg"
            alt="inventory"
          />
        </div>
        <div className="order-7 md:order-8  flex flex-col items-center justify-center px-4 text-center  ">
          <h3 className="text-3xl sm:text-4xl font-extrabold capitalize text-green-500">
            Best-in-Class PDF Editor
          </h3>
          <h4 className="text-lg sm:text-2xl font-extrabold capitalize text-green-500">
            Tailor Your PDFs with Precision
          </h4>
          <p className="text-sm sm:text-lg text-start mx-auto mt-4 max-w-md font-medium leading-6">
            Experience the ultimate PDF editing tool. Our Best-in-Class PDF
            Editor allows you to select specific pages, make changes, and create
            new PDF documents effortlessly.Choose specific pages within your PDF
            document for editing. No need to modify the entire file.Build new
            PDF documents by selecting and combining pages from existing
            files.Navigate through your PDFs efficiently with user-friendly
            tools and options.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeautreRow;
