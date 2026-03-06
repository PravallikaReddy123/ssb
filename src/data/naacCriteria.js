/**
 * NAAC criteria structure: title, navbar items, and nested blocks (criteria → sections → subsections → files).
 * PDF URLs can be from Supabase documents or static links. Add your PDF links or load from Supabase.
 */
export const NAAC_NAVBAR = [
  { id: 'criteria-1', label: 'Criteria 1', href: '#criteria-1' },
  { id: 'criteria-2', label: 'Criteria 2', href: '#criteria-2' },
  { id: 'criteria-3', label: 'Criteria 3', href: '#criteria-3' },
  { id: 'criteria-4', label: 'Criteria 4', href: '#criteria-4' },
  { id: 'criteria-5', label: 'Criteria 5', href: '#criteria-5' },
  { id: 'criteria-6', label: 'Criteria 6', href: '#criteria-6' },
  { id: 'criteria-7', label: 'Criteria 7', href: '#criteria-7' },
  { id: 'iqac', label: 'IQAC', href: '#iqac' },
  { id: 'dvv', label: 'DVV', href: '#dvv' },
  { id: 'ssr', label: 'SSR', href: '#ssr' },
];

/**
 * Each criterion has sections; each section has subsections; each subsection has files (title + url).
 * Replace url with your Supabase public URL or static asset path.
 */
export const NAAC_CRITERIA = [
  {
    id: 'criteria-1',
    label: 'Criteria 1',
    sections: [
      {
        id: '1.1',
        label: '1.1 Curriculum Planning and Implementation',
        subsections: [
          {
            id: '1.1.1',
            label: '1.1.1',
            files: [
              { title: '1.1.1_file no:1- Academic Calendar', url: '#' },
              { title: '1.1.1_file no: 2- External Lab Time Table', url: '#' },
              { title: '1.1.1_file no: 3- Lesson Plan', url: '#' },
              { title: '1.1.1_file no:4- MID Exam QP', url: '#' },
              { title: '1.1.1_file no: 5- MID Evaluation Sheets', url: '#' },
            ],
          },
        ],
      },
      {
        id: '1.2',
        label: '1.2 Academic Flexibility',
        subsections: [
          {
            id: '1.2.1',
            label: '1.2.1',
            files: [
              { title: '1.2.1_file no:1- List Of Addon/Certificate/Value Added Courses', url: '#' },
              { title: '1.2.1_file no:2- Report on Value added Courses', url: '#' },
            ],
          },
          {
            id: '1.2.2',
            label: '1.2.2',
            files: [
              { title: '1.2.2_file no: 1 – List Of Students Certificate/Add-on/Value Added Courses', url: '#' },
              { title: '1.2.2_file no: 2- Attendance List Of Students', url: '#' },
            ],
          },
        ],
      },
      {
        id: '1.3',
        label: '1.3 Curriculum Enrichment',
        subsections: [
          { id: '1.3.1', label: '1.3.1', files: [{ title: '1.3.1_fileno:1- List Of Subjects Imbibed With The Curriculum', url: '#' }] },
          { id: '1.3.2', label: '1.3.2', files: [{ title: '1.3.2_fileno:1- Students List Of Field Projects /Projects/ Internships', url: '#' }] },
        ],
      },
      {
        id: '1.4',
        label: '1.4 Feedback System',
        subsections: [
          { id: '1.4.1', label: '1.4.1', files: [{ title: '1.4.1_file no:1- Unfilled Sample Feedback Form', url: '#' }] },
          { id: '1.4.2', label: '1.4.2', files: [{ title: '1.4.2_file no:1- Feedback Analysis and Action Report', url: '#' }] },
        ],
      },
    ],
  },
  {
    id: 'criteria-2',
    label: 'Criteria 2',
    sections: [
      {
        id: '2.1',
        label: '2.1 Student Enrolment and Profile',
        subsections: [
          { id: '2.1.1', label: '2.1.1', files: [{ title: '2.1.1_file no: 1- Approved BoM/GoB Intake Seats', url: '#' }] },
          { id: '2.1.2', label: '2.1.2', files: [{ title: '2.1.2_file no: 1- Approved List Of Filled Seats Against Reserved Seats', url: '#' }] },
        ],
      },
      {
        id: '2.2',
        label: '2.2 Student Teacher Ratio',
        subsections: [
          { id: '2.2.2', label: '2.2.2', files: [{ title: '2.2.2_file no: 1- List Of Faculty', url: '#' }, { title: '2.2.2_file no: 2- List Of Students Enrolled', url: '#' }] },
        ],
      },
    ],
  },
  {
    id: 'criteria-3',
    label: 'Criteria 3',
    sections: [
      {
        id: '3.1',
        label: '3.1 Resource Mobilization for Research',
        subsections: [
          { id: '3.1.1', label: '3.1.1', files: [{ title: '3.1.1_file no:1- E-copies of Grants', url: '#' }] },
        ],
      },
      {
        id: '3.2',
        label: '3.2 Innovation Ecosystem',
        subsections: [
          { id: '3.2.1', label: '3.2.1', files: [{ title: '3.2.1_file no:1- Entrepreneur Development Cell committee', url: '#' }] },
        ],
      },
    ],
  },
  {
    id: 'criteria-4',
    label: 'Criteria 4',
    sections: [
      { id: '4.1', label: '4.1 Physical Facilities', subsections: [{ id: '4.1.1', label: '4.1.1', files: [] }] },
      { id: '4.2', label: '4.2 Library as a Learning Resource', subsections: [{ id: '4.2.1', label: '4.2.1', files: [] }] },
    ],
  },
  {
    id: 'criteria-5',
    label: 'Criteria 5',
    sections: [
      { id: '5.1', label: '5.1 Student Support', subsections: [{ id: '5.1.1', label: '5.1.1', files: [] }] },
      { id: '5.2', label: '5.2 Student Progression', subsections: [{ id: '5.2.1', label: '5.2.1', files: [] }] },
    ],
  },
  {
    id: 'criteria-6',
    label: 'Criteria 6',
    sections: [
      { id: '6.1', label: '6.1 Institutional Vision and Leadership', subsections: [{ id: '6.1.1', label: '6.1.1', files: [] }] },
      { id: '6.2', label: '6.2 Strategy Development and Deployment', subsections: [{ id: '6.2.1', label: '6.2.1', files: [] }] },
    ],
  },
  {
    id: 'criteria-7',
    label: 'Criteria 7',
    sections: [
      { id: '7.1', label: '7.1 Institutional Values and Social Responsibilities', subsections: [{ id: '7.1.1', label: '7.1.1', files: [] }] },
      { id: '7.2', label: '7.2 Best Practices', subsections: [{ id: '7.2.1', label: '7.2.1', files: [] }] },
    ],
  },
  {
    id: 'iqac',
    label: 'IQAC',
    sections: [
      {
        id: 'iqac-docs',
        label: 'IQAC Documents',
        subsections: [
          { id: 'iqac-minutes', label: 'Minutes Of The Meeting', files: [{ title: 'View Document', url: '/committees/iqac' }] },
        ],
      },
    ],
  },
  {
    id: 'dvv',
    label: 'DVV',
    sections: [{ id: 'dvv-docs', label: 'DVV Documents', subsections: [{ id: 'dvv-1', label: 'DVV', files: [] }] }],
  },
  {
    id: 'ssr',
    label: 'SSR',
    sections: [{ id: 'ssr-docs', label: 'SSR Documents', subsections: [{ id: 'ssr-1', label: 'SSR', files: [] }] }],
  },
];
