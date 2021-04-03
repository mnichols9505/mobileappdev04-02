import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Image } from 'react-native';
import { rando, pokeFetch } from './util.js';

const maxPoke = 898;

export default class App extends Component{
  constructor()
  {
    super();
    this.state = {
      pokemonName: 'Matt',
      pokemonImage: { uri: ''},
    };
  }

async componentDidMount()
{
  const pokemon = await pokeFetch('pokemon', rando(1, maxPoke));
  console.log('pokemon: ', pokemon);

  // set the state property pokemon name to the 
  // name of the randomly fetched pokemon
  this.setState({
    pokemonName: pokemon.name,
    pokemonImage: {uri: pokemon.sprites.front_default}
  });
}

render()
{
  console.log(pokeFetch('pokemon', 1));
  return (
    <View style={styles.container}>
      <Image 
        style={styles.pokemonImage}
        source={this.state.pokemonImage}
      />
      <Text>Name: {this.state.pokemonName}</Text>
      <View>
        <Text>types</Text>
        <Text>electric</Text>
        <Text>Grass</Text>
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pokemonImage: {
    resizeMode: 'contain',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    width: 200,
    height: 200,
  }
});
