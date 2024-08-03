import { useRef } from 'react';

const items = [
  { t: 'Maketing', h: 'https://marketing-sass.netlify.app/', i: '/src/assets/port1.png' },
  { t: 'Finance', h: 'https://cool-praline-073310.netlify.app/', i: '/src/assets/port2.png' },
  { t: 'Medic', h: 'https://aesthetic-cucurucho-f78869.netlify.app/', i: '/src/assets/port3.png' },
  { t: 'Tesla', h: 'https://gleeful-gumdrop-d7e0bf.netlify.app/', i: '/src/assets/port4.png' },
  // New item added
  { t: 'Travel', h: 'https://dazzling-lily-19a2e2.netlify.app/', i: '/src/assets/port5.png' }
];

const Projects = () => {
  const handleMouseMove = (e, svg, clip) => {
    const point = svg.createSVGPoint();
    point.x = e.clientX;
    point.y = e.clientY;
    const ctm = svg.getScreenCTM().inverse();
    const coords = point.matrixTransform(ctm);
    clip.setAttribute('cx', coords.x);
    clip.setAttribute('cy', coords.y);
  };

  const handleTouchMove = (e, svg, clip) => {
    e.preventDefault();
    const touch = e.targetTouches[0];
    if (touch) {
      const point = svg.createSVGPoint();
      point.x = touch.clientX;
      point.y = touch.clientY;
      const ctm = svg.getScreenCTM().inverse();
      const coords = point.matrixTransform(ctm);
      clip.setAttribute('cx', coords.x);
      clip.setAttribute('cy', coords.y);
    }
  };

  return (
    <div className="max-w-6xl mx-auto z-[-0]">
      <main className="flex flex-wrap justify-center">
        {items.map((item, index) => {
          const svgRef = useRef(null);
          const clipRef = useRef(null);

          const handleMouseMoveWrapper = (e) => {
            if (svgRef.current && clipRef.current) {
              handleMouseMove(e, svgRef.current, clipRef.current);
            }
          };

          const handleTouchMoveWrapper = (e) => {
            if (svgRef.current && clipRef.current) {
              handleTouchMove(e, svgRef.current, clipRef.current);
            }
          };

          return (
            <div
              key={index}
              className="relative grid grid-cols-3 overflow-hidden w-[20rem] h-[19rem] border-solid border-2 border-[#038759] m-3 cursor-pointer bg-[#262626] rounded-sm shadow-xl transform-gpu transition-transform duration-200"
              onMouseMove={handleMouseMoveWrapper}
              onTouchMove={handleTouchMoveWrapper}
            >
              <svg ref={svgRef} viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
                <defs>
                  <clipPath id={`clip-${index}`}>
                    <circle ref={clipRef} cx="0" cy="0" r="150" fill="#000" />
                  </clipPath>
                </defs>
                <text fill="white" className="text-white text-sm  font-bold text-center transform-translate-x-1/2 -translate-y-1/2" x="24%" y="100%" dy="5em">
                  {item.t}
                </text>
                <g className='' clipPath={`url(#clip-${index})`}>
                  <a href={item.h} target='_blank' rel='noopener noreferrer'>
                    <image href={item.i} className='object-cover' width="100%" height="100%" preserveAspectRatio="xMinYMin slice" />
                    {/* <text className="text-white text-sm  font-bold text-center transform-translate-x-1/2 -translate-y-1/2" x="20%" y="100%" dy="4em">
                    <a href="" className='text-white bg-black'>
                    {item.t}
                    </a>
                    </text> */}
                  </a>
                </g>
              </svg>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Projects;
