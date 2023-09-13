import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Header from '@/components/Header'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<>
<Head>
	<title key="pagetitle">Tororo Drone Services</title>
	<meta name="description" content="Tororo Drone Services Blog" key="metadescription" />
  <link rel="icon" href="/favicon-32x32.png" />
</Head>

  <Header/> 

  <main
      className={`/*flex min-h-screen flex-col items-center justify-between p-24*/ ${inter.className}`}
    >

<section className="relative min-h-screen">
<video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover z-0 opacity-90 " >
        <source src="/hero-video-17.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="font-extrabold sm:text-5xl text-2xl text-green-500 text-left">
        TORORO

        <strong className="block font-extrabold text-green-500">
          Drone Services
        </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed text-left text-white">
      Elevate your perspective with our cutting-edge drone services, capturing breathtaking moments from the sky.
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-green-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
        >
          Book Demo
        </a>

        <a
          href="#"
          className="block w-full rounded border border-current px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-green-500 border-green-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
 
<section className="bg-white px-3 py-6">
    <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:items-center">
            <div className="w-full space-y-12 lg:w-1/2 ">
                <div>
                    <h1 className="text-2xl font-semibold text-green-500 capitalize lg:text-3xl">Welcome <br/> <span className="text-black">You will love it!</span></h1>

                    <div className="mt-2">
                        <span className="inline-block w-40 h-1 bg-green-500 rounded-full"></span>
                        <span className="inline-block w-3 h-1 ml-1 bg-green-500 rounded-full"></span>
                        <span className="inline-block w-1 h-1 ml-1 bg-green-500 rounded-full"></span>
                    </div>
                </div>

                <div className="md:flex md:items-start md:-mx-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 mb-8 text-green-600">
    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
  </svg>
    <div className="space-y-2">
      <p className="text-lg font-medium leadi">Seamless Simplicity</p>
      <p className="leadi">Discover the ease and convenience of streamlined solutions for all your drone service needs.</p>
    </div>
                </div>

                <div className="md:flex md:items-start md:-mx-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 mb-8 text-green-600">
    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
  </svg>
    <div className="space-y-2">
      <p className="text-lg font-medium leadi">Precision Imaging</p>
      <p className="leadi">Enjoy crystal-clear aerial photography and videography for accurate data and breathtaking visuals.</p>
    </div>
                </div>

                <div className="md:flex md:items-start md:-mx-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 mb-8 text-green-600">
    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
  </svg>
    <div className="space-y-2">
      <p className="text-lg font-medium leadi">Eco-Friendly Excellence</p>
      <p className="leadi">Embrace environmentally conscious drone services that minimize ecological impact while achieving your goals.</p>
    </div>
                </div>
            </div>

            <div className="lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                <img className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-3xl mt-4 mb-4 lg:mt-0 lg:mb-0" src="/section2-image.jpg" alt=""/>
            </div>
        </div>

        <a
          href="#"
          className="absolute rounded border bg-green-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
        >
          Book Demo
        </a>


        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
               
            </div>

            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
             
            </div>

            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
               
            </div>

            <div className="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
                
            </div>

            <div className="flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-1">
              
            </div>
        </div>
    </div>
</section>

