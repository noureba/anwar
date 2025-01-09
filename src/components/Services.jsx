import corporate from "../assets/corporate.png";
import ecommerce from "../assets/E-Commerce.jpeg";
import personal from "../assets/Personal.jpg";
import blog from "../assets/Blogs.png";
import booking from "../assets/Booking.png";
import real from "../assets/Real.png";

function Services() {
  const items = [
    {
      type: "Corporate Websites",
      title: "مواقع الشركات والأعمال",
      description:
        "إنشاء وتطوير مواقع احترافية تعكس هوية شركتك وتعرض خدماتك ومنتجاتك.",
      image: corporate,
    },
    {
      type: "E-Commerce Websites",
      title: "المتاجر الإلكترونية",
      description:
        "تصميم وتطوير متاجر إلكترونية متكاملة لبيع المنتجات والخدمات عبر الإنترنت.",
      image: ecommerce,
    },
    {
      type: "Personal Websites",
      title: "المواقع الشخصية",
      description: "إنشاء وتطوير مواقع شخصية مخصصة لعرض ملفك الشخصي أو أعمالك.",
      image: personal,
    },
    {
      type: "Blogs & News Websites",
      title: "المدونات والمواقع الإخبارية",
      description:
        "تصميم وتطوير مدونات احترافية ومنصات لنشر الأخبار والمقالات.",
      image: blog,
    },
    {
      type: "Booking & Service Websites",
      title: "مواقع الحجوزات والخدمات",
      description:
        "تطوير وإنشاء مواقع تمكن العملاء من حجز المواعيد أو الخدمات بسهولة.",
      image: booking,
    },
    {
      type: "Real Estate Websites",
      title: "مواقع العقارات",
      description:
        "إنشاء وتطوير مواقع مخصصة لعرض العقارات والتعامل مع العملاء بشكل احترافي.",
      image: real,
    },
  ];
  return (
    <>
      <div className="bg-slate-50	py-20" id="services">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-indigo-900 sm:text-6xl">
          الخدمات التي أقدمها
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8">
        خبرة تمتد لأكثر من 7 سنوات في تقديم حلول ويب مميزة وفعالة
        </p>
        <div className="flex py-2 flex-wrap	">
          {items.map((item) => (
            <div
              className="max-w-sm mx-auto my-5 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
              key={item.key}
            >
              <img
                className="w-full h-48 object-cover"
                src={item.image}
                alt="Image"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}{" "}
                </h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <a
                  href="https://wa.link/ygdks8"
                  className="inline-block mt-4 px-4 py-2 bg-lime-500 text-white font-medium text-sm rounded-lg hover:bg-blue-600"
                >
                  تواصل معنا
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
