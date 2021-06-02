import React, {Fragment} from 'react'
import './Home.css'
import logo from '@/assets/images/logo.svg'
import PrimaryButton from '@/components/UI/PrimayButton'

interface Props {

}
interface State {
  show: boolean
}

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      show: true
    }
  }
  render() {
    return (
      <Fragment>
        <img src={logo} className={(this.state.show ? "show" : "hide") + " App-logo"}></img>
        <div className="button-container">
          <PrimaryButton click={this.handleClick} text="Click Me!"></PrimaryButton>
        </div>
      </Fragment>
    )
  }
  handleClick = () => {
    this.setState({
      show: this.state.show ? false : true
    })
  }
}

export default Home;