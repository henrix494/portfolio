import * as THREE from "three";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF, ContactShadows } from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a as three } from "@react-spring/three";
import { a as web } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { Nodes, Materials } from "@/types/types";
import { useForm, SubmitHandler } from "react-hook-form";
import { ColorRepresentation } from "three";

type ModelProps = {
  open: boolean;
  hinge: any;
};

function Model({ open, hinge, ...props }: ModelProps) {
  const group = useRef<THREE.Group>(null!);
  // Load model
  const { nodes, materials } = useGLTF("/mac-draco.glb") as unknown as {
    nodes: Nodes;
    materials: Materials;
  };
  // Take care of cursor state on hover
  const [hovered, setHovered] = useState(false);
  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );
  // Make it float in the air when it's opened
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        open ? Math.cos(t / 10) / 10 + 0.25 : 0,
        0.1
      );
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        open ? Math.sin(t / 10) / 4 : 0,
        0.1
      );
      group.current.rotation.z = THREE.MathUtils.lerp(
        group.current.rotation.z,
        open ? Math.sin(t / 10) / 10 : 0,
        0.1
      );
      group.current.position.y = THREE.MathUtils.lerp(
        group.current.position.y,
        open ? (-2 + Math.sin(t)) / 3 : -4.3,
        0.1
      );
    }
  });

  return (
    <group
      ref={group}
      {...props}
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
      dispose={null}
    >
      <three.group rotation-x={hinge} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            material={materials.aluminium}
            geometry={nodes["Cube008"].geometry}
          />
          <mesh
            material={materials["matte.001"]}
            geometry={nodes["Cube008_1"].geometry}
          />
          <mesh
            material={materials["screen.001"]}
            geometry={nodes["Cube008_2"].geometry}
          />
        </group>
      </three.group>
      <mesh
        material={materials.keys}
        geometry={nodes.keyboard.geometry}
        position={[1.79, 0, 3.45]}
      />
      <group position={[0, -0.1, 3.39]}>
        <mesh
          material={materials.aluminium}
          geometry={nodes["Cube002"].geometry}
        />
        <mesh
          material={materials.trackpad}
          geometry={nodes["Cube002_1"].geometry}
        />
      </group>
      <mesh
        material={materials.touchbar}
        geometry={nodes.touchbar.geometry}
        position={[0, -0.03, 1.2]}
      />
    </group>
  );
}
interface IFormInput {
  name: string;
  email: string;
}
export default function Contact() {
  const [open, setOpen] = useState(false);
  // We turn this into a spring animation that interpolates between 0 and 1
  const props = useSpring({ open: Number(open) });
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  useEffect(() => {
    // Set 'open' based on whether the component is in view
    setOpen(inView);
  }, [inView]);
  // Add styles to make the component take up the whole screen
  const containerStyles = {
    height: "100vh", // 100% of the viewport height
    width: "100vw", // 100% of the viewport width
    overflow: "hidden", // Optional: Hide overflow if necessary
  };
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <web.main
      style={{
        ...containerStyles,
        background: props.open.to([0, 1], ["#f0f0f0", "#000000"]),
      }}
    >
      <web.div className={"  flex  w-[100%] justify-center"}>
        <web.form
          className={`flex flex-col items-center justify-center  w-[40%] gap-5`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <web.h1
            className={`  mt-20  ${
              open ? "text-white" : "text-black"
            } text-4xl overflow-hidden font-mono font-bold`}
          >
            צור קשר
          </web.h1>
          <web.label
            htmlFor="email"
            className={`${
              open ? "text-white" : "text-black"
            } self-start text-2xl`}
          >
            אמייל
          </web.label>
          <web.input
            {...register("email", { required: true, maxLength: 20 })}
            id="email"
            name="email"
            className={` w-full  outline-none p-2 ${
              open
                ? "border-b-[white] border-b-2 bg-black text-white"
                : "border-b-[black] border-b-2 bg-white "
            }`}
          ></web.input>
          <web.label
            htmlFor="name"
            className={`${
              open ? "text-white" : "text-black"
            } self-start text-2xl`}
          >
            שם
          </web.label>
          <web.input
            id="name"
            name="name"
            className={`outline-none w-full p-2 ${
              open
                ? "border-b-[white] border-b-2 bg-black text-white"
                : "border-b-[black] border-b-2 bg-white "
            }`}
          ></web.input>
          <input
            className={` cursor-pointer ${open ? "text-white" : "text-black"}`}
            type="submit"
          />
        </web.form>
      </web.div>

      <web.div ref={ref} className={"h-[60%] max-lg:h-[40%]"}>
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, -30], fov: 35 }}>
          <three.pointLight
            position={[10, 10, 10]}
            intensity={1.5}
            color={props.open.to([0, 1], ["#f0f0f0", "#d25578"])}
          />
          <Suspense fallback={null}>
            <group
              rotation={[0, Math.PI, 0]}
              onClick={(e) => (e.stopPropagation(), setOpen(!open))}
            >
              <Model
                open={inView}
                hinge={props.open.to([0, 1], [1.575, -0.425])}
              />
            </group>
            <Environment preset="city" />
          </Suspense>
          <ContactShadows
            position={[0, -4.5, 0]}
            opacity={0.4}
            scale={20}
            blur={1.75}
            far={4.5}
            color={
              props.open
                ? (props.open
                    .to(
                      [0, 1],
                      ["rgba(0, 0, 0, 0.4)", "rgba(255, 255, 255, 0.4)"]
                    )
                    .to(
                      (val) =>
                        new THREE.Color(val) as unknown as ColorRepresentation
                    ) as unknown as ColorRepresentation)
                : undefined!
            }
          />
        </Canvas>
      </web.div>
    </web.main>
  );
}