{/* <section className="min-h-screen">
  <div className="relative w-[69.63rem] h-auto top-[3rem] pb-[6rem] container mx-auto lg:max-w-7xl">
    
    <div
        className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-whitesmoke-200 w-[1440px] h-[1605px] text-xs text-green text-center"
      >
        <div
          className="absolute top-[100px] left-[170px] w-[1100px] h-[105px] text-center text-19xl text-black"
        >
          <div
            className="absolute top-[35px] left-[4px] font-extrabold inline-block w-[1096px]"
          >
            What we can do
          </div>
          <div
            className="absolute top-[102px] left-[400px] bg-gray-500 w-[300px] h-px"
          >
            <div
              className="absolute top-[0px] left-[100px] bg-green w-[100px] h-[3px]"
            ></div>
          </div>
          <div
            className="absolute top-[0px] left-[0px] text-lg font-extrabold text-green inline-block w-[1100px]"
          >
            Our Services
          </div>
        </div>
        <div className="absolute top-[265px] left-[170px] w-[550px] h-[310px]">
          <div
            className="absolute top-[0px] left-[0px] bg-silver-100 shadow-[0px_0px_16px_rgba(15,_155,_15,_0.09)] w-[275px] h-[310px]"
          ></div>
          <img
            className="absolute top-[calc(50%_-_50px)] left-[calc(50%_-_187px)] w-[100px] h-[100px] overflow-hidden"
            alt=""
            src="/section2-image.jpg"
          />

          <div className="absolute top-[0px] left-[250px] w-[300px] h-[310px]">
            <div
              className="absolute top-[0px] left-[25px] bg-white shadow-[0px_0px_16px_rgba(15,_155,_15,_0.09)] w-[275px] h-[310px]"
            ></div>
            <img
              className="absolute top-[25px] left-[50px] w-[60px] h-[60px] overflow-hidden"
              alt=""
              src="/section2-image.jpg"
            />

            <div
              className="absolute top-[110px] left-[50px] font-extrabold inline-block w-[225px]"
            >
              <span>Special</span>
              <span className="text-black"> events surveillance</span>
            </div>
            <img
              className="absolute top-[133.35px] left-[0px] w-[25.5px] h-[43.3px]"
              alt=""
              src="/public/polygon-1.svg"
            />

            <div
              className="absolute top-[206px] left-[50px] text-base font-h1 text-black inline-block w-[225px] h-[69px]"
            >
              Sed malesuada tristique euismod. Mauris maximus sagittis dolor a
              placerat.
            </div>
          </div>
        </div>
        <div className="absolute top-[265px] left-[720px] w-[550px] h-[310px]">
          <div
            className="absolute top-[0px] left-[0px] bg-silver-100 shadow-[0px_0px_16px_rgba(15,_155,_15,_0.09)] w-[275px] h-[310px]"
          ></div>
          <img
            className="absolute top-[calc(50%_-_50px)] left-[calc(50%_-_187px)] w-[100px] h-[100px] overflow-hidden"
            alt=""
            src="/public/ionimages1.svg"
          />

          <div className="absolute top-[0px] left-[250px] w-[300px] h-[310px]">
            <div
              className="absolute top-[0px] left-[25px] bg-white shadow-[0px_0px_16px_rgba(15,_155,_15,_0.09)] w-[275px] h-[310px]"
            ></div>
            <img
              className="absolute top-[25px] left-[50px] w-[60px] h-[60px] overflow-hidden"
              alt=""
              src="/public/carbondronevideo.svg"
            />

            <div
              className="absolute top-[110px] left-[50px] font-extrabold inline-block w-[225px]"
            >
              <span>General </span>
              <span className="text-black">inspections</span>
            </div>
            <img
              className="absolute top-[133.35px] left-[0px] w-[25.5px] h-[43.3px]"
              alt=""
              src="/public/polygon-1.svg"
            />

            <div
              className="absolute top-[206px] left-[50px] text-base font-h1 text-black inline-block w-[225px] h-[69px]"
            >
              Sed malesuada tristique euismod. Mauris maximus sagittis dolor a
              placerat.
            </div>
          </div>
        </div>
        <div className="absolute top-[575px] left-[170px] w-[550px] h-[310px]">
          <div
            className="absolute top-[0px] left-[275px] bg-silver-100 w-[275px] h-[310px]"
          ></div>
          <img
            className="absolute top-[calc(50%_-_50px)] left-[calc(50%_+_88px)] w-[100px] h-[100px] overflow-hidden"
            alt=""
            src="/public/ionimages1.svg"
          />

          <div className="absolute top-[0px] left-[0px] w-[300.5px] h-[310px]">
            <div
              className="absolute top-[0px] left-[0px] bg-white shadow-[0px_0px_16px_rgba(15,_155,_15,_0.09)] w-[275px] h-[310px]"
            ></div>
            <img
              className="absolute top-[25px] left-[25px] w-[60px] h-[60px] overflow-hidden"
              alt=""
              src="/public/carbonbasketball.svg"
            />

            <div
              className="absolute top-[110px] left-[25px] font-extrabold inline-block w-[225px]"
            >
              <span>Sporting </span>
              <span className="text-black">events</span>
            </div>
            <img
              className="absolute top-[133.35px] left-[275px] w-[25.5px] h-[43.3px]"
              alt=""
              src="/public/polygon-11.svg"
            />

            <div
              className="absolute top-[168px] left-[25px] text-base font-h1 text-black inline-block w-[225px] h-[69px]"
            >
              Sed malesuada tristique euismod. Mauris maximus sagittis dolor a
              placerat.
            </div>
          </div>
        </div>
        <div className="absolute top-[885px] left-[170px] w-[550px] h-[310px]">
          <div
            className="absolute top-[0px] left-[0px] bg-silver-100 shadow-[0px_0px_16px_rgba(15,_155,_15,_0.09)] w-[275px] h-[310px]"
          ></div>
          <img
            className="absolute top-[calc(50%_-_50px)] left-[calc(50%_-_187px)] w-[100px] h-[100px] overflow-hidden"
            alt=""
            src="/public/ionimages1.svg"
          />

          <div className="absolute top-[0px] left-[250px] w-[300px] h-[310px]">
            <div
              className="absolute top-[0px] left-[25px] bg-white w-[275px] h-[310px]"
            ></div>
            <img
              className="absolute top-[29px] left-[50px] w-[60px] h-[60px] overflow-hidden"
              alt=""
              src="/public/carbonpedestrian.svg"
            />

            <div
              className="absolute top-[110px] left-[50px] font-extrabold inline-block w-[225px]"
            >
              Marathons
            </div>
            <img
              className="absolute top-[133.35px] left-[0px] w-[25.5px] h-[43.3px]"
              alt=""
              src="/public/polygon-1.svg"
            />

            <div
              className="absolute top-[168px] left-[50px] text-base font-h1 text-black inline-block w-[225px] h-[69px]"
            >
              Sed malesuada tristique euismod. Mauris maximus sagittis dolor a
              placerat.
            </div>
          </div>
        </div>
        <div className="absolute top-[885px] left-[720px] w-[550px] h-[310px]">
          <div
            className="absolute top-[0px] left-[0px] bg-silver-100 w-[275px] h-[310px]"
          ></div>
          <img
            className="absolute top-[calc(50%_-_50px)] left-[calc(50%_-_187px)] w-[100px] h-[100px] overflow-hidden"
            alt=""
            src="/public/ionimages1.svg"
          />

          <div className="absolute top-[0px] left-[250px] w-[300px] h-[310px]">
            <div
              className="absolute top-[0px] left-[25px] bg-white shadow-[0px_0px_16px_rgba(15,_155,_15,_0.09)] w-[275px] h-[310px]"
            ></div>
            <img
              className="absolute top-[25px] left-[50px] w-[60px] h-[60px] overflow-hidden"
              alt=""
              src="/public/carbonvideo.svg"
            />

            <div
              className="absolute top-[110px] left-[50px] font-extrabold inline-block w-[225px]"
            >
              <span>Live </span>
              <span className="text-black">broadcast</span>
            </div>
            <img
              className="absolute top-[133.35px] left-[0px] w-[25.5px] h-[43.3px]"
              alt=""
              src="/public/polygon-1.svg"
            />

            <div
              className="absolute top-[168px] left-[50px] text-base font-h1 text-black inline-block w-[225px] h-[69px]"
            >
              Sed malesuada tristique euismod. Mauris maximus sagittis dolor a
              placerat.
            </div>
          </div>
        </div>
        <div className="absolute top-[1195px] left-[170px] w-[550px] h-[310px]">
          <div
            className="absolute top-[0px] left-[275px] bg-silver-100 shadow-[0px_0px_16px_rgba(15,_155,_15,_0.09)] w-[275px] h-[310px]"
          ></div>
          <img
            className="absolute top-[calc(50%_-_50px)] left-[calc(50%_+_87px)] w-[100px] h-[100px] overflow-hidden"
            alt=""
            src="/public/ionimages1.svg"
          />

          <div className="absolute top-[0px] left-[0px] w-[300.5px] h-[310px]">
            <div
              className="absolute top-[0px] left-[0px] bg-white shadow-[0px_0px_16px_rgba(15,_155,_15,_0.09)] w-[275px] h-[310px]"
            ></div>
            <img
              className="absolute top-[25px] left-[25px] w-[60px] h-[60px] overflow-hidden"
              alt=""
              src="/public/carbonskipforwardoutline.svg"
            />

            <div
              className="absolute top-[110px] left-[25px] font-extrabold inline-block w-[225px]"
            >
              <span>Live </span>
              <span className="text-black">feed surveillance</span>
            </div>
            <img
              className="absolute top-[133.35px] left-[275px] w-[25.5px] h-[43.3px]"
              alt=""
              src="/public/polygon-11.svg"
            />

            <div
              className="absolute top-[206px] left-[25px] text-base font-h1 text-black inline-block w-[225px] h-[69px]"
            >
              Sed malesuada tristique euismod. Mauris maximus sagittis dolor a
              placerat.
            </div>
          </div>
        </div>
        <div className="absolute top-[575px] left-[720px] w-[550px] h-[310px]">
          <div
            className="absolute top-[0px] left-[275px] bg-silver-100 shadow-[0px_0px_16px_rgba(15,_155,_15,_0.09)] w-[275px] h-[310px]"
          ></div>
          <img
            className="absolute top-[calc(50%_-_50px)] left-[calc(50%_+_88px)] w-[100px] h-[100px] overflow-hidden"
            alt=""
            src="/public/ionimages1.svg"
          />

          <div className="absolute top-[0px] left-[0px] w-[300.5px] h-[310px]">
            <div
              className="absolute top-[0px] left-[0px] bg-white w-[275px] h-[310px]"
            ></div>
            <img
              className="absolute top-[25px] left-[25px] w-[60px] h-[60px] overflow-hidden"
              alt=""
              src="/public/carbonsailboatcoastal.svg"
            />

            <div
              className="absolute top-[110px] left-[25px] font-extrabold inline-block w-[225px]"
            >
              <span>Water </span>
              <span className="text-black">sports</span>
            </div>
            <img
              className="absolute top-[133.35px] left-[275px] w-[25.5px] h-[43.3px]"
              alt=""
              src="/public/polygon-11.svg"
            />

            <div
              className="absolute top-[168px] left-[25px] text-base font-h1 text-black inline-block w-[225px] h-[69px]"
            >
              Sed malesuada tristique euismod. Mauris maximus sagittis dolor a
              placerat.
            </div>
          </div>
        </div>
        <div
          className="absolute top-[1195px] left-[720px] bg-green shadow-[0px_0px_16px_rgba(15,_155,_15,_0.09)] w-[550px] h-[310px] text-center text-white"
        >
          <div
            className="absolute top-[136px] left-[50px] font-extrabold inline-block w-[450px]"
          >
            and more others...
          </div>
        </div>
      </div>
      <div
        className="absolute left-[0px] w-[1440px] h-[627px] font-h1"
      />
        <div
          className="absolute top-[0px] left-[0px] bg-lightgray-200 w-[1440px] h-[527px] mix-blend-luminosity"
        ></div>
        <img
          className="absolute top-[calc(50%_-_149.5px)] left-[calc(50%_-_450px)] w-[200px] h-[200px] overflow-hidden"
          alt=""
          src="/section2-image.jpg"
        />
        </div>
</section>  */}

