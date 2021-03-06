import { StatusBar, Image, ImageBackground } from 'react-native';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import { globalStyle } from './GlobalStyles/globalStyle.js';
import { RefreshControl } from 'react-native';
import React, { useState } from 'react'

import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  const [Refreshing, setRefreshing] = useState(false);
  return (
    <View style={globalStyle.container}>
      <StatusBar backgroundColor={'#000015'} />
      <View style = {globalStyle.Header}>
        <ImageBackground source={require('./assets/HeaderBG.png')} imageStyle = {{borderBottomLeftRadius: 75,}} style = {globalStyle.HeaderRadius}>
          <View style = {{flexDirection: 'row', flex: 1, }}>
            <TouchableOpacity style = {{flex: 1,flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Ionicons name="scan" size={24} color="#fffffe" />
            </TouchableOpacity>
            <View style = {{flex: 4, alignItems: 'center', justifyContent: 'center'}}>
              <Text style = {{color: '#fffffe', fontSize: 31-6, fontWeight: 'bold'}}>Go Virtual</Text>
            </View>
            <TouchableOpacity style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <FontAwesome name="search" size={24} color="#fffffe" />
            </TouchableOpacity>
          </View>
          <View style = {{flex: 1.5,}}>
            <View style = {{flex: .3}}></View>
            <View style = {{flex: 1 ,flexDirection: 'row'}}>
              <View style = {{flex: 1,}}></View>
              <ImageBackground source={require('./assets/HeaderBGRv.png')} imageStyle = {{ borderRadius: 31 - 11, opacity: .4}} style = {{flex: 6, flexDirection: 'row', backgroundColor: '#0f0f0f', borderRadius: 31-11}}>
                <ImageBackground source={require('./assets/ButtonBG.png')} imageStyle = {{ borderRadius: 31 - 11 }} resizeMode = "cover" style = {{flex: 1 ,margin: 9, backgroundColor: '#000', borderRadius: 31-11, borderWidth: 2, borderColor: '#999', justifyContent: 'center', alignItems: 'center'}}>
                  <Text style = {globalStyle.Text}>Class</Text>
                </ImageBackground>
                <TouchableOpacity style = {{flex: 1, flexDirection: 'row', margin: 9, borderRadius: 31-11, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style = {globalStyle.Text}>Work</Text>
                  <Ionicons name="book-outline" size={24} color="#fffffe" style = {{marginLeft: 13-1}} />
                </TouchableOpacity>
                <TouchableOpacity style = {{flex: 1, flexDirection: 'row', margin: 9, borderRadius: 31-11, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style = {globalStyle.Text}>Due</Text>
                  <Entypo name="hour-glass" size={24} color="#fffffe" />
                </TouchableOpacity>
              </ImageBackground>
              <View style = {{flex: 1,}}></View>
            </View>
            <View style = {{flex: .3, flexDirection: 'row'}}>
              <View style = {{flex: 1,}}></View>
              <View style = {{flex: .6, flexDirection: 'row'}}>
                <View style = {{flex: 1,margin: 8, backgroundColor: 'black', borderRadius: 9}}></View>
                <View style = {{flex: 1,margin: 9, backgroundColor: '#fff', borderRadius: 9}}></View>
                <View style = {{flex: 1,margin: 9, backgroundColor: '#fff', borderRadius: 9}}></View>
              </View>
              <View style = {{flex: 1,}}></View>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style = {globalStyle.Body}>
        <ScrollView refreshControl={<RefreshControl refreshing = { Refreshing }/>} nestedScrollEnabled style = {globalStyle.BodyRadius}><View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View style = {{height: 61-11}}>
            <TouchableOpacity style = {{flex: 1, alignItems: 'center', flexDirection: 'row', marginRight: 243}}>
              <Text style = {{fontSize: 31-11, color: '#192841', fontWeight: 'bold'}}>Modules</Text>
              <MaterialCommunityIcons name="sort-reverse-variant" size={24} color="#192841" style = {{marginLeft: 13-1}} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style = {{backgroundColor: '#19284114', padding: 11, borderRadius: 11,height: 111-11, margin: 15, marginRight: 3-3, flexDirection: 'row'}}>
            <View style = {{flex: 3-1, alignItems: 'center', justiyContent: 'center'}}>
              <Image source={require('./assets/Java.png')} style = {{height: 79, width: 79}} />
            </View>
            <View style = {{flex: 5,}}>
              <View style = {{flex: 1, justifyContent: 'center'}}>
                <Text style = {{color: '#444', fontSize: 15, fontWeight: 'bold', marginLeft: 13-1}}>Java Programming I</Text>
              </View>
              <View style = {{flex: 1, justifyContent: 'center'}}>
                <Text style = {{ fontSize: 14, color: '#777', marginLeft: 13-1}}>Introduction to Java Programming I</Text>
              </View>
            </View>
            <ImageBackground blurRadius = {16} imageStyle = {{ }} style = {globalStyle.GradeBG}>
              <Text style = {globalStyle.Grades}>Major</Text>
              <Text style = {globalStyle.Grades}>12</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style = {{backgroundColor: '#19284114', padding: 11, borderRadius: 11,height: 111-11, margin: 15, marginRight: 3-3, flexDirection: 'row'}}>
            <View style = {{flex: 3-1, alignItems: 'center', justiyContent: 'center'}}>
              <Image source={require('./assets/SoftwareM.png')} style = {{height: 44, width: 63, marginTop: 31-11}} />
            </View>
            <View style = {{flex: 5,}}>
              <View style = {{flex: 1, justifyContent: 'center'}}>
                <Text style = {{color: '#444', fontSize: 15, fontWeight: 'bold', marginLeft: 13-1}}>Software Modeling | Design</Text>
              </View>
              <View style = {{flex: 1, justifyContent: 'center'}}>
                <Text style = {{ fontSize: 14, color: '#777', marginLeft: 13-1}}>High Level Software Lifetime Stage</Text>
              </View>
            </View>
            <ImageBackground blurRadius = {16} sof imageStyle = {{ }} style = {globalStyle.GradeBG}>
              <Text style = {globalStyle.Grades}>Major</Text>
              <Text style = {globalStyle.Grades}>12</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style = {{backgroundColor: '#19284114', padding: 11, borderRadius: 11,height: 111-11, margin: 15, marginRight: 3-3, flexDirection: 'row'}}>
            <View style = {{flex: 3-1, alignItems: 'center', justiyContent: 'center'}}>
              <Image source={require('./assets/Math.jpg')} style = {{height: 79, width: 79, borderRadius: 51}} />
            </View>
            <View style = {{flex: 5,}}>
              <View style = {{flex: 1, justifyContent: 'center'}}>
                <Text style = {{color: '#444', fontSize: 15, fontWeight: 'bold', marginLeft: 13-1}}>Probability and Statistics</Text>
              </View>
              <View style = {{flex: 1, justifyContent: 'center'}}>
                <Text style = {{ fontSize: 14, color: '#777', marginLeft: 13-1}}>Information Gathering and Strategies</Text>
              </View>
            </View>
            <ImageBackground blurRadius = {16} sof imageStyle = {{ }} style = {globalStyle.GradeBG}>
              <Text style = {globalStyle.Grades}>Major</Text>
              <Text style = {globalStyle.Grades}>12</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style = {{backgroundColor: '#19284114', padding: 11, borderRadius: 11,height: 111-11, margin: 15, marginRight: 3-3, flexDirection: 'row'}}>
            <View style = {{flex: 3-1, alignItems: 'center', justiyContent: 'center'}}>
              <Image source={require('./assets/SQL.png')} style = {{height: 79, width: 79}} />
            </View>
            <View style = {{flex: 5,}}>
              <View style = {{flex: 1, justifyContent: 'center'}}>
                <Text style = {{color: '#444', fontSize: 15, fontWeight: 'bold', marginLeft: 13-1}}>Database Systems</Text>
              </View>
              <View style = {{flex: 1, justifyContent: 'center'}}>
                <Text style = {{ fontSize: 14, color: '#777', marginLeft: 13-1}}>Broad Overview of Databases</Text>
              </View>
            </View>
            <ImageBackground blurRadius = {16} sof imageStyle = {{ }} style = {globalStyle.GradeBG}>
              <Text style = {globalStyle.Grades}>Major</Text>
              <Text style = {globalStyle.Grades}>12</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style = {{backgroundColor: '#19284114', padding: 11, borderRadius: 11,height: 111-11, margin: 15, marginRight: 3-3, flexDirection: 'row'}}>
            <View style = {{flex: 3-1, alignItems: 'center', justiyContent: 'center'}}>
              <Image source={require('./assets/React.png')} style = {{height: 79, width: 79}} />
            </View>
            <View style = {{flex: 5,}}>
              <View style = {{flex: 1, justifyContent: 'center'}}>
                <Text style = {{color: '#444', fontSize: 15, fontWeight: 'bold', marginLeft: 13-1}}>Mobile Device Programming</Text>
              </View>
              <View style = {{flex: .8,}}>
                <Text style = {{ fontSize: 14, color: '#777', marginLeft: 13-1}}>Develop Apps for Android and IOS</Text>
              </View>
            </View>
            <ImageBackground blurRadius = {16} sof imageStyle = {{ }} style = {globalStyle.GradeBG}>
              <Text style = {globalStyle.Grades}>Major</Text>
              <Text style = {globalStyle.Grades}>12</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style = {{backgroundColor: '#19284114', padding: 11, borderRadius: 11,height: 111-11, margin: 15, marginRight: 3-3, flexDirection: 'row'}}>
            <View style = {{flex: 3-1, alignItems: 'center', justiyContent: 'center',}}>
              <Image source={require('./assets/Homer.png')} style = {{height: 69, width: 67}} />
            </View>
            <View style = {{flex: 5,}}>
              <View style = {{flex: 1, justifyContent: 'center'}}>
                <Text style = {{color: '#444', fontSize: 15, fontWeight: 'bold', marginLeft: 13-1}}>C++ Programming II</Text>
              </View>
              <View style = {{flex: 1, justifyContent: 'center'}}><ScrollView>
                <Text style = {{ fontSize: 14, color: '#777', marginLeft: 13-1}}>Introduction to Object Oriented Programming</Text>
                </ScrollView></View>
            </View>
            <ImageBackground blurRadius = {16} imageStyle = {{ }} style = {globalStyle.GradeBG}>
              <Text style = {globalStyle.Grades}>Major</Text>
              <Text style = {globalStyle.Grades}>12</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View></ScrollView>
      </View>
      <ImageBackground source={require('./assets/Footer.png')} style = {globalStyle.Footer}>
        <TouchableOpacity style = {{flex: 1, margin: 13, justifyContent: 'center', alignItems: 'center'}}>
          <Image source = {require('./assets/Home.png')} style = {{height: 54, width: 54}} />
        </TouchableOpacity>
        <TouchableOpacity style = {{flex: 1, margin: 13, justifyContent: 'center', alignItems: 'center'}}>
          <EvilIcons name="trophy" size={35} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity style = {{flex: 1, margin: 13, justifyContent: 'center', alignItems: 'center'}}>
          <Image source = {require('./assets/primeIcon.png')} style = {{height: 119, width: 119, marginBottom: 13-1}} />
        </TouchableOpacity>
        <TouchableOpacity style = {{flex: 1, margin: 13, justifyContent: 'center', alignItems: 'center'}}>
          <AntDesign name="message1" size={24} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity style = {{flex: 1, margin: 13, justifyContent: 'center', alignItems: 'center'}}>
          <Ionicons name="person-outline" size={24} color="grey" />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
//Styles -> ./GlobalStyles/globalStyle.js
//Most Non-repeating elements styled in-line
//This is the Home Screen, later to be migrated to ./Screens/Home.js
//Contains no linking to other screens
//::IMPORTANT::Java, Database sysstems and Mobile Dev Prog logos obtains from Personal-Use-Only Sites
//Have Not made ACTIVE grades, chat and profile logos yet

/*
TO FIX:
  ??? Body Elements scroll through radius
  ??? Scrollable body elements abstracted by Header 'FFFFFE' background
  ??? Horizontal ScrollView for 'Description' Touchables
*/