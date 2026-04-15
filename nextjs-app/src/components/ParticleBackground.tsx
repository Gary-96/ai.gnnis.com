'use client';

import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  z: number;
  vy: number;
  radius: number;
  color: number;
  dist?: number;
}

interface Vars {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  points: Point[];
  frameNo: number;
  camX: number;
  camY: number;
  camZ: number;
  scale: number;
  floor: number;
  distributionRadius: number;
  vortexHeight: number;
  initParticles: number;
  initV: number;
  cx: number;
  cy: number;
  pitch: number;
  yaw: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initialize variables
    const vars: Vars = {
      canvas,
      ctx,
      points: [],
      frameNo: 0,
      camX: 0,
      camY: 0,
      camZ: -14,
      scale: 500,
      floor: 26.5,
      distributionRadius: 800,
      vortexHeight: 25,
      initParticles: 700,
      initV: 0.01,
      cx: 0,
      cy: 0,
      pitch: 0,
      yaw: 0,
    };

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    vars.cx = canvas.width / 2;
    vars.cy = canvas.height / 2;

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      vars.cx = canvas.width / 2;
      vars.cy = canvas.height / 2;
    };
    window.addEventListener('resize', handleResize);

    // Initialize pitch
    vars.pitch = elevation(vars.camX, vars.camZ, vars.camY) - Math.PI / 2;
    vars.yaw = 0;

    // Helper functions
    function project3D(x: number, y: number, z: number): { x: number; y: number; d: number } {
      let p, d;
      x -= vars.camX;
      y -= vars.camY - 8;
      z -= vars.camZ;
      p = Math.atan2(x, z);
      d = Math.sqrt(x * x + z * z);
      x = Math.sin(p - vars.yaw) * d;
      z = Math.cos(p - vars.yaw) * d;
      p = Math.atan2(y, z);
      d = Math.sqrt(y * y + z * z);
      y = Math.sin(p - vars.pitch) * d;
      z = Math.cos(p - vars.pitch) * d;
      const rx1 = -1000,
        ry1 = 1,
        rx2 = 1000,
        ry2 = 1,
        rx3 = 0,
        ry3 = 0,
        rx4 = x,
        ry4 = z;
      const uc = (ry4 - ry3) * (rx2 - rx1) - (rx4 - rx3) * (ry2 - ry1);
      const ua = ((rx4 - rx3) * (ry1 - ry3) - (ry4 - ry3) * (rx1 - rx3)) / uc;
      const ub = ((rx2 - rx1) * (ry1 - ry3) - (ry2 - ry1) * (rx1 - rx3)) / uc;
      if (!z) z = 0.000000001;
      if (ua > 0 && ua < 1 && ub > 0 && ub < 1) {
        return {
          x: vars.cx + (rx1 + ua * (rx2 - rx1)) * vars.scale,
          y: vars.cy + (y / z) * vars.scale,
          d: x * x + y * y + z * z,
        };
      } else {
        return { x: 0, y: 0, d: -1 };
      }
    }

    function elevation(x: number, y: number, z: number): number {
      const dist = Math.sqrt(x * x + y * y + z * z);
      if (dist && z / dist >= -1 && z / dist <= 1) {
        return Math.acos(z / dist);
      }
      return 0.00000001;
    }

    function rgb(col: number): string {
      col += 0.000001;
      const r = parseInt(String((0.5 + Math.sin(col) * 0.5) * 16));
      const g = parseInt(String((0.5 + Math.cos(col) * 0.5) * 16));
      const b = parseInt(String((0.5 - Math.sin(col) * 0.5) * 16));
      return '#' + r.toString(16) + g.toString(16) + b.toString(16);
    }

    function interpolateColors(RGB1: number[], RGB2: number[], degree: number): number[] {
      const w2 = degree;
      const w1 = 1 - w2;
      return [
        w1 * RGB1[0] + w2 * RGB2[0],
        w1 * RGB1[1] + w2 * RGB2[1],
        w1 * RGB1[2] + w2 * RGB2[2],
      ];
    }

    function rgbArray(col: number): number[] {
      col += 0.000001;
      const r = parseInt(String((0.5 + Math.sin(col) * 0.5) * 256));
      const g = parseInt(String((0.5 + Math.cos(col) * 0.5) * 256));
      const b = parseInt(String((0.5 - Math.sin(col) * 0.5) * 256));
      return [r, g, b];
    }

    function colorString(arr: number[]): string {
      const r = parseInt(String(arr[0]));
      const g = parseInt(String(arr[1]));
      const b = parseInt(String(arr[2]));
      return (
        '#' +
        ('0' + r.toString(16)).slice(-2) +
        ('0' + g.toString(16)).slice(-2) +
        ('0' + b.toString(16)).slice(-2)
      );
    }

    function spawnParticle(): void {
      const p = Math.PI * 2 * Math.random();
      const ls = Math.sqrt(Math.random() * vars.distributionRadius);
      const pt: Point = {
        x: Math.sin(p) * ls,
        y: -vars.vortexHeight / 2,
        z: Math.cos(p) * ls,
        vy: vars.initV / 20 + Math.random() * vars.initV,
        radius: 200 + 800 * Math.random(),
        color: 0,
      };
      pt.color = pt.radius / 1000 + vars.frameNo / 250;
      vars.points.push(pt);
    }

    function drawFloor(): void {
      let x, y, z, d, point, a, size;
      for (let i = -25; i <= 25; i += 1) {
        for (let j = -25; j <= 25; j += 1) {
          x = i * 2;
          z = j * 2;
          y = vars.floor;
          d = Math.sqrt(x * x + z * z);
          point = project3D(x, y - (d * d) / 85, z);
          if (point.d !== -1) {
            size = 1 + 15000 / (1 + point.d);
            a = 0.15 - Math.pow(d / 50, 4) * 0.15;
            if (a > 0) {
              vars.ctx.fillStyle = colorString(
                interpolateColors(rgbArray(d / 26 - vars.frameNo / 40), [0, 128, 32], 0.5 + Math.sin(d / 6 - vars.frameNo / 8) / 2)
              );
              vars.ctx.globalAlpha = a;
              vars.ctx.fillRect(point.x - size / 2, point.y - size / 2, size, size);
            }
          }
        }
      }
      for (let i = -25; i <= 25; i += 1) {
        for (let j = -25; j <= 25; j += 1) {
          x = i * 2;
          z = j * 2;
          y = -vars.floor;
          d = Math.sqrt(x * x + z * z);
          point = project3D(x, y + (d * d) / 85, z);
          if (point.d !== -1) {
            size = 1 + 15000 / (1 + point.d);
            a = 0.15 - Math.pow(d / 50, 4) * 0.15;
            if (a > 0) {
              vars.ctx.fillStyle = colorString(
                interpolateColors(rgbArray(-d / 26 - vars.frameNo / 40), [32, 0, 128], 0.5 + Math.sin(-d / 6 - vars.frameNo / 8) / 2)
              );
              vars.ctx.globalAlpha = a;
              vars.ctx.fillRect(point.x - size / 2, point.y - size / 2, size, size);
            }
          }
        }
      }
    }

    function process(): void {
      while (vars.points.length < vars.initParticles) {
        for (let i = 0; i < 5; ++i) spawnParticle();
      }

      let p, d, t;
      p = Math.atan2(vars.camX, vars.camZ);
      d = Math.sqrt(vars.camX * vars.camX + vars.camZ * vars.camZ);
      d -= Math.sin(vars.frameNo / 80) / 25;
      t = Math.cos(vars.frameNo / 300) / 165;
      vars.camX = Math.sin(p + t) * d;
      vars.camZ = Math.cos(p + t) * d;
      vars.camY = -Math.sin(vars.frameNo / 220) * 15;
      vars.yaw = Math.PI + p + t;
      vars.pitch = elevation(vars.camX, vars.camZ, vars.camY) - Math.PI / 2;

      for (let i = 0; i < vars.points.length; ++i) {
        const x = vars.points[i].x;
        const y = vars.points[i].y;
        const z = vars.points[i].z;
        d = Math.sqrt(x * x + z * z) / 1.0075;
        t = 0.1 / (1 + (d * d) / 5);
        p = Math.atan2(x, z) + t;
        vars.points[i].x = Math.sin(p) * d;
        vars.points[i].z = Math.cos(p) * d;
        vars.points[i].y += vars.points[i].vy * t * ((Math.sqrt(vars.distributionRadius) - d) * 2);
        if (vars.points[i].y > vars.vortexHeight / 2 || d < 0.25) {
          vars.points.splice(i, 1);
          spawnParticle();
        }
      }
    }

    function frame(): void {
      vars.frameNo++;
      vars.ctx.globalAlpha = 0.15;
      vars.ctx.fillStyle = '#000';
      vars.ctx.fillRect(0, 0, vars.canvas.width, vars.canvas.height);
      process();
      drawFloor();
      vars.points.sort((a: Point, b: Point) => (b.dist || 0) - (a.dist || 0));
      for (let i = 0; i < vars.points.length; ++i) {
        const pt = project3D(vars.points[i].x, vars.points[i].y, vars.points[i].z);
        if (pt.d !== -1) {
          vars.points[i].dist = pt.d;
          const size = 1 + vars.points[i].radius / (1 + pt.d);
          const distY = Math.abs(vars.points[i].y);
          const al = 0.8 - Math.pow(distY / (vars.vortexHeight / 2), 1000) * 0.8;
          vars.ctx.globalAlpha = al >= 0 && al <= 1 ? al : 0;
          vars.ctx.fillStyle = rgb(vars.points[i].color);
          if (pt.x > -1 && pt.x < vars.canvas.width && pt.y > -1 && pt.y < vars.canvas.height) {
            vars.ctx.fillRect(pt.x - size / 2, pt.y - size / 2, size, size);
          }
        }
      }
      requestAnimationFrame(frame);
    }

    // Start animation
    frame();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}
