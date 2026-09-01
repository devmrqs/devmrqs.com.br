export const shadowBox =
  "shadow-[0px_2px_4px_rgba(0,0,0,0.2),0px_7px_13px_-3px_rgba(0,0,0,0.1),0px_-1px_0px_inset_rgba(0,0,0,0.1)]";

export const hoverShadowBox =
  "hover:shadow-[0px_2px_4px_rgba(0,0,0,0.2),0px_7px_13px_-3px_rgba(0,0,0,0.1)]";

export const roundButtonClasses = `bg-[rgba(255,255,255,0.3)] px-4 py-2.5 border-[0.5px] border-[rgba(0,0,0,0.08)] text-[rgb(0,0,0,0.8)] text-base rounded-full hover:scale-100 hover:bg-white duration-500 font-semibold ${hoverShadowBox}`;

export const themeButtonClasses = `w-full flex items-center gap-2.5 px-4 py-2 text-base hover:bg-[rgba(0,0,0,0.05)] hover:rounded-full duration-300`;

export const dropdownContainerClasses = `absolute top-full right-0 mt-2.5 bg-white rounded-xl ${shadowBox} flex flex-col overflow-hidden w-36 z-50 py-1.5 px-2`;
