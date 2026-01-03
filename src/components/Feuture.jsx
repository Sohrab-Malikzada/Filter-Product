// import React from 'react'
import React, { useState } from 'react'
import Liam from '../../src/assets/Liam.jpg'

const Feuture = () => {
    
  const [category, setCategory] = useState("all")
  const ithems = [
        {
          id:"23",
          name: <div className='border-1 w-[280px] h-[380px] relative'>
              <img src={Liam} alt="" className='w-full h-[200px] ' />
              <h1 className='absolute top-1 left-2 bg-black  text-white text-sm text-[14px] rounded-2xl px-2'>Feutute</h1>
              <div className='absolute top-1 right-2 bg-white'>

              </div>
              <h1 className='font-bold pl-3 text-lg text-[18px]'>Hand Phone</h1>
              <p className='pl-3 text-sm text-gray-600 text-[14px]'>Technology Product</p>
              <p className='pl-3 pr-2 text-base font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, qui! Fugiat ?</p>
              <button className='bg-gray-700 mt-5 w-[90%]  mx-[5%] rounded text-white'>Add Card</button>
          </div>,
          categories:"men",
        },
        {
          id:"24",
          name: <div className='border-1 w-[280px] h-[380px] relative'>
            <img src={Liam} alt="" className='w-full h-[200px] ' />
            <h1 className='absolute top-1 left-2 bg-black  text-white text-sm text-[14px] rounded-2xl px-2'>Feutute</h1>
            <div className='absolute top-1 right-2 bg-white'>

            </div>
            <h1 className='font-bold pl-3 text-lg text-[18px]'>Hand Phone</h1>
            <p className='pl-3 text-sm text-gray-600 text-[14px]'>Technology Product</p>
            <p className='pl-3 pr-2 text-base font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, qui! Fugiat ?</p>
            <button className='bg-gray-700 mt-5 w-[90%]  mx-[5%] rounded text-white'>Add Card</button>
          </div>,
          categories:"women",
        },
        {
          id: "2003",
          name: <div className='border-1 w-[280px] h-[380px] relative'>
            <img src={Liam} alt="" className='w-full h-[200px] ' />
            <h1 className='absolute top-1 left-2 bg-black  text-white text-sm text-[14px] rounded-2xl px-2'>Feutute</h1>
            <div className='absolute top-1 right-2 bg-white'>

            </div>
            <h1 className='font-bold pl-3 text-lg text-[18px]'>Hand Phone</h1>
            <p className='pl-3 text-sm text-gray-600 text-[14px]'>Technology Product</p>
            <p className='pl-3 pr-2 text-base font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, qui! Fugiat ?</p>
            <button className='bg-gray-700 mt-5 w-[90%]  mx-[5%] rounded text-white'>Add Card</button>
          </div>,
          categories: "accessories",
        },
        
      ]
    
      const filterIIthems = category === 'all' ? ithems : ithems.filter(ithem => ithem.categories == category)
    
  return (
    <div>

        <div className='pl-[8rem] pb-[12rem] '>
            <h1 className='font-bold text-2xl py-9'>Feuture Products</h1>
            <div className='flex gap-5'>
          <div className='border-1 w-[280px] h-[380px] relative'>
            <img src={Liam} alt="" className='w-full h-[200px] ' />
            <h1 className='absolute top-1 left-2 bg-black  text-white text-sm text-[14px] rounded-2xl px-2'>Feutute</h1>
            <div className='absolute top-1 right-2 bg-white'>

            </div>
            <h1 className='font-bold pl-3 text-lg text-[18px]'>Hand Phone</h1>
            <p className='pl-3 text-sm text-gray-600 text-[14px]'>Technology Product</p>
            <p className='pl-3 pr-2 text-base font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, qui! Fugiat ?</p>
            <button className='bg-gray-700 mt-5 w-[90%]  mx-[5%] rounded text-white'>Add Card</button>
          </div>
          <div className='border-1 w-[280px] h-[380px] relative'>
            <img src={Liam} alt="" className='w-full h-[200px] ' />
            <h1 className='absolute top-1 left-2 bg-black  text-white text-sm text-[14px] rounded-2xl px-2'>Feutute</h1>
            <div className='absolute top-1 right-2 bg-white'>

            </div>
            <h1 className='font-bold pl-3 text-lg text-[18px]'>Hand Phone</h1>
            <p className='pl-3 text-sm text-gray-600 text-[14px]'>Technology Product</p>
            <p className='pl-3 pr-2 text-base font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, qui! Fugiat ?</p>
            <button className='bg-gray-700 mt-5 w-[90%]  mx-[5%] rounded text-white'>Add Card</button>
          </div>
            </div>
            
        </div>

          {/*Start  Categor Bellow*/}
          <div className='px-20'>
              <div>
                  <h1 className='font-bold text-[22px]'>Browse By Category</h1>
                  <div className='flex gap-1.5 px-80 justify-center'>
                      <button className='bg-gray-300 px-4 rounded' onClick={() => setCategory("all")}>All</button>
                      <button className='bg-gray-300 px-4 rounded' onClick={() => setCategory("men")}>Men</button>
                      <button className='bg-gray-300 px-4 rounded' onClick={() => setCategory("women")}>Women</button>
                      <button className='bg-gray-300 px-4 rounded' onClick={() => setCategory("accessories")}>Accessories</button>
                  </div>
              </div>
              <div className='flex gap-5 pt-5 justify-center'>
                  {
                      filterIIthems.map(ithem => (
                          <div key={ithem.id}>
                              <h1>{ithem.name}</h1>
                          </div>
                      ))
                  }
              </div>
          </div>
    </div>
  )
}

export default Feuture
