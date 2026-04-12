import React from 'react';

const AdSidebar = () => {
  return (
    <aside className="hidden lg:block w-[300px] shrink-0 sticky top-24 self-start">
      <div className="flex flex-col gap-6">
        {/* Ad Container */}
        <div className="w-[300px] h-[600px] bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center p-4">
          <span className="text-[10px] text-white/20 uppercase tracking-widest mb-4">Sponsored</span>
          <div className="w-full h-full bg-white/5 rounded-lg flex items-center justify-center border border-dashed border-white/10">
            <span className="text-sm text-white/30 text-center px-6">
              Google AdSense<br />300 x 600 Banner
            </span>
          </div>
        </div>

        {/* Small Ad Container (Optional) */}
        <div className="w-[300px] h-[250px] bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center p-4">
          <span className="text-[10px] text-white/20 uppercase tracking-widest mb-4">Advertisement</span>
          <div className="w-full h-full bg-white/5 rounded-lg flex items-center justify-center border border-dashed border-white/10">
            <span className="text-sm text-white/30">300 x 250</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AdSidebar;
