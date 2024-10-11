import { create } from "zustand";

const useCart = create((set) => ({
    count: parseInt(localStorage.getItem("Cartcount")) || 0,
    // setcount: () => set((state) => ({ count: state.count + 1 }))
    inc :()=>set((state)=>{
      var countstate = state.count+1;
      localStorage.setItem("Cartcount",countstate);
      return {count:countstate}
    }),
    dec :()=>set((state)=>{
      if (state.count>0){
        var countstate = state.count-1;
        localStorage.setItem("Cartcount",countstate);
        return {count:countstate};
      }
      return state;
    })
}))

export default useCart;