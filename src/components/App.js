import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }


  onAdoptPet = (petId) => {
    let updatedPets = this.state.pets.map(pet => {
      if (pet.id === petId) {
        pet.isAdopted = true
        return pet
      }
      else {
        return pet
      }
    })
    this.setState({pets: updatedPets})
  }

  onSetPets = (pets) => {
    console.log(pets)
    this.setState({pets: pets})
  }

  onChangeType = (event) => {
    this.setState({filters: {type: event.target.value}}) 
  }

  onFindPetsClick = () => {
    let url = ""
    if (this.state.filters.type === "all") {
      url = "/api/pets"
    }
    else {
      url = `/api/pets?type=${this.state.filters.type}`
    }
    fetch(`${url}`)
    .then(resp => resp.json())
    .then(pets => this.onSetPets(pets))
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} petsData={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
