import React, { useState } from 'react';

const Faq: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="container mx-auto my-20">
      <div className="bg-white p-5 rounded-lg shadow flex max-w-7xl mx-auto">
        <div className="w-1/2 flex flex-col items-center">
          <img src="assets/image/icon-faq.svg" alt="icon-faq" />
          <h2 className="text-2xl font-bold text-orange-500">Frequently Asked Questions</h2>
          <p className="text-sm text-gray-600">
            Ingin bertanya?{' '}
            <a href="page/login.html" className="text-blue-600 hover:text-blue-800">
              Yuk Login!
            </a>
          </p>
        </div>

        <div className="w-1/2 mt-5">
          {/* Question 1 */}
          <div
            onClick={() => toggleFAQ('faq1')}
            className="cursor-pointer bg-orange-200 p-4 rounded-lg shadow-md"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-gray-800">
                Siapa yang akan melayani saat melakukan pembelian?
              </h3>
              <img
                id="icon-faq1"
                src={openFAQ === 'faq1' ? 'assets/image/icons/up.svg' : 'assets/image/icons/down.svg'}
                alt="toggle"
                className="w-5"
              />
            </div>
            <div id="faq1" className={`text-gray-600 mt-2 ${openFAQ === 'faq1' ? '' : 'hidden'}`}>
              Saat pembelian kamu akan dilayani oleh staff Recycrafts yang sudah terverifikasi keahliannya.
            </div>
          </div>

          {/* Question 2 */}
          <div
            onClick={() => toggleFAQ('faq2')}
            className="cursor-pointer bg-orange-200 p-4 rounded-lg shadow-md mt-3"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-gray-800">
                Mengapa harus mengisi alamat email UB saat mendonasikan sampah?
              </h3>
              <img
                id="icon-faq2"
                src={openFAQ === 'faq2' ? 'assets/image/icons/up.svg' : 'assets/image/icons/down.svg'}
                alt="toggle"
                className="w-5"
              />
            </div>
            <div id="faq2" className={`text-gray-600 mt-2 ${openFAQ === 'faq2' ? '' : 'hidden'}`}>
              Email digunakan untuk verifikasi dan konfirmasi donasi.
            </div>
          </div>

          {/* Question 3 */}
          <div
            onClick={() => toggleFAQ('faq3')}
            className="cursor-pointer bg-orange-200 p-4 rounded-lg shadow-md mt-3"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-gray-800">Apakah kerahasiaan data saya terjamin?</h3>
              <img
                id="icon-faq3"
                src={openFAQ === 'faq3' ? 'assets/image/icons/up.svg' : 'assets/image/icons/down.svg'}
                alt="toggle"
                className="w-5"
              />
            </div>
            <div id="faq3" className={`text-gray-600 mt-2 ${openFAQ === 'faq3' ? '' : 'hidden'}`}>
              Ya, kerahasiaan data anda terjamin.
            </div>
          </div>

          {/* Question 4 */}
          <div
            onClick={() => toggleFAQ('faq4')}
            className="cursor-pointer bg-orange-200 p-4 rounded-lg shadow-md mt-3"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-gray-800">Bagaimana cara melakukan pembelian?</h3>
              <img
                id="icon-faq4"
                src={openFAQ === 'faq4' ? 'assets/image/icons/up.svg' : 'assets/image/icons/down.svg'}
                alt="toggle"
                className="w-5"
              />
            </div>
            <div id="faq4" className={`text-gray-600 mt-2 ${openFAQ === 'faq4' ? '' : 'hidden'}`}>
              Anda dapat melakukan pembelian melalui website kami atau menghubungi customer service.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
