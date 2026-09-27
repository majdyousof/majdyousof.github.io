export type Project = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  status: string;
  link?: string;
};

// Coursework dates follow the reports/submission sheets; the website uses its first commit.
export const projects: Project[] = [
  {
    title: 'Water Resources Engineering',
    date: '2024-12-13',
    description:
      'Catchment water balance and hydrological modelling near Oxford, covering crop water demand, rainfall–runoff calibration, groundwater comparison and reservoir storage estimation.',
    tags: ['Python', 'Pandas', 'NumPy', 'SciPy', 'Hydrology', 'Coursework'],
    status: 'Done',
    link: 'https://github.com/majdyousof/water-resources',
  },
  {
    title: 'Heathrow Surface Access Dashboard',
    date: '2024-06-06',
    description:
      'A dashboard built using Python, Pandas, Plotly and Streamlit to visualize the surface access to Heathrow Airport. This was done to accompany a group report that scored 83.77%, winning the Peter Fraenkel Prize for the best project in the year group.',
    tags: ['Python', 'Pandas', 'Plotly', 'Streamlit', 'CBA', 'Coursework'],
    status: 'Done',
    link: 'https://www.majdyousof.com/heathrow-surface-access/',
  },
  {
    title: 'Transport Demand and Economics',
    date: '2024-12-11',
    description:
      'A Discrete Choice Modelling project investigating the effect of introducing micromobility on travel behaviour.',
    tags: [
      'Python',
      'Biogeme',
      'Pandas',
      'Discrete Choice Modelling',
      'Coursework',
    ],
    status: 'Done',
    link: 'https://github.com/majdyousof/TDECoursework',
  },
  {
    title: 'Truss Finite Element Analysis',
    date: '2023-04-05',
    description:
      '2D Finite Analysis of a train traversing a truss structure using MATLAB.',
    tags: ['MATLAB', 'FEA', 'Coursework'],
    status: 'Done',
    link: 'https://github.com/majdyousof/MATLAB-Truss-FEA',
  },
  {
    title: 'Personal Website (this site)',
    date: '2024-08-24',
    description:
      'This website was built using React and Typescript, with some Latex elements for aesthetics and some mathematics.',
    tags: ['React', 'Typescript', 'CSS'],
    status: 'WIP',
    link: 'https://github.com/majdyousof/majdyousof.github.io',
  },
];
