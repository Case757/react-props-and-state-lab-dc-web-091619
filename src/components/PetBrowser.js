import React from 'react'

import Pet from './Pet'


class PetBrowser extends React.Component {
 

  renderPet() {
    return this.props.petsData.map( pet => {
    console.log(pet)
     return <Pet onAdoptPet={this.props.onAdoptPet} petInfo={pet} />
    })
  }
  

  render() {
    return <div className="ui cards">
      {this.renderPet()}
    </div>
  }
}

export default PetBrowser