{/*Services*/ }
<section className=" section-services bg-gray-100 text-gray-800 min-h-screen">
	<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
		<div>
			<h2 className="text-3xl font-bold tracki text-center sm:text-5xl text-gray-900">Our Services</h2>
			<p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-600"></p>
		</div>
		<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
			<div>
				<h3 className="text-2xl font-bold tracki sm:text-3xl text-gray-900">What We Can Do</h3>
				<p className="mt-3 text-lg text-gray-600">Elevate your perspective with our Tororo Drone Services. Our state-of-the-art drones offer stunning aerial photography and precise data collection for all your needs.</p>
				<div className="mt-12 space-y-12">
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md bg-green-600 text-gray-50">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leadi text-gray-900">Special Events</h4>
							<p className="mt-2 text-gray-600">Capture the magic of special events with our Tororo Drone Services, delivering breathtaking aerial footage to cherish those unforgettable moments.</p>
						</div>
					</div>
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md bg-green-600 text-gray-50">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leadi text-gray-900">Sporting events</h4>
							<p className="mt-2 text-gray-600">Enhance the excitement of sporting events with our high-flying drones, bringing dynamic perspectives and thrilling action shots to the audience.</p>
						</div>
					</div>
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md bg-green-600 text-gray-50">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leadi text-gray-900">Marathons</h4>
							<p className="mt-2 text-gray-600">Ensure the success of marathons with our drone support, offering real-time race coverage and essential data for event management.</p>
						</div>
					</div>
				</div>
			</div>
			<video autoPlay muted loop className="left-0 w-full h-full object-cover" >
        <source src="/hero-video-14.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
		</div>
		<div>
			<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
				<div className="lg:col-start-2">
					<h3 className="text-2xl font-bold tracki sm:text-3xl text-gray-900">Elevating Possibilities</h3>
					<p className="mt-3 text-lg text-gray-600">Discover how Tororo Drone Services can revolutionize your projects with precision aerial mapping, surveillance, and inspections.</p>
					<div className="mt-12 space-y-12">
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md bg-green-600 text-gray-50">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leadi text-gray-900">General Inspections</h4>
								<p className="mt-2 text-gray-600">Optimize efficiency and safety through our General Inspections using drones, offering detailed aerial assessments for various industries.</p>
							</div>
						</div>
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md bg-green-600 text-gray-50">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leadi text-gray-900">Live broadcast</h4>
								<p className="mt-2 text-gray-600">Engage a global audience with our Live Broadcast drone services, delivering captivating live-streamed events from unique aerial viewpoints.</p>
							</div>
						</div>
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md bg-green-600 text-gray-50">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leadi text-gray-900">Live Feed Surveillance</h4>
								<p className="mt-2 text-gray-600">Elevate security with our Live Feed Surveillance drone services, providing continuous monitoring and rapid response capabilities.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
        <video autoPlay muted loop className="left-0 w-full h-[500px] object-cover" >
        <source src="/hero-video-15.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
				</div>
        <div>
        <div className="b animate-bounce mx-auto h-16 w-64 flex justify-center items-center mt-8 md:ml-96">
      <div className="i h-16 w-64 bg-gradient-to-br from-green-500 to-gray-500 items-center rounded-xl shadow-2xl  cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
      </div>
      <a className="text-center text-white font-semibold z-10 pointer-events-none flex justify-content items-center"><span className=""><svg className="w-5 h-5 right-1.5 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg></span>Load More</a>
    </div>
        </div>
			</div>
		</div>
	</div>
