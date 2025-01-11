import work1 from "../assets/work1.jpg";
import work2 from "../assets/work2.jpg";
import work3 from "../assets/work3.jpg";

function OurWorks() {
  return (
    <div className="py-20" id="works">
      <div>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-indigo-900 sm:text-6xl">
          اعمالنا          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8">
        نظرة على المشاريع التي تعكس خبرتنا واهتمامنا بالتفاصيل
        </p>
      </div>
      <div className="flex justify-center flex-wrap ">
        <div className="m-3">
          <img className="w-96	" src={work1} alt="" />
        </div>
        <div className="m-3">
          <img className="w-96	" src={work2} alt="" />
        </div>
        <div className="m-3">
          <img className="w-96	" src={work3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default OurWorks;
