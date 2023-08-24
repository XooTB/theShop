import React from "react";

const page: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">About TheShop</h2>
        <div className="mt-6 text-xl text-gray-700">
          <p className="mb-4">
            Welcome to TheShop, your ultimate destination for all your online
            shopping needs. We are committed to providing you with the best
            shopping experience possible, offering a wide range of high-quality
            products at competitive prices.
          </p>
          <p className="mb-4">
            Our carefully curated selection includes the latest fashion trends,
            cutting-edge electronics, stylish home decor, and much more. We
            source products from trusted suppliers to ensure that you receive
            items that meet your expectations.
          </p>
          <p className="mb-4">
            At TheShop, customer satisfaction is our top priority. Our
            user-friendly website makes it easy to browse and find what you're
            looking for. With secure payment options and fast shipping, you can
            shop with confidence, knowing that your information is safe and your
            orders will arrive promptly.
          </p>
          <p className="mb-4">
            Whether you're a tech enthusiast, a fashionista, a home decorator,
            or simply looking for great deals, TheShop has something for
            everyone. Join our community of satisfied customers and start your
            online shopping journey with us today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
