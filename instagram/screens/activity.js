import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Image ,ScrollView,Text, View } from 'react-native';

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



const ActivityScreen = () => {  
    return (  
        <View style={styles.container}>  
          <View style={styles.aHeadView}>
            <Text style={styles.head}>Activity</Text>
          </View>

          <ScrollView showsVerticalScrollIndicator={false} style={styles.sContainer}>
            <View style={styles.actView}>
              <Image source={user1} style={styles.userPic}/>
              <Text style={styles.actText}>{username1} liked your Post.</Text>
            </View>

            <View style={styles.actView}>
              <Image source={user2} style={styles.userPic}/>
              <Text style={styles.actText}>{username2} liked your Post.</Text>
            </View>

            <View style={styles.actView}>
              <Image source={user1} style={styles.userPic}/>
              <Text style={styles.actText}>{username2} liked your Post.</Text>
            </View>

            <View style={styles.actView}>
              <Image source={user3} style={styles.userPic}/>
              <Text style={styles.actText}>{username3} liked your Post.</Text>
            </View>

            <View style={styles.actView}>
              <Image source={user4} style={styles.userPic}/>
              <Text style={styles.actText}>{username4} liked your Post.</Text>
            </View>

            <View style={styles.actView}>
              <Image source={user5} style={styles.userPic}/>
              <Text style={styles.actText}>{username5} liked your Post.</Text>
            </View>

            <View style={styles.actView}>
              <Image source={Uk} style={styles.userPic}/>
              <Text style={styles.actText}>{username6} liked your Post.</Text>
            </View>

            <View style={styles.actView}>
              <Image source={Uk} style={styles.userPic}/>
              <Text style={styles.actText}>{username7} liked your Post.</Text>
            </View>

            <View style={styles.actView}>
              <Image source={Uk} style={styles.userPic}/>
              <Text style={styles.actText}>{username8} liked your Post.</Text>
            </View>

            <View style={styles.actView}>
              <Image source={user3} style={styles.userPic}/>
              <Text style={styles.actText}>{username3} liked your Post.</Text>
            </View>

            <View style={styles.actView}>
              <Image source={user4} style={styles.userPic}/>
              <Text style={styles.actText}>{username4} liked your Post.</Text>
            </View>


          </ScrollView>
 
        </View>  
    );  
  }  

  export default ActivityScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    aHeadView:{
     
      top:0,
      left:0,
      width:"100%",
      height:60,
      width:"90%",
      marginTop:22,
    },

    head:{
      fontSize:22,
      padding:20,
      paddingLeft:5,
      fontWeight:'bold',
    },

    sContainer:{
      backgroundColor:"white",
 
      width:"95%",
    },

    actView:{
      flexDirection:'row',
      padding:10,
      alignItems: 'center',

    },

    userPic:{
      width: 50,
      height: 50,
      
      borderRadius:15,
      margin:10,
      marginLeft:4,
      marginVertical:3,
      
    },

    actText:{
      fontSize:16,
    },


  });