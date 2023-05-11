
  const data = [
    {
      title: 'Site Factors',
      questions: [
        {key:'a1', description:'Determine Site Class #1', question:"For Site Class A, which methods are used to determine the site Class?", false1:'Average field standard penetration resistance test  and, average standard penetration resistance test for cohesionless soil layers', false2:'Average undrained shear strength', false3: 'Any of the three methods', answer:'Average shear wave velocity', solution:"ASCE 7-16 chapter 20.3.5 \n \n The hard rock, Site Class A, category shall be supported by the shear wave velocity measurement either on site or on profiles of the same rock type in the same formation with an equal or higher degree of weathering and fracturing.", imgQ:"a1Q.png", imgS:"a1S.png", lectures:'2', difficulty:'easy'},
        {key:'a2', description:'Determine Site Class #2', question:"If a site profile contains a 10ft thick layer of very moist soil (moisture content = 50%) in the upper 100ft, and the result for the average shear wave velocity is 800 ft/s. What is the appropriate site class?", false1:'F', false2:'C', false3: 'D', answer:'E', solution:"ASCE 7-16 Table 20.3-1 \n \n Any soil profile with more than 10 ft of soil with a moisture content ≥ 40% should be classified as class E.", imgQ:"a1Q.png", imgS:"a1S.png", lectures:'2', difficulty:'easy'},
        {key:'a3', description:'Site Coefficients #1', question:"For a Site Class B with no site-specific velocity measurements, what should be the considered values for the site coefficients Fa and Fv?", false1:'0.75', false2:'1.25', false3: '0', answer:'1', solution:"ASCE 7-16 chapter 11.4.3 \n \n For conditions consistent with Site Class B, but site-specific velocity measurements are not made, the site coefficients Fa, Fv, and Fpga shall be taken as unity (1.0).", imgQ:"a1Q.png", imgS:"a1S.png", lectures:'1, 3, 8', difficulty:'easy'},
      ]
    },
    {
      title: 'Procedures & Limitations',
      questions: [
        {key:'b1', description:'Analysis Procedure #1', question:"Which of the following procedures is not allowed for a 170’ tall steel moment frame building in Seismic Design Category D with a fundamental building period of 4 seconds?", false1:'Modal Response Spectrum Analysis', false2:'Nonlinear Response History Procedures', false3: 'All procedures are allowed', answer:'Equivalent Lateral Force Procedure', solution:"Reference ASCE 7-16 Table 12.6-1 Permitted Analytical Procedures. The described structure would fall under the “All Other Structures” category because it does not fit into any of the structural characteristics for SDC D.", imgQ:"b1Q.png", imgS:"b1S.png", lectures:'3', difficulty:'easy'},
        {key:'b2', description:'Max building height #1', question:"What is the structure height limitation for a building reinforced with steel special truss moment frames and a Seismic Design Category E?", false1:'160 ft', false2:'No Limit', false3: 'Not Permitted', answer:'100 ft', solution:"ASCE 7-16 Table 12.2-1 Design Coefficients and Factors for Seismic Force-Resisting Systems Structural System Limitations Including Structural Height, $$h_n$$ (ft) $$Limits^d$$", imgQ:"b1Q.png", imgS:"b1S.png", lectures:'1, 3, 8', difficulty:'easy'},
      ]
    }
  ];


module.exports = {data};