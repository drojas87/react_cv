import React, { Component } from 'react'
import PropTypes from 'prop-types'

import BulmaCSS from 'bulma/css/bulma.css'
import mergeClassNames from 'classnames'
import Profile from './Components/Profile'
import Styles from './styles.css';
import Section from './Components/Section'
import ExperiencesList from './Components/ExperiencesList'
import ProjectsList from './Components/ProjectsList'
import TagsList from './Components/TagsList'
import CommonList from './Components/CommonList'

const componnentMap = {
  'experiences-list': ExperiencesList,
  text: Section,
  'projects-list': ProjectsList,
  'tag-list': TagsList,
  'common-list': CommonList
};

export default class ReactCV extends Component {
  static propTypes = {
    personalData: PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string,
      contacts: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.oneOf(['email', 'website', 'phone', 'location', 'linkedin', 'github']),
        value: PropTypes.string
      })),
      languages: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        level: PropTypes.string
      })),
      interests: PropTypes.arrayOf(PropTypes.string)
    }),
    sections: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string,
      title: PropTypes.string
    })),
    branding: PropTypes.bool
  }

  static defaultProps = {
    personalData: {
      name: 'John Doe',
      title: 'Senior Software Developer',
      image: 'https://bulma.io/images/placeholders/128x128.png',
      contacts: [
        { type: 'email', value: 'drojasrojasd@gmail.com' },
        { type: 'phone', value: '+5491141905026' },
        { type: 'location', value: 'Buenos Aires' },
        { type: 'linkedin', value: 'https://www.linkedin.com/in/diego-alejandro-rojas-7661b814/' },
        { type: 'github', value: 'https://github.com/drojas87/' }
      ]},
    sections: [{
      type: 'text',
      title: 'Career Profile',
      content: 'Have been working in IT industry for more than 10 years',
      icon: 'usertie'
    }],
    branding: true
  }

  render() {
    return (
      <section className={mergeClassNames(Styles.appContainer, BulmaCSS.section)}>
        <main className={BulmaCSS.container}>
          <div className={mergeClassNames(Styles.cvContainer, BulmaCSS.box)}>
            <Profile
              {...this.props.personalData}
            />
            {
              this.props.sections.map((sectionDetails) => {
                const { type } = sectionDetails;
                const Comp = componnentMap[type] || Section; // Fallback to section for any case.
                return <Comp {...sectionDetails} />
              })
            }

          </div>
        </main>
        {this.props.branding && <div className={Styles.branding}>
          You can create your own CV like this. Try <a href='https://github.com/sbayd/react-cv' targt='_blank'>React-CV</a> now.
        </div>
        }
      </section>
    )
  }
}
