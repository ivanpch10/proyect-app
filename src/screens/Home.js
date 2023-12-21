import { StyleSheet,View,Text,Button,TextInput } from 'react-native'
import { useState } from 'react'
import Categories from '../components/Categories'
import Counter from '../components/Counter'

const Home = ({navigation,route}) => {


  return (
        <>
            <Counter/>
            <Categories navigation={navigation} route={route}/>
        </>
  )
}

export default Home

const styles = StyleSheet.create({

})