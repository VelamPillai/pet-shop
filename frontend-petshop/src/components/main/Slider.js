import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";

export default function Slider() {
  return (
    <div className="w-80% flex items-center justify-center relative m-auto rounded-lg mt-16">
        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center absolute top-0 bottom-0 m-auto left-8 cursor-pointer"><HiChevronLeft /></div>
        <div className="h-full">
            <div className="flex items-center rounded-lg">
                <div className="h-full rounded-lg">
                    <img src="https://cdn.shopify.com/s/files/1/0625/5260/4904/files/1_e3ed3ae9-72a4-4fc5-975d-aabfaf67b6ab.png?v=1662641675&width=2072" alt="" className="w-100% rounded-lg"/>
                </div>
            </div>
        </div>
        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center absolute top-0 bottom-0 m-auto right-8 cursor-pointer"><HiChevronRight /></div>
    </div>
    
  )
}
