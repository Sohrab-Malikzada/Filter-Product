import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaChevronUp } from "react-icons/fa";
import Liam from '../assets/Liam.jpg';

import { FaHeart } from 'react-icons/fa';
import { LuHeart } from 'react-icons/lu';
import { IoCartOutline } from "react-icons/io5";

const Product = () => {
  const categories = ["Electronics", "Clothing", "Home", "Accessories"]
  // const products =[
  //   {id:1, name:"Men T-shirt",  category:"Men"},
  //   {id:2, name:"Wmen Dress", category:"Women"},
  //   {id:3, name:"Unisex Cap", category:"Accessories"},
  //   {id:4, name:"Women Handlbag", category:"Women"},
  //   {id:5, name:"Men Shoes", category:"Men"}
  // ]
  const [lamp, setLamp] = useState(false);
  const toggleHeart = () => setLamp(!lamp);

  // const [category, setCategory] = useState();

  const products = [
    {
      id: "001",
      title: "Wireless Earbuds",
      price: "$129.99",
      brand: "Teach Essentials",
      description: "Premium wirless earbudes with noise caclleation and 25-hour battery lif...",
      image: Liam,
      category: "Electronics"
    },
    {
      id: "002",
      title: "Leather Laptop Sleeve",
      price: "$39.99",
      brand: "Modern Home",
      description: "Handcrafted genuine leather laptop sleeve with soft interiro lining...",
      image: Liam,
      category: "Clothing"
    },
    {
      id: "003",
      title: "Minimalist Desk Lamp",
      price: "$49.99",
      brand: "Modern Home",
      description: "A sleek and modern desk lamp perfect for your workspace. Feature...",
      image: Liam,
      category: "Home"
    },
    {
      id: "004",
      title: "Minimalist Watch",
      price: "$89.99",
      brand: "Artisan Goods",
      description: "Simple yet elegant timepiece with a stainless steel case and genuine...",
      image: Liam,
      category: "Accessories"
    }
  ];



  const [selectCategories, setSelectCategories] = useState([])

  const handleCheckboxChange = (category) => {
    if (selectCategories.includes(category)) {
      setSelectCategories(prev => prev.filter(c => c !== category))
    } else {
      setSelectCategories(prev => [...prev, category])
    }
  }

  const filterProducts = selectCategories.length === 0 ? products
    : products.filter(p => selectCategories.includes(p.category));



  // sort
  const [sortOrder, setSortOrder] = useState('az');

  const sortedProducts = [...filterProducts].sort((a, b) => {
    const priceA = parseFloat(a.price.replace('$', ''));
    const priceB = parseFloat(b.price.replace('$', ''));

    switch (sortOrder) {
      case 'az':
        return a.title.localeCompare(b.title);
      case 'za':
        return b.title.localeCompare(a.title);
      case 'low-high':
        return priceA - priceB;
      case 'high-low':
        return priceB - priceA;
      default:
        return 0;
    }
  });



  return (
    <div className='pl-[8rem] pt-10'>
      <div className='pb-5'>
        <h1 className='font-bold text-3xl '>Products</h1>
        <label className='flex border w-[25%] items-center pl-2 mt-3 rounded border-gray-400 hover:border-gray-600'>
          <span><CiSearch /></span>
          <input type="search" className='w-full outline-none pl-3' placeholder='search products...' />
        </label>
      </div>
      <div className='flex gap-10 pt-10'>
        <div className='space-y-2 bg-white shadow border border-gray-300 w-[250px] h-[450px] rounded p-3' >
          <div className='flex  items-center justify-between'>
            <h2 className='font-bold'>Filters </h2> <span>Reset</span>
          </div>
          <div className='flex justify-between pt-3'>
            <h2 className='font-[500]'>Category</h2>
            <span><FaChevronUp /></span>
          </div>
          {categories.map((cat) => (
            <label key={cat} className='block '>
              <input type="checkbox" value={cat}
                onChange={() => handleCheckboxChange(cat)}
                checked={selectCategories.includes(cat)}
                className='mr-2'
              />
              {cat}
            </label>
          ))}
          <hr className='text-gray-200' />
          <div >
            <div className='flex justify-between'>
              <h1>Price Range</h1>
              <span><FaChevronUp /></span>
            </div>
            <div className='flex justify-between pt-3'>
              <h1>$0</h1>
              <h1>$142</h1>
            </div>
          </div>
          <hr className='text-gray-200' />
          <div>
            <div className='flex justify-between pt-3'>
              <h2 className='font-[500]'>Vendors</h2>
              <span><FaChevronUp /></span>
            </div>
            {categories.map((cat) => (
              <label key={cat} className='block '>
                <input type="checkbox" value={cat}
                  onChange={() => handleCheckboxChange(cat)}
                  checked={selectCategories.includes(cat)}
                  className='mr-2 rounded outline-none'
                />
                {cat}
              </label>
            ))}
          </div>
        </div>
        <div className='w-full pr-10 ' >
          <div className='flex justify-between pr-10'>
            <h1>Showing 12 results</h1>
            <div className='flex'>
              <div className='items-center justify-between w-[185px] px-2 py-2 bg-white shadow border border-gray-300 mb-2 cursor-pointer raltive'>
                <select
                  className="border px-2 py-1 rounded block"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                  <option value="az">Name: A to Z</option>
                  <option value="za">Name: Z to A</option>
                  <option value="low-high">Price: Low to High</option>
                  <option value="high-low">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
          <h2 className='font-bold text-2xl pt-3 pb-3 '>Products</h2>
          <div className='grid grid-cols-3 gap-4 w-fit'>
            {sortedProducts.map(product => (
              <div key={product.id}>
                <div key={product.id} className='w-70 h-85 border border-gray-300 rounded shadow relative bg-white'>
                  <img src={product.image} alt={product.title} className='w-full h-[60%] transition-transform duration-300 hover:scale-90 hover:shadow-xl' />
                  <h1 className='absolute cursor-pointer bg-black rounded-2xl text-white px-3 top-1 left-2'>Featured</h1>
                  <button onClick={toggleHeart} className='absolute top-1 right-2 cursor-pointer bg-gray-200 rounded-full p-1'>
                    {lamp ? <FaHeart className='text-red-700' /> : <LuHeart />}
                  </button>
                  <div className='flex justify-between pr-2'>
                    <h1 className='font-bold pl-4'>{product.title}</h1>
                    <h1 className='font-bold pl-4'> {product.price}</h1>
                  </div>
                  <p className='text-[13px] pl-4 text-gray-600'>by {product.brand}</p>
                  <p className='text-[13px] pl-4 pr-2 text-gray-600'>{product.description}</p>
                  <button className='flex justify-center items-center gap-2 bg-gray-700 hover:bg-gray-600 mx-[5%] w-[90%] mt-2 rounded p-1 text-white cursor-pointer'>
                    <IoCartOutline /> Add to Cart
                  </button>
                </div>
              </div>
            ))}
            {filterProducts.length === 0 && <p>No product Found</p>}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Product

