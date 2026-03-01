"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function ThreeStars({ theme }) {
  const canvasRef = useRef();

  useEffect(() => {
    // Scene, camera, renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    canvasRef.current.appendChild(renderer.domElement);

    // Realistic curtain setup
    const curtainGroup = new THREE.Group();
    const curtainStrings = [];
    const curtainCount = 40;
    const curtainLength = 80;
    const curtainSpacing = 5;
    // Curtain colors: alternating deep red and gold
    const curtainColors = [0xB22222, 0xFFD700];
    for (let i = 0; i < curtainCount; i++) {
      const points = [];
      for (let j = 0; j < curtainLength; j++) {
        points.push(new THREE.Vector3(
          (i - curtainCount / 2) * curtainSpacing,
          80 - j * 2,
          0
        ));
      }
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({ color: curtainColors[i % curtainColors.length], linewidth: 4 });
      const line = new THREE.Line(geometry, material);
      curtainGroup.add(line);
      curtainStrings.push({ line, basePoints: points, color: curtainColors[i % curtainColors.length] });
    }
    scene.add(curtainGroup);

    // Hover animation state
    let isCurtainHovered = false;
    let mouseX = 0;
    const handlePointerMove = (event) => {
      if (!renderer.domElement) return;
      const rect = renderer.domElement.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      isCurtainHovered = Math.abs(mouseX) < 1;
    };
    renderer.domElement.addEventListener("mousemove", handlePointerMove);

    // (Removed star logic)

    function animate() {
      requestAnimationFrame(animate);

      // Animate curtain strings (realistic curtain motion)
      curtainStrings.forEach(({ line, basePoints }, idx) => {
        const newPoints = basePoints.map((pt, j) => {
          // Curtain wave motion, more pronounced at bottom, reacts to mouseX
          let offsetX = 0;
          let offsetY = 0;
          if (isCurtainHovered) {
            offsetX = Math.sin(Date.now() * 0.004 + idx * 0.3 + j * 0.15 + mouseX * 2) * (j / curtainLength) * 6;
            offsetY = Math.cos(Date.now() * 0.002 + idx * 0.2 + mouseX * 2) * (j / curtainLength) * 2;
          }
          return new THREE.Vector3(pt.x + offsetX, pt.y + offsetY, pt.z);
        });
        line.geometry.setFromPoints(newPoints);
      });
      renderer.render(scene, camera);
    }

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.domElement.removeEventListener("mousemove", handlePointerMove);
      renderer.dispose();
      scene.clear();
    };
  }, [theme]);

  return <div ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" />;
}