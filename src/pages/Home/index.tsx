import React, { Fragment } from 'react'
import logo from '@/assets/images/logo.svg'
import { Button } from 'antd'
import styles from './index.less'

interface PageProps {}
interface State {
  show: boolean
}

class Home extends React.Component<PageProps, State> {
  constructor(props: PageProps) {
    super(props)
    this.state = {
      show: true,
    }
  }

  render() {
    return (
      <Fragment>
        <img
          src={logo}
          className={`${this.state.show ? styles.show : styles.hide} ${
            styles.appLogo
          }`}
        ></img>
        <div className={styles.buttonContainer}>
          <Button type="primary" onClick={this.handleClick}>
            Click Me!
          </Button>
        </div>
      </Fragment>
    )
  }

  handleClick = () => {
    this.setState({
      show: !this.state.show,
    })
  }
}

export default Home
