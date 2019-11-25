
import React, { SFC, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { render } from 'react-dom';
import { Renderer, Mesh, MeshBasicMaterial, BoxGeometry } from 'three';

type Render = Renderer & { setClearColor: (s: string) => void };
type Animate = {
    cube?: any,
    renderer?: any,
    scene?: any,
    camera?: any
}


export const RenderCanvas: SFC = () => {
    const canvas:any = useRef<HTMLInputElement>();
    let ani:any

    useEffect(() => {
        const { current: ref } = canvas;
        const width = ref.clientWidth
        const height = ref.clientHeight

        //ADD SCENE
        const scene = new THREE.Scene()
        //ADD CAMERA
        const camera = new THREE.PerspectiveCamera(
            75,
            width / height,
            0.1,
            1000
        )
        camera.position.z = 4
        //ADD RENDERER
        const renderer: Render = new THREE.WebGLRenderer({ antialias: true })
        renderer.setClearColor('#000000')
        renderer.setSize(width, height)
        ref.appendChild(renderer.domElement)
        //ADD CUBE
        const geometry: BoxGeometry = new THREE.BoxGeometry(1, 1, 1)
        const material: MeshBasicMaterial = new THREE.MeshBasicMaterial({ color: '#faebd7' })
        const cube: Mesh = new THREE.Mesh(geometry, material)
        scene.add(cube)
        start(null, { cube, renderer, scene, camera })

    }, [])

    function start<T, S extends Animate>(timeStamp: T, { cube, renderer, scene, camera }: S) {

         ani = animate({cube, renderer, scene, camera })
        const farmeId = window.requestAnimationFrame((t) => ani(t))
    }
    function animate<T extends Animate>( { cube, renderer, scene, camera }:T) {
        return (t:any) => {
            debugger
            if (cube) {
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;
            }
            renderer && renderer.render(scene, camera)
            const frameId = window.requestAnimationFrame((t) => ani(t))
        }
    }

    // const camera = new Three.PerspectiveCamera(60, width / height, 0.1, 1000)
    return <div ref={canvas} style={{ height: '500px', width: "500px" }} />
}