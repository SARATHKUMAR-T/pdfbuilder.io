import inventory from '../../Assets/startup.svg';
import feedback from '../../Assets/Feedback.svg';
import analytics from '../../Assets/Dark-analytics.svg';
import purchase from '../../Assets/purchase.svg';

function FeautreRow() {
  return (
    <section
      id="features"
      className="min-h-screen max-w-full bg-slate-200 px-6 py-6 pb-20 text-slate-100"
    >
      <div className="relative mx-auto mb-14 mt-12 flex h-36  items-center  bg-slate-900 bg-cover bg-center pb-3">
        <div className="absolute ml-3 h-[90%] w-[98%]  border-2 border-dashed border-green-500"></div>
        <h1 className=" w-full text-center text-6xl    font-extrabold uppercase tracking-widest">
          Features we known for
        </h1>
      </div>
      <div className="mt-8 grid min-h-screen grid-cols-1  md:grid-cols-2 md:grid-rows-4 gap-y-20  px-20 text-black">
        <div className="flex flex-col items-center justify-center px-4  text-center  ">
          <h3 className="text-4xl font-extrabold capitalize text-green-500">
            Items Management
          </h3>
          <h4 className="text-2xl font-extrabold capitalize text-green-500">
            Simplify Inventory Control
          </h4>
          <p className="text-md mx-auto mt-4 max-w-md font-medium leading-6">
            Effortlessly manage your inventory with our intuitive Items
            Management feature. Input items with quantities and prices, and stay
            updated in real-time. Make adjustments, delete obsolete items, and
            ensure accurate records. Gain data-driven insights, enhance
            accuracy, and secure your inventory with user permissions.
            Seamlessly integrated for a streamlined experience. Upgrade your
            inventory management today for optimized efficiency.
          </p>
        </div>
        <div className=" flex items-center justify-center rounded-full border-b-2 border-l-2 border-r-2 border-t-2  border-green-500 border-b-blue-500 border-l-red-600 border-r-yellow-400 duration-300 hover:scale-105 hover:border-b-4 hover:border-t-4">
          <img
            className="  mx-auto my-auto h-[80%] w-[80%]"
            src={analytics}
            alt="inventory"
          />
        </div>
        <div className=" flex items-center justify-center rounded-full border-b-2 border-l-2 border-r-2 border-t-2  border-green-500 border-b-blue-500 border-l-red-600 border-r-yellow-400 duration-300 hover:scale-105 hover:border-b-4 hover:border-t-4">
          <img
            className="  mx-auto my-auto h-[80%] w-[80%]"
            src={inventory}
            alt="inventory"
          />
        </div>
        <div className=" flex flex-col items-center justify-center px-4 text-center   ">
          <h3 className="text-4xl font-extrabold capitalize text-green-500">
            Sales Tracking Made Easy
          </h3>
          <h4 className="text-2xl font-extrabold capitalize text-green-500">
            Optimize Your Selling Process
          </h4>
          <p className="text-md mx-auto mt-4 max-w-md font-medium leading-6">
            Elevate your sales management with our user-friendly Sales Tracking
            feature. Effortlessly list items, selling prices, and quantities for
            each transaction. Stay agile with real-time updates and easy
            modifications. Tailor your sales records to perfection by adjusting
            details and quantities. This feature empowers you to make informed
            decisions, refine strategies, and boost profitability. Seamlessly
            integrated within our system, it ensures your sales management is
            efficient and effective. Upgrade now to revolutionize your sales
            approach and drive success.
          </p>
        </div>
        <div className="  flex flex-col items-center justify-center px-4 text-center  ">
          <h3 className="text-4xl font-extrabold capitalize text-green-500">
            Simplify Purchases
          </h3>
          <h4 className="text-2xl font-extrabold capitalize text-green-500">
            with Our Purchase Management Feature
          </h4>
          <p className="text-md mx-auto mt-4 max-w-md font-medium leading-6">
            Revolutionize your procurement process using our Purchase Management
            feature. Seamlessly list purchase details including quantity, buying
            price, and manufacturing company information. Stay in control with
            the ability to modify these details anytime. Real-time updates keep
            you informed, enabling strategic decision-making for optimal
            procurement. Tailor your records with ease, ensuring accuracy and
            efficiency. This integrated solution harmonizes your purchasing
            tasks, fostering smoother operations. Upgrade now to enhance your
            procurement efficiency and drive greater value.
          </p>
        </div>
        <div className=" flex items-center justify-center rounded-full border-b-2 border-l-2 border-r-2 border-t-2  border-green-500 border-b-blue-500 border-l-red-600 border-r-yellow-400 duration-300 hover:scale-105 hover:border-b-4 hover:border-t-4">
          <img
            className="  mx-auto my-auto h-[80%] w-[80%]"
            src={purchase}
            alt="inventory"
          />
        </div>
        {/* customer */}
        <div className=" flex items-center justify-center rounded-full border-b-2 border-l-2 border-r-2 border-t-2  border-green-500 border-b-blue-500 border-l-red-600 border-r-yellow-400 duration-300 hover:scale-105 hover:border-b-4 hover:border-t-4">
          <img
            className="  mx-auto my-auto h-[80%] w-[80%]"
            src={feedback}
            alt="inventory"
          />
        </div>
        <div className="  flex flex-col items-center justify-center px-4 text-center  ">
          <h3 className="text-4xl font-extrabold capitalize text-green-500">
            Customer Management Redefined
          </h3>
          <h4 className="text-2xl font-extrabold capitalize text-green-500">
            Strengthen Connections Effortlessly
          </h4>
          <p className="text-md mx-auto mt-4 max-w-md font-medium leading-6">
            Elevate customer relationships through our Customer Management
            feature. Seamlessly list and organize customer details, including
            contact numbers and addresses, enabling easy and efficient
            connections. Stay engaged with your clientele using real-time access
            and modification capabilities. Enhance personalized interactions by
            tailoring customer information as needed. This integrated solution
            harmonizes customer data, streamlining communication for enhanced
            satisfaction. Upgrade now to forge lasting connections, elevate
            service quality, and foster loyalty through simplified customer
            management.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeautreRow;
