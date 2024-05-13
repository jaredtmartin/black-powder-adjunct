export function HorizontalDecoratorCap() {

    const lineStyles = {
        fill: "none",
        stroke: "var(--color-ink-blue)",
        strokeWidth: "0.264583px",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: "1"
    };

    const dotStyles = {
        fill: "var(--color-ink-blue)",
        fillOpacity: "1",
        strokeWidth: "0.264999",
        strokeLinejoin: "bevel",
        paintOrder: "stroke fill markers"
    };

    return (
        <svg
            width="40"
            height="8"
            viewBox="0 0 10.583333 2.1166667"
            version="1.1"
            id="svg1"
            xmlns="http://www.w3.org/2000/svg">
            <g
                id="layer1">
                <path
                    style={lineStyles as any}
                    d="m 10.583333,1.0583333 c 0,0 -0.536571,0.00767 -0.9050117,0.1126344 C 8.992521,1.3663451 7.82918,1.6072581 7.1849787,1.781091 6.2814468,2.0249022 5.3796577,1.9213193 4.8213863,1.916285 4.1379662,1.9101222 3.302108,1.4558757 2.8939338,1.0583333 2.4723748,0.64775481 2.1024693,0.22928814 1.4523862,0.22219341 0.85198388,0.21564088 0.3453884,0.54577703 0.34683851,1.0937441 0.34804273,1.548792 0.75465259,1.9550682 1.395483,1.9455473 1.8859769,1.93826 2.1388829,1.6783222 2.1309949,1.4237485 2.1098656,0.74183357 1.3575475,1.0937441 1.3575475,1.0937441"
                    id="path2" />
                <path
                    style={lineStyles as any}
                    d="M 5.85247,1.9457158 C 5.2640599,1.9379514 4.6108941,1.9976946 4.1844207,1.5070023 3.9660039,1.2556961 3.9554181,0.68970811 4.3362506,0.38373558 4.6909901,0.09872696 5.3652707,0.13722372 5.6800701,0.52292328 5.9596507,0.86547184 5.8673886,1.1970729 5.6702416,1.3583274 5.2114348,1.733604 4.8899833,1.0447658 4.8899833,1.0447658"
                    id="path2-1" />
                <ellipse
                    style={dotStyles as any}
                    id="path3"
                    cx="1.2654185"
                    cy="1.1473615"
                    rx="0.33329013"
                    ry="0.27638695" />
                <ellipse
                    style={dotStyles as any}
                    id="path3-2"
                    cx="4.8811946"
                    cy="1.0676879"
                    rx="0.33329013"
                    ry="0.27638695" />
                <ellipse
                    style={dotStyles as any}
                    id="path3-2-6"
                    cx="7.9238987"
                    cy="0.63320857"
                    rx="0.33329013"
                    ry="0.27638695" />
                <path
                    style={lineStyles as any}
                    d="m 8.6157204,1.4374979 c 0,0 -1.1497096,0.2608911 -1.4306075,0.011021 C 6.9428417,1.2330085 6.9347381,1.0256788 7.1094299,0.79130092 7.2846316,0.55623894 7.7637544,0.65145024 7.7637544,0.65145024"
                    id="path4" />
            </g>
        </svg>
    );
};
