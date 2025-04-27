import { testimonials } from "../Constants"

const Testimonial = () => {
  return (
    <div className="mt-20   tracking-wide">
        <h2 className="text-3xl sm:text-5xl lg:text-6 text-center py-12 lg:my-20">
            What People Are Saying
        </h2>
        <div className="flex flex-wrap justify-center">
            {testimonials.map((testimonials , index)=>(
                <div key={index} className="w-full  sm:w-1/2 lg:w-1/3 px-4 py-2 ">
                    <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 shadow-2xl shadow-orange-600 font-thin">
                        <p>{testimonials.text}</p>
                        <div className="flex mt-8 items-center ">
                           <img className="w-12 h-12 rounded-full border  border-neutral-50 mr-6"
                           src={testimonials.image} alt="" />
                           <div>
                           <h6 className="flex items-center">{testimonials.user}</h6>
                           <span className="text-sm font-normal italic text-neutral-400">{testimonials.company}</span>
                           </div>
                        </div>
                        {/* <h6 className="flex items-center">{testimonials.user}</h6>
                        <span>{testimonials.company}</span> */}
                    </div>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Testimonial
