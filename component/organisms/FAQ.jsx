import React from 'react'
import Heading from '../atoms/Heading'
import FAQdrop1 from '../atoms/FAQdrop1'

function FAQ() {
  return (
    <div>
      <div className="FAQ  pt-[30px] ">
        <Heading level="2">FAQ</Heading>
        <div className="xl:flex lg:flex  block justify-between ">
          <div className="drops xl:w-[70%] lg:w-[70%] md:w-[100%] sm:w-[100%] w-[100%]">
            <div className="divide-y w-full flex flex-col gap-[2px] " >
              <FAQdrop1
                parent="How can Strat Up assist me with purchasing a watch?"
                child="Yes – Strat Up takes authenticity seriously. All of our timepieces are inspected under high magnification for any potential signs of fraudulent pieces or parts by our in-house Swiss-trained watchmakers before they are listed on our platform. In addition, all of our sellers must undergo a thorough vetting process before being able to list on our platform. We also work closely with watch brands via a Certified Pre-Owned programme, where the watches have been authenticated by the brands themselves."
              ></FAQdrop1>
              <FAQdrop1
                parent="Are the watches listed on  Strat Up authentic?"
                child="Yes – Strat Up takes authenticity seriously. All of our timepieces are inspected under high magnification for any potential signs of fraudulent pieces or parts by our in-house Swiss-trained watchmakers before they are listed on our platform."
              ></FAQdrop1>
              <FAQdrop1
                parent="Are prices negotiable? Can I make an offer that is lower than the watch’s listed  price?"
                child="Yes – Strat Up takes authenticity seriously. All of our timepieces are inspected under high magnification for any potential signs of fraudulent pieces or parts by our in-house Swiss-trained watchmakers before they are listed on our platform."
              ></FAQdrop1>
              <FAQdrop1
                parent="Each watch on the marketplace has a Strat Up grade. What  does this grade mean?"
                child="Yes – Strat Up takes authenticity seriously. All of our timepieces are inspected under high magnification for any potential signs of fraudulent pieces or parts by our in-house Swiss-trained watchmakers before they are listed on our platform. "
              ></FAQdrop1>
            </div>
          </div>
          <div className="xl:w-[25%] lg:w-[25%] md:w-[100%] w-[100%] sm:w-[100%] h-[398px] my-[20px] hidden sm:block">
  <img className="w-full h-[398px] object-contain" src="/assits/assits/image/home FAQ.png" alt="" />
</div>

        </div>
      </div>
    </div>
  )
}

export default FAQ
 