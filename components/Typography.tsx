import React from 'react'
import IntroText from './IntroText'

const Typography = () => {
  return (
          <section className="relative">
          <div className="px-10 md:px-20 lg:px-32 py-10 space-y-10">
            <IntroText heading={'Typography'} paraText={'I wanted to ensure a consistent and cohesive user interface and visual experience across all screens to make navigation smooth and have users order their food in just a few taps.'} />
            <div className="flex flex-col items-start justify-center gap-16">
              <h2 className="font-bold text-6xl pl-2">Poppins</h2>
              <div className="flex flex-wrap items-center gap-16">
                <div className="max-w-[500px]">
                  <img src="./poppinsFont.png" />
                </div>
                <p className="max-w-[500px] text-lg">Poppins is a versatile and modern font known for its geometric design and clean lines. Developed by the Indian Type Foundry, Poppins is a popular choice for web and print design due to its readability and aesthetic appeal. This typeface features a uniform and balanced structure, with rounded letters and consistent stroke thickness, making it suitable for various applications, from headlines to body text. The Poppins font family includes multiple weights and styles, providing designers with a range of options to create visually appealing and cohesive designs. Its contemporary look and adaptability have made Poppins a favorite among designers worldwide.</p>
              </div>
              <div className="space-y-8">
                <h2 className='text-4xl pl-4'>Color Style Guide</h2>
                <div className="flex flex-wrap">
                  <img src="./styleGuide1.png" width={600} />
                  <img src="./styleGuide2.png" width={600} />
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Typography
