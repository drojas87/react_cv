
export const CVData = {
    personalData: {
      name: 'Diego Rojas',
      title: 'Senior QA Engineer',
      image: 'https://bulma.io/images/placeholders/128x128.png',
      contacts: [
        { type: 'email', value: 'drojasrojasd@gmail.com' },
        { type: 'phone', value: '+5491141905026' },
        { type: 'location', value: 'Buenos Aires, Argentina' },
        { type: 'linkedin', value: 'https://www.linkedin.com/in/diego-alejandro-rojas-7661b814/' },
        { type: 'github', value: 'github.com/drojas87' }
      ]
    },
    sections: [
      {
        type: 'text',
        title: 'Career Profile',
        content: 'QA Engineer with experience in manual and automation testing. I have been working in the IT industry for more than 10 years. I have experience as a developer too. I have worked with different technologies and programming languages and automation frameworks . I have experience with databases',
        icon: 'usertie'
      },
      {
        type: 'experiences-list',
        title: 'Experiences',
        icon: 'archive',
        items: [
          {
            title: 'Studying and doing courses - Personal projects',
            company: 'My company',
            description: 'Cypress course : Cypress: Web Automation Testing from Zero to Hero. Udemy \n Appium course : ',
            companyWebSite: 'http://somecompanyexample.com',
            companyMeta: '',
            datesBetween: '2019.10 - Present',
            descriptionTags: ['Javascript', 'React']
          },
          {
            title: 'Software Developer',
            company: 'Some Company Example INC',
            description: 'I\'m using ReactJS and working as a front-end developer',
            companyWebSite: 'http://somecompanyexample.com',
            companyMeta: 'Little info about company',
            datesBetween: '2016.8 - 2017.10'
          },
          {
            title: 'Intern',
            company: 'Some Software Example INC',
            description: 'I was warming up.',
            companyWebSite: 'http://someexamplecompany.com',
            companyMeta: 'SF USA',
            datesBetween: '2012.06 - 2012.10'
          }
        ]
      },
      {
        type: 'common-list',
        title: 'Education',
        icon: 'graduation',
        items: [
          {
            title: 'Computer Engineering (BS)',
            authority: 'University',
            authorityWebSite: 'https://sample.edu',
            rightSide: '2013 - 2017'
          },
          {
            title: 'Some Department (PHD)',
            authority: 'Another University',
            authorityWebSite: 'https://sample.edu',
            rightSide: '2017 - Present'
          }
        ]
      },
      {
        type: 'projects-list',
        title: 'Projects',
        description: 'Optional',
        icon: 'tasks',
        groups: [
          {
            sectionHeader: 'Company Name',
            description: 'Optional',
            items: [
              { title: 'Project', projectUrl: 'optional', description: 'Optional' },
              { title: 'Project', projectUrl: 'optional', description: 'Optional' },
              { title: 'Project', projectUrl: 'optional', description: 'Optional' }
            ]
          }
        ]
      },
      {
        type: 'common-list',
        title: 'Conferences & Certificates',
        description: '',
        icon: 'comments',
        items: [
          {
            title: 'Some Conferences / 2019',
            authority: 'SomeConf',
            authorityWebSite: 'https://www.someconf.somesome'
          },
          {
            title: 'Some Conferences / 2019',
            authority: 'SomeConf',
            authorityMeta: 'Speaker',
            authorityWebSite: 'https://www.someconf.somesome',
            rightSide: 'test'
          },
          {
            title: 'Some Conferences / 2012',
            authorityMeta: 'Speaker'
          }
        ]
      },
      {
        type: 'common-list',
        title: 'Languages',
        icon: 'language',
        items: [
          {
            authority: 'English',
            authorityMeta: 'Professional'
          },
          {
            authority: 'Spanish',
            authorityMeta: 'Beginner'
          }
        ]
      },
      {
        type: 'tag-list',
        title: 'Skills Proficiency',
        icon: 'rocket',
        items: ['React', 'Javascript', 'CSS', 'SQL', 'SomeTech', 'CoolTech']
      },
      {
        type: 'tag-list',
        title: 'Hobbies & Interests',
        icon: 'cubes',
        items: ['Photography', 'Poetry']
      }
    ]
  }
  