</section>

{/* Testimonial */}
<section className=" bg-white text-gray-800">
	<div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
		<h1 className="p-4 text-4xl font-semibold leadi text-center">What our customers are saying about us</h1>
	</div>
	<div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
		<div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg lg:w-1/2">
			<div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
				<p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-green-600">
						<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
						<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
					</svg>Tororo Drone Services delivered stunning aerial footage for our real estate listings, impressing both clients and prospects.
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-green-600">
						<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
						<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
					</svg>
				</p>
			</div>
			<div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-green-600 text-gray-50">
				<img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-300" />
				<p className="text-xl font-semibold leadi">John Smith</p>
				<p className="text-sm uppercase">Real Estate Agent</p>
			</div>
		</div>
		<div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg lg:w-1/2">
			<div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
				<p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-green-600">
						<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
						<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
					</svg>Tororo Drone Services added a thrilling perspective to our sports events, capturing incredible moments from above!
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-green-600">
						<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
						<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
					</svg>
				</p>
			</div>
			<div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-green-600 text-gray-50">
				<img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-300" />
				<p className="text-xl font-semibold leadi">Sarah Johnson</p>
				<p className="text-sm uppercase">Sports Event Organizer</p>
			</div>
		</div>
		<div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg lg:w-1/2">
			<div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
				<p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-green-600">
						<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
						<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
					</svg>Tororo Drone Services delivered stunning aerial footage for our real estate listings, impressing both clients and prospects.
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-green-600">
						<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
						<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
					</svg>
				</p>
			</div>
			<div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-green-600 text-gray-50">
				<img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-300" />
				<p className="text-xl font-semibold leadi">John Smith</p>
				<p className="text-sm uppercase">Real Estate Agent</p>
			</div>
		</div>
		<div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg lg:w-1/2">
			<div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
				<p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-green-600">
						<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
						<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
					</svg>Tororo Drone Services delivered stunning aerial footage for our real estate listings, impressing both clients and prospects.
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-green-600">
						<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
						<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
					</svg>
				</p>
			</div>
			<div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-green-600 text-gray-50">
				<img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-300" />
				<p className="text-xl font-semibold leadi">John Smith</p>
				<p className="text-sm uppercase">Real Estate Agent</p>
			</div>
		</div>
	</div>
</section>


<section>
  
</section>
    </main>
    <Footer/>
    </>
     
  )
}
