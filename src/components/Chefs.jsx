// import React from 'react';
// import { Reveal, RevealGroup } from '@/components/ui/reveal';

// const Chefs = () => {
//   const chefs = [
//     {
//       id: 1,
//       name: "Walter White",
//       role: "Executive Chef",
//       bio: "Award-winning chef with 15 years of experience in fine dining. Specializes in French and Mediterranean cuisines.",
//       image: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?q=80&w=1287&auto=format&fit=crop",
//       social: {
//         twitter: "#",
//         facebook: "#",
//         instagram: "#",
//         linkedin: "#"
//       }
//     },
//     {
//       id: 2,
//       name: "Sarah Jhonson",
//       role: "Sous Chef",
//       bio: "Passionate about combining traditional techniques with modern presentation. Expert in pasta and risotto dishes.",
//       image: "https://images.unsplash.com/photo-1587116933785-9a1430c8cec7?q=80&w=1287&auto=format&fit=crop",
//       social: {
//         twitter: "#",
//         facebook: "#",
//         instagram: "#",
//         linkedin: "#"
//       }
//     },
//     {
//       id: 3,
//       name: "William Anderson",
//       role: "Pastry Chef",
//       bio: "Master of sweet creations with a background in French pastry. Known for innovative dessert presentations.",
//       image: "https://images.unsplash.com/photo-1542178243-bc20383d9338?q=80&w=1480&auto=format&fit=crop",
//       social: {
//         twitter: "#",
//         facebook: "#",
//         instagram: "#",
//         linkedin: "#"
//       }
//     }
//   ];
  
//   return (
//     <section id="chefs" className="py-24 bg-gray-50">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <Reveal>
//             <span className="section-subtitle">Our Team</span>
//             <h2 className="section-title text-3xl md:text-4xl">
//               Our <span className="text-restaurant-red">Professional Chefs</span>
//             </h2>
//           </Reveal>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <RevealGroup>
//             {chefs.map((chef) => (
//               <Reveal key={chef.id} animation="fade-up">
//                 <div className="bg-white rounded-lg overflow-hidden shadow-md group">
//                   {/* Chef Image */}
//                   <div className="relative overflow-hidden">
//                     <img 
//                       src={chef.image} 
//                       alt={chef.name}
//                       className="w-full h-80 object-cover transition-500 group-hover:scale-110"
//                     />
                    
//                     {/* Icons */}
//                     <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-300">
//                       <a href={chef.social.twitter} className="bg-restaurant-red text-white p-2 rounded-full hover:bg-white hover:text-restaurant-red transition-300">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                           <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
//                         </svg>
//                       </a>
//                       <a href={chef.social.facebook} className="bg-restaurant-red text-white p-2 rounded-full hover:bg-white hover:text-restaurant-red transition-300">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                           <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
//                         </svg>
//                       </a>
//                       <a href={chef.social.instagram} className="bg-restaurant-red text-white p-2 rounded-full hover:bg-white hover:text-restaurant-red transition-300">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                           <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
//                         </svg>
//                       </a>
//                       <a href={chef.social.linkedin} className="bg-restaurant-red text-white p-2 rounded-full hover:bg-white hover:text-restaurant-red transition-300">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                           <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
//                         </svg>
//                       </a>
//                     </div>
//                   </div>
                  
//                   {/* Chef Info */}
//                   <div className="p-6">
//                     <h3 className="text-xl font-semibold mb-1">{chef.name}</h3>
//                     <p className="text-restaurant-red italic mb-4">{chef.role}</p>
//                     <p className="text-restaurant-text">{chef.bio}</p>
//                   </div>
//                 </div>
//               </Reveal>
//             ))}
//           </RevealGroup>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Chefs;
