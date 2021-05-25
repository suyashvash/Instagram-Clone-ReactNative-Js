import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet,Image, ScrollView,TouchableOpacity,Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

import admin from '../assets/userImages/admin.jpg'
import user1 from '../assets/userImages/user1.jpg'
import user2 from '../assets/userImages/user2.jpg'
import user3 from '../assets/userImages/user3.jpg'
import user4 from '../assets/userImages/rohit.jpg'
import user5 from '../assets/userImages/aditi.jpg'
import Uk from '../assets/userImages/userUK.png'

const adminuser = "Suyash";
const username1 = "Alex";
const username2 = "Synthia";
const username3 = "Martha";
const username4 = "Rohit";
const username5 = "Aditi";
const username6 = "Arun";
const username7 = "Nikita";
const username8 = "Praveen";



const SearchScreen = () => {

    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    return (  
        <View style={styles.container}>  
          <View style={styles.sbarHolder}>
            <Searchbar placeholder="Search" style={styles.sbar}
              onChangeText={onChangeSearch} value={searchQuery} />
          </View>
          
          <ScrollView showsVerticalScrollIndicator={false} style={styles.sContainer}>
            
          <Text style={styles.Shead}>Recommended</Text>
            <View style={styles.userHodler}>
              <TouchableOpacity style={styles.userListing}>
                <Image source={user1} style={styles.userPic}/>
                <Text style={styles.userName}>{username1}</Text>

              </TouchableOpacity>

              <TouchableOpacity style={styles.userListing}>
              <Image source={user2} style={styles.userPic}/>
              <Text style={styles.userName}>{username2}</Text>

            </TouchableOpacity>
            </View>

            <View style={styles.userHodler}>
              <TouchableOpacity style={styles.userListing}>
                <Image source={user3} style={styles.userPic}/>
                <Text style={styles.userName}>{username3}</Text>

              </TouchableOpacity>

              <TouchableOpacity style={styles.userListing}>
              <Image source={user4} style={styles.userPic}/>
              <Text style={styles.userName}>{username4}</Text>

            </TouchableOpacity>
            </View>

            <View style={styles.userHodler}>
              <TouchableOpacity style={styles.userListing}>
                <Image source={user5} style={styles.userPic}/>
                <Text style={styles.userName}>{username5}</Text>

              </TouchableOpacity>

              <TouchableOpacity style={styles.userListing}>
              <Image source={Uk} style={styles.userPic}/>
              <Text style={styles.userName}>{username6}</Text>

            </TouchableOpacity>
            </View>

            <View style={styles.userHodler}>
              <TouchableOpacity style={styles.userListing}>
                <Image source={Uk} style={styles.userPic}/>
                <Text style={styles.userName}>{username7}</Text>

              </TouchableOpacity>

              <TouchableOpacity style={styles.userListing}>
              <Image source={Uk} style={styles.userPic}/>
              <Text style={styles.userName}>{username8}</Text>

            </TouchableOpacity>
            </View>

            
            
          </ScrollView>
          
          
        </View>  
    );  
  
};



export default SearchScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    sbarHolder:{
      
      top:0,
      left:0,
      width:"100%",
      height:80,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:22,
      
      
    },

    sbar:{
      backgroundColor:"whitesmoke",
      borderRadius:15,
      width:"90%",
    },

    sContainer:{
     
      backgroundColor:"white",
      width:"92%"
    },

    Shead:{
      fontSize:20,
      fontWeight:'bold',
      padding:20,
    },

    userHodler:{
      flex:1,
      flexDirection:'row',
      width:"100%",
      alignItems: 'center',
      justifyContent: 'center',
    },

    userListing:{
      margin:10,
      height:200,
      width:160,
      backgroundColor:"white",
      borderRadius:25,
      shadowColor: 'black',
      shadowOpacity: 1,
      elevation: 4,

      alignItems: 'center',
      justifyContent: 'center',
    },

    userPic:{
      width:"70%",
      height:"60%",
      borderRadius:20,
      marginBottom:10,
      
    },

    userName:{
      fontSize:18,
    },


  });