import  {useEffect, useState } from "react";

function useOnScreen(options){
    const [ref, setRef] = useState(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
       const observer = new IntersectionObserver((entries, observer) => {
           entries.forEach(entry => {
               if(!entry.isIntersecting){
                   return;
               }
               setVisible(entry.isIntersecting)
           })
       }, options)

       if(ref){
           observer.observe(ref)
       }
    }, [ref, options])

    return [setRef, visible]
}

export default useOnScreen