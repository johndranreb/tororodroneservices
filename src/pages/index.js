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

<section className="min-h-screen">
<video autoPlay muted loop className="absolute min-h-screen left-0 w-full h-full object-cover z-0 opacity-80 " >
        <source src="/hero-video-8.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  <div
    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 class="font-extrabold sm:text-5xl text-21xl text-green-500 text-left">
        TORORO

        <strong class="block font-extrabold text-white">
          Drone Services
        </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed text-left">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          class="block w-full rounded bg-green-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
        >
          Book Demo
        </a>

        <a
          href="#"
          class="block w-full rounded border border-current px-8 py-3 text-sm font-medium text-green-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-green-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
 
<section class="bg-white px-3 py-6">
    <div class="container px-6 py-10 mx-auto">
        <div class="lg:flex lg:items-center">
            <div class="w-full space-y-12 lg:w-1/2 ">
                <div>
                    <h1 class="text-2xl font-semibold text-green-500 capitalize lg:text-3xl">Welcome <br/> <span class="text-black">You will love it!</span></h1>

                    <div class="mt-2">
                        <span class="inline-block w-40 h-1 bg-green-500 rounded-full"></span>
                        <span class="inline-block w-3 h-1 ml-1 bg-green-500 rounded-full"></span>
                        <span class="inline-block w-1 h-1 ml-1 bg-green-500 rounded-full"></span>
                    </div>
                </div>

                <div class="md:flex md:items-start md:-mx-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 mb-8 text-green-600">
    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
  </svg>
    <div className="space-y-2">
      <p className="text-lg font-medium leadi">Lorem ipsum dolor sit amet</p>
      <p className="leadi">Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!</p>
    </div>
                </div>

                <div class="md:flex md:items-start md:-mx-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 mb-8 text-green-600">
    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
  </svg>
    <div className="space-y-2">
      <p className="text-lg font-medium leadi">Lorem ipsum dolor sit amet</p>
      <p className="leadi">Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!</p>
    </div>
                </div>

                <div class="md:flex md:items-start md:-mx-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 mb-8 text-green-600">
    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
  </svg>
    <div className="space-y-2">
      <p className="text-lg font-medium leadi">Lorem ipsum dolor sit amet</p>
      <p className="leadi">Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!</p>
    </div>
                </div>
            </div>

            <div class="lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                <img class="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-3xl mt-4 mb-4 lg:mt-0 lg:mb-0" src="/section2-image.jpg" alt=""/>
            </div>
        </div>

        <a
          href="#"
          class="absolute rounded border border-current px-8 py-3 text-sm font-medium text-green-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-green-500 sm:w-auto"
        >
          Book Demo
        </a>


        <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div class="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
               
            </div>

            <div class="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
             
            </div>

            <div class="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
               
            </div>

            <div class="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
                
            </div>

            <div class="flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-1">
              
            </div>
        </div>
    </div>
</section>

