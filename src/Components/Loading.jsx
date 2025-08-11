import React, { useEffect } from "react";

const Loader = () => {
  useEffect(() => {
    const timer = setTimeout(() => {}, 2300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        html, body {
          background: radial-gradient(circle at center, #0a0a0a, #000);
          margin: 0;
          font-family: Arial, sans-serif;
          overflow: hidden;
        }

        .centered {
          width: 400px;
          height: 400px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: transparent;
          filter: contrast(25);
        }

        .circle {
          width: 80px;
          height: 80px;
          position: absolute;
          border-radius: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          box-shadow:
            0 0 20px rgba(255, 255, 255, 0.8),
            0 0 40px rgba(0, 255, 255, 0.6),
            0 0 60px rgba(255, 0, 150, 0.4);
          animation: pulse 1.8s ease-in-out infinite, spin 4s linear infinite;
        }

        .circle-1 {
          left: 20%;
          background: linear-gradient(145deg, #00f0ff, #007bff);
          animation: osc-l 1.8s ease-in-out infinite, pulse 1.8s ease-in-out infinite, spin 4s linear infinite;
        }

        .circle-2 {
          left: 80%;
          background: linear-gradient(145deg, #ff008c, #ff4d4d);
          animation: osc-r 1.8s ease-in-out infinite, pulse 1.8s ease-in-out infinite, spin-rev 4s linear infinite;
        }

        @keyframes osc-l {
          0%, 100% { left: 20%; }
          50% { left: 50%; }
        }

        @keyframes osc-r {
          0%, 100% { left: 80%; }
          50% { left: 50%; }
        }

        @keyframes pulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            box-shadow:
              0 0 25px rgba(255, 255, 255, 0.8),
              0 0 50px rgba(0, 255, 255, 0.6),
              0 0 80px rgba(255, 0, 150, 0.4);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.3);
            box-shadow:
              0 0 40px rgba(255, 255, 255, 1),
              0 0 80px rgba(0, 255, 255, 0.8),
              0 0 120px rgba(255, 0, 150, 0.6);
          }
        }

        @keyframes spin {
          0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
          100% { transform: translate(-50%, -50%) rotate(360deg) scale(1); }
        }

        @keyframes spin-rev {
          0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
          100% { transform: translate(-50%, -50%) rotate(-360deg) scale(1); }
        }

        .text h1 {
          color: #fff;
          text-align: center;
          font-weight: bold;
          position: absolute;
          top: 75%;
          left: 50%;
          transform: translateX(-50%);
          font-size: 2.5rem;
          letter-spacing: 4px;
          text-shadow:
            0 0 10px #0ff,
            0 0 20px #0ff,
            0 0 30px #ff00ff;
        }

        .text h1 span {
          display: inline-block;
          animation: bounce 0.6s infinite alternate;
        }

        .text h1 span:nth-child(2) { animation-delay: 0.1s; }
        .text h1 span:nth-child(3) { animation-delay: 0.2s; }
        .text h1 span:nth-child(4) { animation-delay: 0.3s; }
        .text h1 span:nth-child(5) { animation-delay: 0.4s; }
        .text h1 span:nth-child(6) { animation-delay: 0.5s; }
        .text h1 span:nth-child(7) { animation-delay: 0.6s; }

        @keyframes bounce {
          0% { transform: translateY(0); }
          100% { transform: translateY(-10px); }
        }
      `}</style>

      <div className="centered">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
      </div>

      <div className="text">
        <h1>
          <span>L</span>
          <span>o</span>
          <span>a</span>
          <span>d</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
        </h1>
      </div>
    </>
  );
};

export default Loader;
