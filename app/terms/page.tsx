

"use client";

import { motion } from "framer-motion";
const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};
export default function Terms() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen min-w-screen font-sans sm:overflow-hidden">
      
      <motion.div 
           initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      
      className="w-full z-10 py-12">
        <div className="max-w-4xl mx-auto px-6  md:px-12 py-12">
          <h1 className="text-[3.75rem] font-medium text-[#39383F] pb-5 leading-none">
            Terms <br /> & Conditions
          </h1>
          <motion.ul 
          
           variants={listVariants}
  initial="hidden"
  animate="show"
          className="p-0">
            {[
              { id: "#privacy-policy", label: "Privacy Policy" },
              { id: "#terms-of-use", label: "Terms of Use" },
              { id: "#other-documents", label: "Other Legal Documents" },
            ].map(({ id, label }) => (
              <motion.li
                key={id}
         variants={itemVariants}
                whileHover={{ scale: 1.02, backgroundColor: "#F4F4F4" }}
                className="py-2 px-2 cursor-pointer"
              >
                <a href={id}>{label}</a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>

     
<motion.div

             initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}

className=" min-h-screen min-w-full md:w-1/2 h-screen bg-[#F4F4F4] overflow-y-auto   scrollbar-thin scrollbar-thumb-[#39383F] scrollbar-track-[#e7e7e7]  ">        
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-[#333]">
          <p className="pb-6">
            Below we describe how exactly and to what extent we process your personal data, as well as your own rights regarding the issue.
          </p>

          {/* Articles */}
          {[
            {
                id:"other-documents",
              title: 'Who is Personal Data Administrator?',
              body: 'HandsOn, s.r.o. IČO: 00000000, DIČ: CZ00000000, address: Mánesova 28, 120 00 Praha 2, registered at Městský soud Praha, sp. zn.: C 212454 The promoter of the event, whose identification can be found on the purchase form and on the ticket.'
            },
            {
                             id:"terms-of-use",
              title: 'Where do your personal data come from?',
              body: 'We gather personal data directly from you, either when you purchase a ticket, or when you sign up and create a profile at handson.cz.'
            },
            {
                             id:"personal-data",
              title: 'What kind of personal data do we collect?',
              body: 'Based on a ticket purchase: Your name, surname, e-mail, phone number, occasionally your address if necessary for the ticket to be delivered; Other data requested by the promoter which are necessary for the purchase to go through and which are marked by the (i) sign on the purchase form. If you sign up and create a profile: Your name, surname, and e-mail; Your profile photo, if you register through Facebook or if you upload it by yourself; The same data that are collected when you purchase a ticket, if you purchase it while logged in.'
            },
            {
                             id:"processing-purpose",
              title: 'Why are we processing your personal data?',
              body: "For the purpose of fulfilling the contract about the ticket purchase, which means: Sending the ticket; Informing about changes in the event program; Checking your ticket and enabling you to enter the event; Handling complaints and potentially paying the refund for the entrance fee. For administrative purposes, and to ensure your profile functions correctly, which means: Creating personalized offers and recommending you events you might like; Connecting you with people sharing similar interests. For the purpose of processing data on the basis of StayIn or the promoter’s legitimate interest, which means: Offering products and services related to the event (e. g. accommodation, transport, accompanying program); Preventing and revealing fraud behavior (e. g. reselling tickets for the purpose of profit without proper authorization); Investigating the customers’ shopping behavior. For the purpose of sending marketing offers from StayIn and the promoter, which means: In case you give us consent to receive “StayIn and Promoter’s News”, we will give your e-mail address to the promoter of the event, who can then contact you about other offers they think might be interesting for you. The explicit consent to receive “StayIn and Promoter's News” can only be given by a person who is at least 16 years old. In that case, processing your personal data is managed by the terms of the promoter. In case you give us consent to receive “StayIn and Promoter’s News”, we can transfer some of your personal data required to match your StayIn and Facebook profiles. Facebook can then display StayIn and promoter’s offers of events that might be interesting for you via its own pixels. You have the right to dismiss your consent to receive “StayIn and Promoter’s News” any time you want, through a link which is found below each marketing offer."
            }
          ].map(({ id, title, body },i) => (
            <motion.article key={id}  id={id} 
            
             initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1}}
              transition={{ delay: i * 0.7 }}
            
            
            
            className="pb-6 scroll-mt-24">
              <h2 className="font-bold pb-3">{title}</h2>
              <p className="text-[#333333]">{body}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