{/* <section className="">
<div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-whitesmoke-200 w-[1440px] h-[1605px] text-xs text-green text-center"
      >
        <div
          class="absolute top-[100px] left-[170px] w-[1100px] h-[105px] text-center text-19xl text-black"
        >
          <div
            class="absolute top-[35px] left-[4px] font-extrabold inline-block w-[1096px]"
          >
            What we can do
          </div>
          <div
            class="absolute top-[102px] left-[400px] bg-gray-500 w-[300px] h-px"
          >
            <div
              class="absolute top-[0px] left-[100px] bg-green w-[100px] h-[3px]"
            ></div>
          </div>
          <div
            class="absolute top-[0px] left-[0px] text-lg font-extrabold text-green inline-block w-[1100px]"
          >
            Our Services
          </div>
        </div>
        <div class="absolute top-[265px] left-[170px] w-[550px] h-[310px]">
          <div
            class="absolute top-[0px] left-[0px] bg-silver-100 shadow-[0px_0px_16px_rgba(15,_155,_15,_0.09)] w-[275px] h-[310px]"
          ></div>
          <img
            class="absolute top-[calc(50%_-_50px)] left-[calc(50%_-_187px)] w-[100px] h-[100px] overflow-hidden"
            alt=""
            src="/section2-image.jpg"
          />

          <div class="absolute top-[0px] left-[250px] w-[300px] h-[310px]">
            <div
              class="absolute top-[0px] left-[25px] bg-white shadow-[0px_0px_16px_rgba(15,_155,_15,_0.09)] w-[275px] h-[310px]"
            ></div>
            <img
              class="absolute top-[25px] left-[50px] w-[60px] h-[60px] overflow-hidden"
              alt=""
              src="/section2-image.jpg"
            />

            <div
              class="absolute top-[110px] left-[50px] font-extrabold inline-block w-[225px]"
            >
              <span>Special</span>
              <span class="text-black"> events surveillance</span>
            </div>
            <img
              class="absolute top-[133.35px] left-[0px] w-[25.5px] h-[43.3px]"
              alt=""
              src="/public/polygon-1.svg"
            />

            <div
              class="absolute top-[206px] left-[50px] text-base font-h1 text-black inline-block w-[225px] h-[69px]"
            >
              Sed malesuada tristique euismod. Mauris maximus sagittis dolor a
              placerat.
            </div>
          </div>
        </div>
        <div class="absolute top-[265px] left-[720px] w-[550px] h-[310px]">
          <div
            class="absolute top-[0px] left-[0px] bg-silver-100 shadow-[0px_0px_16px_rgba(15,_155,_15,_0.09)] w-[275px] h-[310px]"
          ></div>
          <img
            class="absolute top-[calc(50%_-_50px)] left-[calc(50%_-_187px)] w-[100px] h-[100px] overflow-hidden"
            alt=""
            src="/public/ionimages1.svg"
          />

          <div class="absolute top-[0px] left-[250px] w-[300px] h-[310px]">
            <div
              class="absolute top-[0px] left-[25px] bg-white shadow-[0px_0px_16px_rgba(15,_155,_15,_0.09)] w-[275px] h-[310px]"
            ></div>
            <img
              class="absolute top-[25px] left-[50px] w-[60px] h-[60px] overflow-hidden"
              alt=""
              src="/public/carbondronevideo.svg"
            />

            <div
              class="absolute top-[110px] left-[50px] font-extrabold inline-block w-[225px]"
            >
              <span>General </span>
              <span class="text-black">inspections</span>
            </div>
            <img
              class="absolute top-[133.35px] left-[0px] w-[25.5px] h-[43.3px]"
              alt=""
              src="/public/polygon-1.svg"
            />

            <div
              class="absolute top-[206px] left-[50px] text-base font-h1 text-black inline-block w-[225px] h-[69px]"
            >
              Sed malesuada tristique euismod. Mauris maximus sagittis dolor a
              placerat.
            </div>
          </div>
        </div>
        <div class="absolute top-[575px] left-[170px] w-[550px] h-[310px]">
          <div
            class="absolute top-[0px] left-[275px] bg-silver-100 w-[275px] h-[310px]"
          ></div>
          <img
            class="absolute top-[calc(50%_-_50px)] left-[calc(50%_+_88px)] w-[100px] h-[100px] overflow-hidden"
            alt=""
            src="/public/ionimages1.svg"
          />

          <div class="absolute top-[0px] left-[0px] w-[300.5px] h-[310px]">
            <div
              class="absolute top-[0px] left-[0px] bg-white shadow-[0px_0px_16px_rgba(15,_155,_15,_0.09)] w-[275px] h-[310px]"
            ></div>
            <img
              class="absolute top-[25px] left-[25px] w-[60px] h-[60px] overflow-hidden"
              alt=""
              src="/public/carbonbasketball.svg"
            />

            <div
              class="absolute top-[110px] left-[25px] font-extrabold inline-block w-[225px]"
            >
              <span>Sporting </span>
              <span class="text-black">events</span>
            </div>
            <img
              class="absolute top-[133.35px] left-[275px] w-[25.5px] h-[43.3px]"
              alt=""
              src="/public/polygon-11.svg"
            />

            <div
              class="absolute top-[168px] left-[25px] text-base font-h1 text-black inline-block w-[225px] h-[69px]"
            >
              Sed malesuada tristique euismod. Mauris maximus sagittis dolor a
              placerat.
            </div>
          </div>
        </div>
        <div class="absolute top-[885px] left-[170px] w-[550px] h-[310px]">
          <div
            class="absolute top-[0px] left-[0px] bg-silver-100 shadow-[0px_0px_16px_rgba(15,_155,_15,_0.09)] w-[275px] h-[310px]"
          ></div>
          <img
            class="absolute top-[calc(50%_-_50px)] left-[calc(50%_-_187px)] w-[100px] h-[100px] overflow-hidden"
            alt=""
            src="/public/ionimages1.svg"
          />

          <div class="absolute top-[0px] left-[250px] w-[300px] h-[310px]">
            <div
              class="absolute top-[0px] left-[25px] bg-white w-[275px] h-[310px]"
            ></div>
            <img
              class="absolute top-[29px] left-[50px] w-[60px] h-[60px] overflow-hidden"
              alt=""
              src="/public/carbonpedestrian.svg"
            />

            <div
              class="absolute top-[110px] left-[50px] font-extrabold inline-block w-[225px]"
            >
              Marathons
            </div>
            <img
              class="absolute top-[133.35px] left-[0px] w-[25.5px] h-[43.3px]"
              alt=""
              src="/public/polygon-1.svg"
            />

            <div
              class="absolute top-[168px] left-[50px] text-base font-h1 text-black inline-block w-[225px] h-[69px]"
            >
              Sed malesuada tristique euismod. Mauris maximus sagittis dolor a
              placerat.
            </div>
          </div>
        </div>
        <div class="absolute top-[885px] left-[720px] w-[550px] h-[310px]">
          <div
            class="absolute top-[0px] left-[0px] bg-silver-100 w-[275px] h-[310px]"
          ></div>
          <img
            class="absolute top-[calc(50%_-_50px)] left-[calc(50%_-_187px)] w-[100px] h-[100px] overflow-hidden"
            alt=""
            src="/public/ionimages1.svg"
          />

          <div class="absolute top-[0px] left-[250px] w-[300px] h-[310px]">
            <div
              class="absolute top-[0px] left-[25px] bg-white shadow-[0px_0px_16px_rgba(15,_155,_15,_0.09)] w-[275px] h-[310px]"
            ></div>
            <img
              class="absolute top-[25px] left-[50px] w-[60px] h-[60px] overflow-hidden"
              alt=""
              src="/public/carbonvideo.svg"
            />

            <div
              class="absolute top-[110px] left-[50px] font-extrabold inline-block w-[225px]"
            >
              <span>Live </span>
              <span class="text-black">broadcast</span>
            </div>
            <img
              class="absolute top-[133.35px] left-[0px] w-[25.5px] h-[43.3px]"
              alt=""
              src="/public/polygon-1.svg"
            />

            <div
              class="absolute top-[168px] left-[50px] text-base font-h1 text-black inline-block w-[225px] h-[69px]"
            >
              Sed malesuada tristique euismod. Mauris maximus sagittis dolor a
              placerat.
            </div>
          </div>
        </div>
        <div class="absolute top-[1195px] left-[170px] w-[550px] h-[310px]">
          <div
            class="absolute top-[0px] left-[275px] bg-silver-100 shadow-[0px_0px_16px_rgba(15,_155,_15,_0.09)] w-[275px] h-[310px]"
          ></div>
          <img
            class="absolute top-[calc(50%_-_50px)] left-[calc(50%_+_87px)] w-[100px] h-[100px] overflow-hidden"
            alt=""
            src="/public/ionimages1.svg"
          />

          <div class="absolute top-[0px] left-[0px] w-[300.5px] h-[310px]">
            <div
              class="absolute top-[0px] left-[0px] bg-white shadow-[0px_0px_16px_rgba(15,_155,_15,_0.09)] w-[275px] h-[310px]"
            ></div>
            <img
              class="absolute top-[25px] left-[25px] w-[60px] h-[60px] overflow-hidden"
              alt=""
              src="/public/carbonskipforwardoutline.svg"
            />

            <div
              class="absolute top-[110px] left-[25px] font-extrabold inline-block w-[225px]"
            >
              <span>Live </span>
              <span class="text-black">feed surveillance</span>
            </div>
            <img
              class="absolute top-[133.35px] left-[275px] w-[25.5px] h-[43.3px]"
              alt=""
              src="/public/polygon-11.svg"
            />

            <div
              class="absolute top-[206px] left-[25px] text-base font-h1 text-black inline-block w-[225px] h-[69px]"
            >
              Sed malesuada tristique euismod. Mauris maximus sagittis dolor a
              placerat.
            </div>
          </div>
        </div>
        <div class="absolute top-[575px] left-[720px] w-[550px] h-[310px]">
          <div
            class="absolute top-[0px] left-[275px] bg-silver-100 shadow-[0px_0px_16px_rgba(15,_155,_15,_0.09)] w-[275px] h-[310px]"
          ></div>
          <img
            class="absolute top-[calc(50%_-_50px)] left-[calc(50%_+_88px)] w-[100px] h-[100px] overflow-hidden"
            alt=""
            src="/public/ionimages1.svg"
          />

          <div class="absolute top-[0px] left-[0px] w-[300.5px] h-[310px]">
            <div
              class="absolute top-[0px] left-[0px] bg-white w-[275px] h-[310px]"
            ></div>
            <img
              class="absolute top-[25px] left-[25px] w-[60px] h-[60px] overflow-hidden"
              alt=""
              src="/public/carbonsailboatcoastal.svg"
            />

            <div
              class="absolute top-[110px] left-[25px] font-extrabold inline-block w-[225px]"
            >
              <span>Water </span>
              <span class="text-black">sports</span>
            </div>
            <img
              class="absolute top-[133.35px] left-[275px] w-[25.5px] h-[43.3px]"
              alt=""
              src="/public/polygon-11.svg"
            />

            <div
              class="absolute top-[168px] left-[25px] text-base font-h1 text-black inline-block w-[225px] h-[69px]"
            >
              Sed malesuada tristique euismod. Mauris maximus sagittis dolor a
              placerat.
            </div>
          </div>
        </div>
        <div
          class="absolute top-[1195px] left-[720px] bg-green shadow-[0px_0px_16px_rgba(15,_155,_15,_0.09)] w-[550px] h-[310px] text-center text-white"
        >
          <div
            class="absolute top-[136px] left-[50px] font-extrabold inline-block w-[450px]"
          >
            and more others...
          </div>
        </div>
      </div>
      <div
        class="absolute left-[0px] w-[1440px] h-[627px] font-h1"
      />
        <div
          class="absolute top-[0px] left-[0px] bg-lightgray-200 w-[1440px] h-[527px] mix-blend-luminosity"
        ></div>
        <img
          class="absolute top-[calc(50%_-_149.5px)] left-[calc(50%_-_450px)] w-[200px] h-[200px] overflow-hidden"
          alt=""
          src="/section2-image.jpg"
        />
</section> */}

