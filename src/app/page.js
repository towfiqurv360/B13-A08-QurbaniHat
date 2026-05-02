import Link from 'next/link';

export default function Home() {

  const featuredAnimals = [
    {
      id: 1,
      name: "Premium Bull",
      breed: "Shahiwal Breed",
      price: "1,20,000",
      image: "https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&q=80&w=400",
      isNew: true,
    },
    {
      id: 2,
      name: "Black Angus Bull",
      breed: "Angus Cross",
      price: "1,45,000",
      image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&q=80&w=400",
      isNew: false,
    },
    {
      id: 3,
      name: "Deshi Brahman",
      breed: "Brahman",
      price: "1,80,000",
      image: "https://i.ibb.co.com/Dg6wjfYV/uttam-patidar-qsjs7-Dw0ziw-unsplash.jpg",
      isNew: true,
    },
    {
      id: 4,
      name: "Mirka Red Bull",
      breed: "Sindhi",
      price: "95,000",
      image: "https://i.ibb.co.com/jkGzgpGK/nipun-chandra-surnilla-Jw-WLnf-7-Ss-E-unsplash.jpg",
      isNew: false,
    },
  ];

  return (
    <div className="overflow-x-hidden">
      
      <div 
        className="hero min-h-[85vh] relative mt-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')" }}
      >
        <div className="hero-overlay bg-black/60 bg-gradient-to-r from-black/70 to-transparent"></div>
        <div className="hero-content text-neutral-content justify-start w-full px-6 md:px-12">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Find Your Perfect <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Qurbani Animal
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
              Browse through our premium collection of healthy and well-cared cows and goats. Book your animal easily today with a single click!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/animals" className="btn bg-blue-600 hover:bg-blue-700 border-none text-white px-8 rounded-full text-lg shadow-xl transition-all hover:scale-105">
                Browse Animals
              </Link>
              <button className="btn btn-outline border-white text-white hover:bg-white hover:text-black px-8 rounded-full text-lg transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Featured Animals</h2>
            <div className="h-1.5 w-20 bg-emerald-500 rounded-full"></div>
            <p className="text-gray-500 mt-4">Top choices recently added to our farm.</p>
          </div>
          <Link href="/animals" className="text-blue-600 font-bold hover:underline">View All Animals →</Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
           {featuredAnimals.map((animal) => (
             <div key={animal.id} className="card bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all rounded-3xl overflow-hidden group">
               
               <div className="h-48 relative overflow-hidden bg-gray-100 rounded-2xl">
                 <img 
                   src={animal.image} 
                   alt={animal.name} 
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                 
                 {animal.isNew && (
                   <span className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm">NEW</span>
                 )}
               </div>

               <div className="p-5">
                 <h3 className="font-bold text-xl mb-1 text-gray-800 line-clamp-1">{animal.name}</h3>
                 <p className="text-sm text-gray-500 mb-4 font-medium">{animal.breed}</p>
                 <div className="flex justify-between items-center">
                   <span className="text-emerald-600 font-bold text-lg">৳ {animal.price}</span>
                   <Link href={`/details-page/${animal.id}`}>
                     <button className="btn btn-xs btn-outline btn-primary rounded-lg">Details</button>
                   </Link>
                 </div>
               </div>

             </div>
           ))}
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Essential Qurbani Tips</h2>
            <p className="text-gray-400">Everything you need to know before buying your sacrificial animal.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 cursor-pointer">
            <div className="bg-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-emerald-500 transition-colors">
              <div className="w-14 h-14 bg-emerald-500/10 flex items-center justify-center rounded-2xl mb-6 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Check Health</h3>
              <p className="text-gray-400 leading-relaxed">Ensure the animal is active, bright-eyed, and has no visible wounds or physical defects.</p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-blue-500 transition-colors ">
              <div className="w-14 h-14 bg-blue-500/10 flex items-center justify-center rounded-2xl mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Check Age</h3>
              <p className="text-gray-400 leading-relaxed">For a cow, it must be at least 2 years old. For a goat, it should be at least 1 year old.</p>
            </div>

            <div className="bg-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-purple-500 transition-colors">
              <div className="w-14 h-14 bg-purple-500/10 flex items-center justify-center rounded-2xl mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Proper Weight</h3>
              <p className="text-gray-400 leading-relaxed">Select an animal with a healthy build and appropriate weight for the price you are paying.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Our Top Breeds</h2>
        <p className="text-gray-500 mb-12">Discover the finest local and international breeds we offer.</p>
        
        <div className="flex flex-wrap justify-center gap-6 ">
          {["Shahiwal", "Brahman", "Gir", "Australian", "Jamunapari", "Local Deshi"].map((breed) => (
            <div key={breed} className="px-8 py-4 bg-white border border-gray-200 rounded-2xl font-bold text-gray-700 hover:border-emerald-500 hover:text-emerald-600 hover:shadow-md transition-all cursor-pointer ">
              {breed}
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
}