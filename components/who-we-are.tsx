import { Services } from 'components/services'

export const WhoWeAre: React.FC = () => {
  return (
    <div
      className="w-full min-h-max scroll-mt-11 md:scroll-m-14 lg:scroll-mt-20"
      id="who-we-are"
    >
      <div className="flex flex-col justify-center items-center py-6  md:py-8 lg:py-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl px-10">
        <h2>
          At <span className="text-green-600 ">GY</span> Consulting, We Put
          Students First
        </h2>{' '}
        <h5 className="text-base md:text-xl lg:text-3xl mt-6  ">
          You can trust that your loved ones are in good hands.
        </h5>
      </div>
      <hr className="w-10/12 mx-auto " />
      <Services />
    </div>
  )
}
