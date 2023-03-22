import React from 'react'

const Signup = () => {
  return (
    <div>
        <div className='h-[100vh] bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/d049a3bd-40ee-411b-9f16-d1def798d43b/d6aeb5a9-b14c-42d4-999e-c2f0d6c60f04/IN-en-20230313-popsignuptwoweeks-perspective_alpha_website_small.jpg")] object-cover bg-no-repeat '>
        <div className="bg-[#0000009c] h-full w-full flex justify-center items-center">
          <div className="bg-[#000000] w-[450px] opacity-75 mt-12">
            <div className="flex flex-col items-center rounded ">
              <h2 className="text-[28px] text-white font-semibold mt-16 mb-8">
                Sign Up
              </h2>
              <input
                type="text"
                placeholder="Full Name"
                className="bg-gray-900 rounded  w-[350px] px-4 py-3 text-white mb-5"
              />
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="bg-gray-900 rounded  w-[350px] px-4 py-3 text-white mb-5"
              />
              <input
                type="Password"
                placeholder="Password"
                className="bg-gray-900 rounded  w-[350px] px-4 py-3 text-white mb-5"
              />
              <input
                type="Password"
                placeholder="Confirm Password"
                className="bg-gray-900 rounded  w-[350px] px-4 py-3 text-white mb-5"
              />
              <button className="bg-red-600 font-semibold px-4 py-3 text-center text-white rounded w-[350px] opacity-100">
                Sign Up
              </button>
              <div className="flex gap-36 mt-2">
                <div>
                  <input type="checkbox" defaultChecked id="checkbox" />
                  <label for="checkbox" className="text-white ml-2">
                    Remember Me
                  </label>
                </div>
                <p className="text-white">Need Help?</p>
              </div>
              <p className="text-white mt-12 mr-28 mb-8">Already a member <a href="/signin" className="text-white font-semibold ml-2 mt-20 mb-12">Sign In now</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup