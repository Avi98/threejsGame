import React,{forwardRef, FC} from 'react'

type Props ={}
export type Ref =  HTMLDivElement ;
/**todo find ref */
export const Root = forwardRef<Ref, Props>((_, ref) => <div ref={ref} style={{width: '10vw', height:'10vh'}}/>)