<section className="bg-gray-100 text-gray-800">
	<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
		<div>
			<h2 className="text-3xl font-bold tracki text-center sm:text-5xl text-gray-900">Our Services</h2>
			<p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-600">What We Can Do</p>
		</div>
		<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
			<div>
				<h3 className="text-2xl font-bold tracki sm:text-3xl text-gray-900">Ad vix debet docendi</h3>
				<p className="mt-3 text-lg text-gray-600">Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.</p>
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
							<h4 className="text-lg font-medium leadi text-gray-900">Per ei quaeque sensibus</h4>
							<p className="mt-2 text-gray-600">Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.</p>
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
							<h4 className="text-lg font-medium leadi text-gray-900">Cu imperdiet posidonium sed</h4>
							<p className="mt-2 text-gray-600">Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.</p>
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
							<h4 className="text-lg font-medium leadi text-gray-900">Nulla omittam sadipscing mel ne</h4>
							<p className="mt-2 text-gray-600">At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.</p>
						</div>
					</div>
				</div>
			</div>
			<video autoPlay muted loop className="left-0 w-full h-full object-cover" >
        <source src="/hero-video-3.webm" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
		</div>
		<div>
			<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
				<div className="lg:col-start-2">
					<h3 className="text-2xl font-bold tracki sm:text-3xl text-gray-900">Eam nibh gloriatur ex</h3>
					<p className="mt-3 text-lg text-gray-600">Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nibh dissentias, mei exerci tamquam euripidis cu.</p>
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
								<h4 className="text-lg font-medium leadi text-gray-900">Cibo augue offendit has ad</h4>
								<p className="mt-2 text-gray-600">An per velit appellantur, ut utinam minimum nominavi sit, odio nostro habemus ne nec. Ne sonet regione contentiones est.</p>
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
								<h4 className="text-lg font-medium leadi text-gray-900">At eum ferri luptatum lobortis</h4>
								<p className="mt-2 text-gray-600">Te per quidam maiorum ocurreret, etiam delicatissimi usu ad. Ne has quod periculis. Te sit primis iisque efficiantur.</p>
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
								<h4 className="text-lg font-medium leadi text-gray-900">Dicunt verterem evertitur eu sea</h4>
								<p className="mt-2 text-gray-600">Audire principes rationibus eam an, autem nominavi luptatum per te. Sumo fabulas vim eu, sonet saperet eleifend ut vix.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
        <video autoPlay muted loop className="left-0 w-full h-[500px] object-cover" >
        <source src="/hero-video-7.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
				</div>
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
