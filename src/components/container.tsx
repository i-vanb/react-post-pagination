import {ReactNode} from "react";
import cn from "classnames";

type Props = {
  children: ReactNode,
  className?: string
}

export const Container = ({children, className}:Props) => {

  return(
    <div className={cn('max-w-[1200px] m-auto px-6', className)}>
      {children}
    </div>
  )
}