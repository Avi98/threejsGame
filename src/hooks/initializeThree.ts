import React from 'react';
import * as three from 'three';

export const useInitalize = (ref:any) =>{
    const width = ref.width;
    const height = ref.height;

    const camera = new three.PerspectiveCamera(60, width/height, 0.1, 1000);
    const renderer = new three.WebGLRenderer({alpha:true});

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = three.PCFSoftShadowMap;
 
}