import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

/**
 * FooterNetworkGlobe
 *
 * True 100% Transparent Responsive 3D Digital Network Globe for Prime Web Tech.
 *
 * Features:
 * - 100% alpha transparency: NO background, NO fog, NO bloom, NO solid plane.
 * - Smooth thin vector wireframe (latitude rings + longitude meridians).
 * - Discrete screen-space points (sizeAttenuation: false) preventing any cloud/fog.
 * - Responsive tuning:
 *   - Desktop: Subtle wireframe emerging from bottom-center/bottom-right with 5 global arcs.
 *   - Mobile: Ultra-lightweight right-side partial hemisphere with 2 subtle arcs, minimal particles, and zero text obstruction.
 * - Stacking & Interaction: Decorative visual at z-[1] with pointer-events-none; all content stays at relative z-10.
 */
const FooterNetworkGlobe: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    // 1. Verify WebGL support safely
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        return !!(
          window.WebGLRenderingContext &&
          (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
        );
      } catch {
        return false;
      }
    };

    if (!checkWebGL()) {
      setHasWebGL(false);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || 600;
    let height = container.clientHeight || 600;

    let isMobile = window.innerWidth < 768;
    let isDark = document.documentElement.classList.contains('dark');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 2. Three.js Scene, Camera, Renderer (Strict 100% Alpha Transparency)
    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.8);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setClearColor(0x000000, 0);
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

      renderer.domElement.style.background = 'transparent';
      renderer.domElement.style.backgroundColor = 'transparent';
      renderer.domElement.style.display = 'block';
      renderer.domElement.style.width = '100%';
      renderer.domElement.style.height = '100%';
      renderer.domElement.style.pointerEvents = 'none';

      container.appendChild(renderer.domElement);
    } catch {
      setHasWebGL(false);
      return;
    }

    // 3. Globe Master Group
    const GLOBE_RADIUS = 2.35;
    const globeGroup = new THREE.Group();
    globeGroup.position.set(0, 0, 0); // Centered within its responsive container
    globeGroup.rotation.x = 0.28; // Subtle forward tilt for dynamic curvature
    scene.add(globeGroup);

    // Theme & Responsive color palette
    const getThemeColors = (dark: boolean, mobile: boolean) => ({
      wireframe: dark ? 0xffffff : 0x111111,
      wireframeOpacity: mobile ? (dark ? 0.13 : 0.08) : (dark ? 0.18 : 0.11),
      equatorOpacity: mobile ? (dark ? 0.22 : 0.14) : (dark ? 0.30 : 0.18),
      nodeColor: dark ? 0xffffff : 0x222222,
      nodeOpacity: mobile ? (dark ? 0.20 : 0.12) : (dark ? 0.28 : 0.16),
      gold: 0xd9b43b,     // Prime Web Tech Gold accent
      goldArcOpacity: mobile ? 0.32 : 0.48,
      goldGlow: 0xf3cc52, // Traveling pulse accent
    });

    let colors = getThemeColors(isDark, isMobile);

    // 4. Crisp circular texture for antialiased screen-space dots
    const createCircleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 16;
      canvas.height = 16;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.beginPath();
        ctx.arc(8, 8, 7, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
      }
      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    };

    const circleTexture = createCircleTexture();

    // 5. Latitude Rings (14 thin horizontal curved circles)
    const latLines: THREE.LineLoop[] = [];
    const latMaterial = new THREE.LineBasicMaterial({
      color: colors.wireframe,
      transparent: true,
      opacity: colors.wireframeOpacity,
      depthWrite: false,
    });

    const equatorMaterial = new THREE.LineBasicMaterial({
      color: colors.wireframe,
      transparent: true,
      opacity: colors.equatorOpacity,
      depthWrite: false,
    });

    const latCounts = 14;
    const segments = isMobile ? 48 : 64;
    for (let i = 1; i < latCounts; i++) {
      const phi = (i / latCounts) * Math.PI - Math.PI / 2;
      const rLat = GLOBE_RADIUS * Math.cos(phi);
      const yLat = GLOBE_RADIUS * Math.sin(phi);

      const points: THREE.Vector3[] = [];
      for (let j = 0; j <= segments; j++) {
        const theta = (j / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(rLat * Math.cos(theta), yLat, rLat * Math.sin(theta)));
      }
      const geom = new THREE.BufferGeometry().setFromPoints(points);
      const isEquator = i === latCounts / 2;
      const latLine = new THREE.LineLoop(geom, isEquator ? equatorMaterial : latMaterial);
      globeGroup.add(latLine);
      latLines.push(latLine);
    }

    // 6. Longitude Meridians (18 vertical circles)
    const lonLines: THREE.LineLoop[] = [];
    const lonCounts = 18;
    for (let i = 0; i < lonCounts; i++) {
      const theta = (i / lonCounts) * Math.PI;
      const points: THREE.Vector3[] = [];
      for (let j = 0; j <= segments; j++) {
        const phi = (j / segments) * Math.PI * 2;
        points.push(
          new THREE.Vector3(
            GLOBE_RADIUS * Math.cos(phi) * Math.sin(theta),
            GLOBE_RADIUS * Math.sin(phi),
            GLOBE_RADIUS * Math.cos(phi) * Math.cos(theta)
          )
        );
      }
      const geom = new THREE.BufferGeometry().setFromPoints(points);
      const lonLine = new THREE.LineLoop(geom, latMaterial);
      globeGroup.add(lonLine);
      lonLines.push(lonLine);
    }

    // 7. Sparse Screen-Space Antialiased Network Nodes
    // sizeAttenuation: false ensures points are ALWAYS crisp 2.2px screen dots, NEVER a cloud
    const particleCount = isMobile ? 24 : 50;
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const y = 1 - (i / (particleCount - 1)) * 2;
      const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
      const phi = i * 2.3999632;
      particlePositions[i * 3] = Math.cos(phi) * radiusAtY * GLOBE_RADIUS;
      particlePositions[i * 3 + 1] = y * GLOBE_RADIUS;
      particlePositions[i * 3 + 2] = Math.sin(phi) * radiusAtY * GLOBE_RADIUS;
    }

    const particleGeom = new THREE.BufferGeometry();
    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: colors.nodeColor,
      size: 2.2,
      sizeAttenuation: false,
      map: circleTexture,
      transparent: true,
      opacity: colors.nodeOpacity,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeom, particleMaterial);
    globeGroup.add(particles);

    // 8. Key Worldwide Technology Hubs (Gold Accent Nodes)
    const latLngToVector3 = (lat: number, lng: number, r: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      return new THREE.Vector3(
        -(r * Math.sin(phi) * Math.cos(theta)),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
      );
    };

    const hubs = [
      { lat: 18.52, lng: 73.85 },   // Pune, India (HQ)
      { lat: 25.20, lng: 55.27 },   // Dubai, UAE
      { lat: 51.50, lng: -0.12 },   // London, UK
      { lat: 40.71, lng: -74.00 },  // New York, US
      { lat: 1.35, lng: 103.81 },   // Singapore
      { lat: 37.77, lng: -122.41 }, // San Francisco, US
    ];

    const activeHubs = isMobile ? hubs.slice(0, 4) : hubs;
    const hubPoints = activeHubs.map((h) => latLngToVector3(h.lat, h.lng, GLOBE_RADIUS));

    const hubPositions = new Float32Array(hubPoints.length * 3);
    hubPoints.forEach((pt, i) => {
      hubPositions[i * 3] = pt.x;
      hubPositions[i * 3 + 1] = pt.y;
      hubPositions[i * 3 + 2] = pt.z;
    });

    const hubGeom = new THREE.BufferGeometry();
    hubGeom.setAttribute('position', new THREE.BufferAttribute(hubPositions, 3));
    const hubMaterial = new THREE.PointsMaterial({
      color: colors.gold,
      size: isMobile ? 4.0 : 4.8,
      sizeAttenuation: false,
      map: circleTexture,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });
    const hubPointsMesh = new THREE.Points(hubGeom, hubMaterial);
    globeGroup.add(hubPointsMesh);

    // 9. Curved Gold Network Arcs
    // Desktop: 5 connections; Mobile: 2 connections (strictly restrained)
    interface ArcData {
      curve: THREE.CubicBezierCurve3;
      pulseMesh: THREE.Points;
      pulseGeom: THREE.BufferGeometry;
      speed: number;
      progress: number;
    }

    const allArcPairs = [
      [0, 1], // Pune -> Dubai
      [2, 3], // London -> New York
      [0, 2], // Pune -> London
      [0, 4], // Pune -> Singapore
      [3, 5], // New York -> San Francisco
    ];

    const arcPairs = isMobile ? allArcPairs.slice(0, 2) : allArcPairs;

    const arcsData: ArcData[] = [];
    const arcLineMaterial = new THREE.LineBasicMaterial({
      color: colors.gold,
      transparent: true,
      opacity: colors.goldArcOpacity,
      depthWrite: false,
    });

    const pulseMaterial = new THREE.PointsMaterial({
      color: colors.goldGlow,
      size: isMobile ? 3.5 : 4.2,
      sizeAttenuation: false,
      map: circleTexture,
      transparent: true,
      opacity: 0.90,
      depthWrite: false,
    });

    arcPairs.forEach(([fromIdx, toIdx], pairIndex) => {
      if (!hubPoints[fromIdx] || !hubPoints[toIdx]) return;
      const p1 = hubPoints[fromIdx];
      const p2 = hubPoints[toIdx];

      const distance = p1.distanceTo(p2);
      const elevation = GLOBE_RADIUS + Math.min(0.48, distance * 0.20);

      const midPoint = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5).normalize().multiplyScalar(elevation);
      const cp1 = new THREE.Vector3().lerpVectors(p1, midPoint, 0.55).normalize().multiplyScalar(elevation * 0.98);
      const cp2 = new THREE.Vector3().lerpVectors(p2, midPoint, 0.55).normalize().multiplyScalar(elevation * 0.98);

      const curve = new THREE.CubicBezierCurve3(p1, cp1, cp2, p2);
      const curvePoints = curve.getPoints(isMobile ? 32 : 44);
      const curveGeom = new THREE.BufferGeometry().setFromPoints(curvePoints);
      const arcLine = new THREE.Line(curveGeom, arcLineMaterial);
      globeGroup.add(arcLine);

      // Smooth traveling pulse dot along arc
      const pulseGeom = new THREE.BufferGeometry();
      const pos = curve.getPoint(0);
      pulseGeom.setAttribute('position', new THREE.BufferAttribute(new Float32Array([pos.x, pos.y, pos.z]), 3));
      const pulseMesh = new THREE.Points(pulseGeom, pulseMaterial);
      globeGroup.add(pulseMesh);

      arcsData.push({
        curve,
        pulseMesh,
        pulseGeom,
        speed: 0.0022 + pairIndex * 0.0005,
        progress: (pairIndex * 0.25) % 1.0,
      });
    });

    // 10. Ambient Desktop Mouse Parallax (Desktop Only, ±3° max)
    let mouseX = 0;
    let targetMouseX = 0;
    const isDesktop = window.innerWidth >= 1024 && !('ontouchstart' in window);

    const onMouseMove = (e: MouseEvent) => {
      if (!isDesktop) return;
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      targetMouseX = x * 0.07;
    };

    if (isDesktop) {
      window.addEventListener('mousemove', onMouseMove, { passive: true });
    }

    // 11. Responsive Canvas ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newWidth, height: newHeight } = entry.contentRect;
        if (newWidth > 0 && newHeight > 0) {
          width = newWidth;
          height = newHeight;
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          renderer.setSize(width, height);
        }
      }
    });
    resizeObserver.observe(container);

    // 12. Theme Mutation Observer (Dark/Light mode color shifts)
    const themeObserver = new MutationObserver(() => {
      const darkNow = document.documentElement.classList.contains('dark');
      if (darkNow !== isDark) {
        isDark = darkNow;
        colors = getThemeColors(isDark, isMobile);
        latMaterial.color.setHex(colors.wireframe);
        latMaterial.opacity = colors.wireframeOpacity;
        equatorMaterial.color.setHex(colors.wireframe);
        equatorMaterial.opacity = colors.equatorOpacity;
        particleMaterial.color.setHex(colors.nodeColor);
        particleMaterial.opacity = colors.nodeOpacity;
        arcLineMaterial.opacity = colors.goldArcOpacity;
      }
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // 13. Smooth Animation Loop
    let animationFrameId: number;
    const animate = () => {
      if (!prefersReducedMotion) {
        // Slow ambient rotation (~110s per revolution)
        globeGroup.rotation.y += 0.0009;

        // Smooth desktop mouse damping
        if (isDesktop) {
          mouseX += (targetMouseX - mouseX) * 0.05;
          globeGroup.rotation.z = mouseX * 0.25;
        }

        // Advance travelling gold pulses along network arcs
        arcsData.forEach((arc) => {
          arc.progress = (arc.progress + arc.speed) % 1.0;
          const pos = arc.curve.getPoint(arc.progress);
          const posAttr = arc.pulseGeom.attributes.position as THREE.BufferAttribute;
          posAttr.setXYZ(0, pos.x, pos.y, pos.z);
          posAttr.needsUpdate = true;
        });
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // 14. Clean Resource Disposal on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      themeObserver.disconnect();
      if (isDesktop) {
        window.removeEventListener('mousemove', onMouseMove);
      }

      latLines.forEach((l) => l.geometry.dispose());
      latMaterial.dispose();
      equatorMaterial.dispose();
      lonLines.forEach((l) => l.geometry.dispose());
      particleGeom.dispose();
      particleMaterial.dispose();
      circleTexture.dispose();
      hubGeom.dispose();
      hubMaterial.dispose();
      arcLineMaterial.dispose();
      pulseMaterial.dispose();
      arcsData.forEach((arc) => arc.pulseGeom.dispose());
      renderer.dispose();

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden flex items-center justify-center pointer-events-none select-none bg-transparent"
      style={{ background: 'transparent' }}
      aria-hidden="true"
    >
      {!hasWebGL && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-transparent">
          <svg
            className="w-full max-w-[400px] opacity-15 text-foreground"
            viewBox="0 0 400 200"
            fill="none"
            stroke="currentColor"
          >
            <ellipse cx="200" cy="180" rx="190" ry="170" strokeWidth="1" />
            <ellipse cx="200" cy="180" rx="140" ry="120" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="10" y1="180" x2="390" y2="180" strokeWidth="1" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default FooterNetworkGlobe;
